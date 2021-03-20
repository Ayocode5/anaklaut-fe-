import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },

        user(state) {
            return state.user
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },

        SET_USER(state, data) {
            state.user = data
        }
    },
    actions: {
        async signIn({ dispatch }, credential) {
            let response = await axios.post('auth/login', credential)
            return dispatch('attempt', response.data.access_token)
        },

        async attempt({ commit, state }, token) {
            if(token) {
                commit('SET_TOKEN', token)

            } 
            
            if(!state.token) {
                return
            }
            //set headers firts in subscriber.js

            try {
                let response = await axios.get('auth/me')

                commit('SET_USER', response.data)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        async signOut({ commit }) {
            
            return axios.post('auth/logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })

        },

        async registerUser(_, data) {
            let res = await axios.post('auth/register', {
                "name": data.name,
                "email": data.email,
                "password": data.password
            })
            return res
        }
    },
  }
  