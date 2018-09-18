import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import SalesTable from './views/SalesTable.vue'
import ExpensesTable from './views/ExpensesTable.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'sales',
          name: 'sales',
          component: SalesTable
        },
        {
          path: 'expenses',
          name: 'expenses',
          component: ExpensesTable
        }
      ]
    }
  ]
})
