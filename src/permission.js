import router from './router'
import {getToken} from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    console.log('get')
    if (to.path === '/login') {
      next({path: '/'})
    } else{
      next()
    }
  } else {
    console.log('not get')
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
