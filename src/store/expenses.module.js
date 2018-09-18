import http from '../utils/http'
import { KEYS } from './constants'

export default {
  state: {
    data: []
  },
  mutations: {
    updateExpenses (state, expenses) {
      state.data = expenses
    }
  },
  actions: {
    getExpenses ({ commit }) {
      return http.getExpenses()
        .then(expenses => commit(KEYS.EXPENSES.UPDATE, expenses))
        .catch(err => console.log(err))
    },
    postExpense ({ dispatch }, expense) {
      return http.postExpense(expense)
        .then(() => dispatch(KEYS.EXPENSES.GET))
        .catch(err => console.log(err))
    }
  },
  getters: {
    expenses: (state) => state.data,
    totalExpensesValue: (state) => state.data.reduce((a, b) => a + b.price, 0)
  }
}
