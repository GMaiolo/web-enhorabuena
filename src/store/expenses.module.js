import http from '../utils/http'
import { KEYS } from './constants'

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
      commit(KEYS.EXPENSES.LOADING)
      return http.getExpenses()
        .then(expenses => {
          commit(KEYS.EXPENSES.UPDATE, expenses)
          commit(KEYS.EXPENSES.LOADED)
        })
        .catch(err => commit(KEYS.EXPENSES.ERROR, err))
    },
    postExpense ({ commit, dispatch }, expense) {
      commit(KEYS.EXPENSES.LOADING)
      return http.postExpense(expense)
        .then(() => dispatch(KEYS.EXPENSES.GET))
        .catch(err => commit(KEYS.EXPENSES.ERROR, err))
    }
  },
  getters: {
    expenses: (state) => state.data,
    expensesLoading: (state) => state.loading,
    totalExpensesValue: (state) => state.data.reduce((a, b) => a + b.price, 0)
  }
}
