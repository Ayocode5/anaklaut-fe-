import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/styles/index.css'

require('@/store/subscriber')

Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

//Prevent Flickering
store.dispatch('auth/attempt', localStorage.getItem('access_token')).then(() => {
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})

