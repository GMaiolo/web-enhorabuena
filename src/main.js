import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'typeface-roboto'

// send fa things to self script
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faArrowLeft, faThList, faSpinner, faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faArrowLeft, faThList, faSpinner, faLongArrowAltRight, faLongArrowAltLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
