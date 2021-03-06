import http from '../utils/http'

export default {
  namespaced: true,
  state: {
    data: [],
    getting: false,
    posting: false
  },
  mutations: {
    getting (state) {
      state.getting = true
    },
    gotten (state) {
      state.getting = false
    },
    posting (state) {
      state.posting = true
    },
    posted (state) {
      state.posting = false
    },
    error (state, error) {
      console.error(error.data.error)
    },
    update (state, expenses) {
      state.data = expenses
    }
  },
  actions: {
    get ({ commit, state }, date) {
      commit('getting')
      return http.getExpenses(date)
        .then(expenses => {
          commit('update', expenses)
          commit('gotten')
        })
        .catch(err => commit('error', err))
    },
    post ({ commit, dispatch }, expense) {
      commit('posting')
      return http.postExpense(expense)
        .then(() => dispatch('get'))
        .catch(err => commit('error', err))
        .then(() => commit('posted'))
    }
  },
  getters: {
    quantity: (state) => state.data.length,
    list: (state) => state.data,
    getting: (state) => state.getting,
    posting: (state) => state.posting,
    loading: (state) => state.getting || state.posting,
    total: (state) => state.data.reduce((a, b) => a + b.price, 0)
  }
}
