import http from '../utils/http'
import moment from 'moment'
import { KEYS } from './constants'

export default {
  state: {
    data: []
  },
  mutations: {
    updateSales (state, sales) {
      state.data = sales
    }
  },
  actions: {
    getSales ({ commit }) {
      return http.getSales()
        .then((sales) => commit(KEYS.SALES.UPDATE, sales))
        .catch(err => console.log(err))
    },
    postSale ({ dispatch }, sale) {
      return http.postSale(sale)
        .then(() => dispatch(KEYS.SALES.GET))
        .catch(err => console.log(err))
    }
  },
  getters: {
    sales: (state) => state.data,
    totalSalesValue: (state) => state.data.reduce((a, b) => a + b.price, 0),
    lastSaleTime (state) {
      const lastSale = state.data[state.data.length - 1]
      return lastSale && moment(lastSale.date).format('HH:mm')
    }
  }
}
