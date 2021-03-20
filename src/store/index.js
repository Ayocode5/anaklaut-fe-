import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import cart from './cart'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status_order: false
  },

  getters: {
    getStatusOrder(state) {
      return state.status_order
    }
  },

  mutations: {
    SET_STATUS_ORDER(state, status) {
      state.status_order = status
    },


  },

  actions: {
    //
  },

  modules: {
    cart,
    auth,
    search
  }


})
