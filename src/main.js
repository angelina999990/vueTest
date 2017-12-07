// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'
import router from './router'
import Vuetify from 'vuetify'

//  TODO: move style file style folder
import '../node_modules/vuetify/dist/vuetify.min.css'
import './style/font-awesome.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.component('appHeader', appHeader)
Vue.component('appFooter', appFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
