import http from '../utils/http'
import moment from 'moment'

const baseFormat = 'DD-MM-YYYY'

const today = moment().format(baseFormat)

export default {
  namespaced: true,
  state: {
    data: [],
    date: today,
    loading: false
  },
  mutations: {
    loading (state) {
      state.loading = true
    },
    loaded (state, date) {
      state.loading = false
      state.date = date || today
    },
    error (state, error) {
      console.log(error)
    },
    update (state, sales) {
      state.data = sales
    }
  },
  actions: {
    get ({ commit, state }, date = today) {
      if (state.loading) return
      commit('loading')
      return http.getSales(date)
        .then(sales => {
          commit('update', sales)
          commit('loaded', date)
        })
        .catch(err => commit('error', err))
    },
    post ({ commit, dispatch }, sale) {
      commit('loading')
      return http.postSale(sale)
        .then(() => dispatch('get'))
        .catch(err => commit('error', err))
    },
    nextDate ({ dispatch, state }) {
      const nextDate = moment(state.date, baseFormat).add(1, 'd').format(baseFormat)
      dispatch('get', nextDate)
    },
    prevDate ({ dispatch, state }) {
      const prevDate = moment(state.date, baseFormat).subtract(1, 'd').format(baseFormat)
      dispatch('get', prevDate)
    }
  },
  getters: {
    list: (state) => state.data,
    loading: (state) => state.loading,
    currentDate: (state) => state.date,
    total: (state) => state.data.reduce((a, b) => a + (b.type !== 'diferencia' ? b.price : 0), 0),
    totalCash: (state) => state.data.reduce((a, b) => {
      return a + (b.type === 'efectivo' ? b.price : 0)
    }, 0),
    totalCard: (state) => state.data.reduce((a, b) => {
      return a + (b.type !== 'efectivo' && b.type !== 'diferencia' ? b.price : 0)
    }, 0)
  }
}
