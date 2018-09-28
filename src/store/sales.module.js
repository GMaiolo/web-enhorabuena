import http from '../utils/http'
import moment from 'moment'

const baseFormat = 'DD-MM-YYYY'

const today = moment().format(baseFormat)

export default {
  state: {
    data: [],
    date: today,
    loading: false
  },
  mutations: {
    salesLoading (state) {
      state.loading = true
    },
    salesLoaded (state, date) {
      state.loading = false
      state.date = date || today
    },
    salesError (state, error) {
      console.log(error)
    },
    updateSales (state, sales) {
      state.data = sales
    }
  },
  actions: {
    getSales ({ commit, state }, date = today) {
      if (state.loading) return
      commit('salesLoading')
      return http.getSales(date)
        .then(sales => {
          commit('updateSales', sales)
          commit('salesLoaded', date)
        })
        .catch(err => commit('salesError', err))
    },
    postSale ({ commit, dispatch }, sale) {
      commit('salesLoading')
      return http.postSale(sale)
        .then(() => dispatch('getSales'))
        .catch(err => commit('salesError', err))
    },
    nextSalesDate ({ dispatch, state }) {
      const nextDate = moment(state.date, baseFormat).add(1, 'd').format(baseFormat)
      dispatch('getSales', nextDate)
    },
    prevSalesDate ({ dispatch, state }) {
      const prevDate = moment(state.date, baseFormat).subtract(1, 'd').format(baseFormat)
      dispatch('getSales', prevDate)
    }
  },
  getters: {
    sales: (state) => state.data,
    salesLoading: (state) => state.loading,
    currentSalesDate: (state) => state.date,
    totalSales: (state) => state.data.reduce((a, b) => a + (b.type !== 'diferencia' ? b.price : 0), 0),
    totalSalesCash: (state) => state.data.reduce((a, b) => {
      return a + (b.type === 'efectivo' ? b.price : 0)
    }, 0),
    totalSalesCard: (state) => state.data.reduce((a, b) => {
      return a + (b.type !== 'efectivo' && b.type !== 'diferencia' ? b.price : 0)
    }, 0),
    lastSaleTime (state) {
      const lastSale = state.data[state.data.length - 1]
      return lastSale && moment(lastSale.date).format('HH:mm')
    }
  }
}
