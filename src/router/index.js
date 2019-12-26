import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', component: () => import('@/views/login/index.vue')},
    {path: '/register', component: () => import('@/views/register/index.vue')},
    {
      path: '',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('@/components/Test.vue'),
        meta: {title: '首页', icon: 'home'}
      }]
    }

  ]
})
