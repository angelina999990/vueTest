import Vue from 'vue'
import Router from 'vue-router'
import Application from '@/components/application'
import Procedure from '@/components/procedure'
import Contact from '@/components/contact'
import Home from '@/components/home'
import Login from '@/components/login'
import Ui from '@/components/ui'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/application', name: 'application', component: Application},
    {path: '/procedure', name: 'procedure', component: Procedure},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/login', name: 'login', component: Login},

    {path: '/ui', name: 'ui', component: Ui}
  ]
})
