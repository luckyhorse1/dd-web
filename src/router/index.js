import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '',
      name: 'home',
      component: () => import('@/components/Test.vue')
    }
  ]
})
