import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue'),

    // beforeEnter(to, from, next) { //SIMPLE MIDDLEWARE
    //   console.log(to, from)
    //   if(!store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'SignIn'
    //     })
    //   }
      
    //   next()
      
    // }
  },
  {
    path: '/details/:id',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
    meta: {
      can_search: store.getters['search/canSearch']
    }
  },
  {
    path: '/success/',
    name: 'Success',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue'),
    meta: {
      newPaymentExist: true
    }
  },
  {
    path: '/cart/',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
  },
  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/signout',
    name: 'SignOut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignOut.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//SIMPLE MIDDLEWARE
router.beforeEach((to, from, next) => {

  switch (to.path) {
    case "/success":
      if(to.matched.some(rec => rec.meta.newPaymentExist)) {
        console.log("ada payment")
        next()
      } else {
        next({name: 'Home'})
        console.log("tidak ada payemnt")
      }
      break

    case "/search": //MASUK KE PAGE SEARCH HANYA BISA JIKA state.canSearch DI FILE search.js bernilai true
                    // Supaya page search tidak diakses tanpa ada data hasil pencarian (state.results) terlebih dulu
      // if(to.matched.some(args => args.meta.canSearch)) {
      //   next()
      // } else {
      //   next({name: 'Home'})
      // }
      next()
      break;
  
    default:
      break;
  }
  
  next();
});

export default router
