import http from '../utils/http'

export default {
  state: {
    data: [],
    loading: false
  },
  mutations: {
    expensesLoading (state) {
      state.loading = true
    },
    expensesLoaded (state) {
      state.loading = false
    },
    expensesError (state, error) {
      console.log(error)
    },
    updateExpenses (state, expenses) {
      state.data = expenses
    }
  },
  actions: {
    getExpenses ({ commit }) {
      commit('expensesLoading')
      return http.getExpenses()
        .then(expenses => {
          commit('updateExpenses', expenses)
          commit('expensesLoaded')
        })
        .catch(err => commit('expensesError', err))
    },
    postExpense ({ commit, dispatch }, expense) {
      commit('expensesLoading')
      return http.postExpense(expense)
        .then(() => dispatch('getExpenses'))
        .catch(err => commit('expensesError', err))
    }
  },
  getters: {
    expenses: (state) => state.data,
    expensesLoading: (state) => state.loading,
    totalExpensesValue: (state) => state.data.reduce((a, b) => a + b.price, 0)
  }
}
