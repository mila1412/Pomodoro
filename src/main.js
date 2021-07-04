import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/app.styl'
import VueApexCharts from 'vue-apexcharts'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faList, faMusic, faChartBar, faPlus, faCheck, faPen, faUndo, faTrash, faPause, faForward, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle, faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

library.add(faList, faMusic, faPlay, faPlayCircle, faCircle, faCheckCircle, faChartBar, faPlus, faCheck, faPen, faUndo, faTrash, faPause, faForward, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSweetalert2)

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
