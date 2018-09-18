import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    activeModal: null
  },
  mutations: {
    openSalesModal (state) {
      state.activeModal = 'sales'
    },
    openExpensesModal (state) {
      state.activeModal = 'expenses'
    },
    closeModal (state) {
      state.activeModal = null
    }
  },
  getters: {
    activeModal: (state) => state.activeModal
  }
}
