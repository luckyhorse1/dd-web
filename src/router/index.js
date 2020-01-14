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
          path: 'updatePhone',
          name: 'updatePhone',
          component: () => import('@/views/userSpace/updatePhone/index'),
          meta: {title: '修改手机号', icon: 'updatePhone'}
        },
        {
          path: 'updatePassword',
          name: 'updatePassword',
          component: () => import('@/views/userSpace/updatePassword/index'),
          meta: {title: '修改密码', icon: 'updatePassword'}
        }]
    },
    {
      path: '/taskSpace',
      component: Layout,
      redirect: '/taskSpace/taskAll',
      name: 'taskSpace',
      meta: {title: '任务中心', icon: 'taskSpace'},
      children: [
        {
          path: 'taskAll',
          name: 'taskAll',
          component: () => import('@/views/taskSpace/taskAll/index'),
          meta: {title: '任务大厅', icon: 'taskAll'}
        },
        {
          path: 'taskComp',
          name: 'taskComp',
          component: () => import('@/views/taskSpace/taskComp/index'),
          meta: {title: '公司任务', icon: 'taskComp'}
        },
        {
          path: 'taskMe',
          name: 'taskMe',
          component: () => import('@/views/taskSpace/taskMe/index'),
          meta: {title: '我的任务', icon: 'taskMe'}
        }
      ]
    },
    {
      path: '/compSpace',
      component: Layout,
      redirect: '/compSpace/compAll',
      name: 'compSpace',
      meta: {title: '公司中心', icon: 'compSpace'},
      children: [
        {
          path: 'compAll',
          name: 'compAll',
          component: () => import('@/views/compSpace/compAll/index'),
          meta: {title: '公司列表', icon: 'compAll'}
        },
        {
          path: 'compApplyLog',
          name: 'compApplyLog',
          component: () => import('@/views/compSpace/compApplyLog/index'),
          meta: {title: '申请记录', icon: 'compApplyLog'}
        },
        {
          path: 'compMe',
          name: 'compMe',
          component: () => import('@/views/compSpace/compMe/index'),
          meta: {title: '我的公司', icon: 'compMe'}
        }
      ]
    }
  ]
})
