// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'
import router from './router'

//vendor
import Vuetify from 'vuetify'
import Multiselect from 'vue-multiselect'
import VueDropzone from 'vue2-dropzone'

import './style/app.scss'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#423172',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

//vendor
Vue.component('multiselect', Multiselect)
Vue.component('vueDropzone', VueDropzone)

Vue.component('appHeader', appHeader)
Vue.component('appFooter', appFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
