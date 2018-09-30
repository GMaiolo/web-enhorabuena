import http from '../utils/http'

export default {
  namespaced: true,
  state: {
    data: [],
    loading: false
  },
  mutations: {
    loading (state) {
      state.loading = true
    },
    loaded (state) {
      state.loading = false
    },
    error (state, error) {
      console.log(error)
    },
    update (state, sales) {
      state.data = sales
    }
  },
  actions: {
    get ({ commit, state }, date) {
      commit('loading')
      return http.getSales(date)
        .then(sales => {
          commit('update', sales)
          commit('loaded')
        })
        .catch(err => commit('error', err))
    },
    post ({ commit, dispatch }, sale) {
      commit('loading')
      return http.postSale(sale)
        .then(() => dispatch('get'))
        .catch(err => commit('error', err))
    }
  },
  getters: {
    list: (state) => state.data,
    loading: (state) => state.loading, // loading para get y otro pa post y unirlos
    total: (state) => state.data.reduce((a, b) => a + (b.type !== 'diferencia' ? b.price : 0), 0),
    totalCash: (state) => state.data.reduce((a, b) => {
      return a + (b.type === 'efectivo' ? b.price : 0)
    }, 0),
    totalCard: (state) => state.data.reduce((a, b) => {
      return a + (b.type !== 'efectivo' && b.type !== 'diferencia' ? b.price : 0)
    }, 0)
  }
}
