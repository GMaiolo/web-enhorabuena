import http from '../utils/http'

export default {
  namespaced: true,
  state: {
    data: [],
    loading: false
  },
  mutations: {
    loading (state) {
      state.loading = true
    },
    loaded (state) {
      state.loading = false
    },
    error (state, error) {
      console.log(error)
    },
    update (state, expenses) {
      state.data = expenses
    }
  },
  actions: {
    get ({ commit }) {
      commit('loading')
      return http.getExpenses()
        .then(expenses => {
          commit('update', expenses)
          commit('loaded')
        })
        .catch(err => commit('error', err))
    },
    post ({ commit, dispatch }, expense) {
      commit('loading')
      return http.postExpense(expense)
        .then(() => dispatch('get'))
        .catch(err => commit('error', err))
    }
  },
  getters: {
    list: (state) => state.data,
    loading: (state) => state.loading,
    total: (state) => state.data.reduce((a, b) => a + b.price, 0)
  }
}
