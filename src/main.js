import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/styles/index.css'

require('@/store/subscriber')

Vue.config.productionTip = false

axios.defaults.baseURL = "https://anaklaut-backend.xyz/api"
// axios.defaults.baseURL = "http://127.0.0.1:8000/api"


// const carts = localStorage.getItem('carts')
// store.dispatch('cart/loadCart', JSON.parse(carts))

//Prevent Flickering
store.dispatch('auth/attempt', localStorage.getItem('access_token')).then(() => {

  if(JSON.parse(localStorage.getItem('carts'))) {
    store.dispatch('cart/loadCart', JSON.parse(localStorage.getItem('carts')))
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})

