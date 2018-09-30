import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    active: null
  },
  mutations: {
    openSales (state) {
      state.active = 'sales'
    },
    openExpenses (state) {
      state.active = 'expenses'
    },
    close (state) {
      state.active = null
    }
  },
  getters: {
    active: (state) => state.active,
    salesActive: (state) => state.active === 'sales',
    expensesActive: (state) => state.active === 'expenses'
  }
}
