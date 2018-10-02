import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

import modal from './modal.module'
import sales from './sales.module'
import expenses from './expenses.module'

const dateFormat = 'DD-MM-YYYY'
const today = moment().format(dateFormat)

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal,
    sales,
    expenses
  },
  state: {
    date: today
  },
  mutations: {
    setDate (state, date) {
      state.date = date
    },
    nextDate (state) {
      const next = moment(state.date, dateFormat).add(1, 'd').format(dateFormat)
      state.date = next
    },
    prevDate (state) {
      const prev = moment(state.date, dateFormat).subtract(1, 'd').format(dateFormat)
      state.date = prev
    }
  },
  actions: {
    getAll ({ dispatch }, date) {
      return Promise.all([
        dispatch('sales/get', date),
        dispatch('expenses/get', date)
      ])
    },
    reset ({ dispatch, commit }) {
      commit('setDate', today)
      return dispatch('getAll', today)
    },
    nextDate ({ state, commit, dispatch, getters }) {
      if (getters.loading) return
      commit('nextDate')
      return dispatch('getAll', state.date)
    },
    prevDate ({ state, commit, dispatch, getters }) {
      if (getters.loading) return
      commit('prevDate')
      return dispatch('getAll', state.date)
    }
  },
  getters: {
    date: (state) => state.date,
    isToday: (state) => state.date === today,
    loading: (state) => state.sales.loading || state.expenses.loading
  }
})
