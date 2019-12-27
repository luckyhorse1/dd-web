import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', component: () => import('@/views/login/index')},
    {path: '/register', component: () => import('@/views/register/index')},
    {
      path: '',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: {title: '首页', icon: 'home'}
      }]
    },
    {
      path: '/userSpace',
      component: Layout,
      redirect: '/userSpace/userInfo',
      name: 'userSpace',
      meta: {title: '个人中心', icon: 'userSpace'},
      children: [
        {
          path: 'userInfo',
          name: 'userInfo',
          component: () => import('@/views/userSpace/userInfo/index'),
          meta: {title: '个人信息', icon: 'userInfo'}
        },
        {
          path: 'userAccount',
          name: 'userAccount',
          component: () => import('@/views/userSpace/userAccount/index'),
          meta: {title: '账户信息', icon: 'userAccount'}
        }]
    }
  ]
})
