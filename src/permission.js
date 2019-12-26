import router from './router'
import {getToken} from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import consts from '@/const'

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    console.log(consts.ddWebLogHeader + 'has token')
    if (whiteList.indexOf(to.path) !== -1) {
      next({path: '/'})
    } else{
      next()
    }
  } else {
    console.log(consts.ddWebLogHeader + 'not has token')
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
