import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', component: () => import('@/views/login/index.vue')},
    {path: '/register', component: () => import('@/views/register/index.vue')},
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Test.vue')
    }

  ]
})
