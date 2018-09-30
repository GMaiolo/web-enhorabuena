import http from '../utils/http'

export default {
  namespaced: true,
  state: {
    data: [],
    getting: false,
    posting: false
  },
  mutations: {
    getting (state) {
      state.getting = true
    },
    gotten (state) {
      state.getting = false
    },
    posting (state) {
      state.posting = true
    },
    posted (state) {
      state.posting = false
    },
    error (state, error) {
      console.error(error.data.error)
    },
    update (state, sales) {
      state.data = sales
    }
  },
  actions: {
    get ({ commit, state }, date) {
      commit('getting')
      return http.getSales(date)
        .then(sales => {
          commit('update', sales)
          commit('gotten')
        })
        .catch(err => commit('error', err))
    },
    post ({ commit, dispatch }, sale) {
      commit('posting')
      return http.postSale(sale)
        .then(() => dispatch('get'))
        .catch(err => commit('error', err))
        .then(() => commit('posted'))
    }
  },
  getters: {
    list: (state) => state.data,
    getting: (state) => state.getting,
    posting: (state) => state.posting,
    loading: (state) => state.getting || state.posting,
    total: (state) => state.data.reduce((a, b) => a + (b.type !== 'diferencia' ? b.price : 0), 0),
    totalCash: (state) => state.data.reduce((a, b) => {
      return a + (b.type === 'efectivo' ? b.price : 0)
    }, 0),
    totalCard: (state) => state.data.reduce((a, b) => {
      return a + (b.type !== 'efectivo' && b.type !== 'diferencia' ? b.price : 0)
    }, 0)
  }
}
