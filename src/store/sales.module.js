import http from '../utils/http'
import moment from 'moment'
import { KEYS } from './constants'

export default {
  state: {
    data: [],
    loading: false
  },
  mutations: {
    salesLoading (state) {
      state.loading = true
    },
    salesLoaded (state) {
      state.loading = false
    },
    salesError (state, error) {
      console.log(error)
    },
    updateSales (state, sales) {
      state.data = sales
    }
  },
  actions: {
    getSales ({ commit }) {
      commit(KEYS.SALES.LOADING)
      return http.getSales()
        .then(sales => {
          commit(KEYS.SALES.UPDATE, sales)
          commit(KEYS.SALES.LOADED)
        })
        .catch(err => commit(KEYS.SALES.ERROR, err))
    },
    postSale ({ commit, dispatch }, sale) {
      commit(KEYS.SALES.LOADING)
      return http.postSale(sale)
        .then(() => dispatch(KEYS.SALES.GET))
        .catch(err => commit(KEYS.SALES.ERROR, err))
    }
  },
  getters: {
    sales: (state) => state.data,
    salesLoading: (state) => state.loading,
    totalSalesValue: (state) => state.data.reduce((a, b) => a + b.price, 0),
    lastSaleTime (state) {
      const lastSale = state.data[state.data.length - 1]
      return lastSale && moment(lastSale.date).format('HH:mm')
    }
  }
}
