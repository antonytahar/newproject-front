import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/Login'
// import store from '@/store'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
