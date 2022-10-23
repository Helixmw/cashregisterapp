import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import NotFound from './components/NotFound.vue'
import Pos from './components/Pos.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faShoppingCart, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from 'vue-apexcharts'


library.add(faCoffee)
library.add(faStar)
library.add(faTimes)
library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(axios)

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/cashregisterapp',
      component: Pos,
      name: 'pos'
    },
    {
      path: '/sales',
      component: NotFound,
    },
    {
      path: '/inventory',
      component: NotFound,
    },
    {
      path: '/reports',
      component: NotFound,
    },
    {
      path: '/user',
      component: NotFound,
    },
    {
      path: '/logout',
      component: NotFound,
    },
    {
      path: '/help',
      component: NotFound,
    },
  ],
  mode: 'history'
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
