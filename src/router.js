import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:type?',
      name: 'main',
      component: Main,
      beforeEnter (to, from, next) {
        store.dispatch('reset').finally(next)
      }
    }
  ]
})
