import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/styles/index.css'

require('@/store/subscriber')

Vue.config.productionTip = false

axios.defaults.baseURL = "https://anaklaut-backend.xyz/api"

//Prevent Flickering
store.dispatch('auth/attempt', localStorage.getItem('access_token')).then(() => {
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})

