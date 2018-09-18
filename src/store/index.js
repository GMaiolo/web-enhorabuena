import Vue from 'vue'
import Vuex from 'vuex'

import modal from './modal.module'
import sales from './sales.module'
import expenses from './expenses.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal,
    sales,
    expenses
  }
})
