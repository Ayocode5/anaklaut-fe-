export default {

    namespaced: true,
    state: {
        payload: null,
        results: { data: { data: null } },
        canSearch: false
    },

    getters: {

        getSearchPayload(state) {
            return state.payload
        },

        getResults(state) {
            return state.results
        },

        canSearch(state) {
            return state.canSearch
        }

    },

    mutations: {

        CAN_SEARCH(state, bool) {
            state.canSearch = bool
        },

        SET_SEARCH_PAYLOAD(state, payload) {
            state.payload = payload
        },

        SET_RESULTS(state, result) {
            state.results = result
        }

    },

    actions: {

        setSearchPayload({ commit }, payload) {
            commit('SET_SEARCH_PAYLOAD', payload)
            commit("CAN_SEARCH", true)
        },

        setResults({ commit }, result) {
            commit('SET_RESULTS', result)
        }
    },
}