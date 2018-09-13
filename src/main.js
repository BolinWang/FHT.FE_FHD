/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:24:18
 * @Last Modified by:
 * @Last Modified time: 2018-09-14 00:06:04
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import IconSvg from '@/components/Icon-svg/index.vue'
import { getSessionId } from '@/utils/auth'
import * as filters from './filters'
import VuePreview from '@/components/Preview/plugins'
import VueLazyload from 'vue-lazyload'
import lazyLoadPic from '@/assets/lazyLoad@3x.png'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
// process.env.MOCK && require('./mock')
Vue.use(ElementUI)
Vue.use(VuePreview)
Vue.use(VueLazyload, {
  /* error: errorPic,*/
  loading: lazyLoadPic
})
Vue.component('icon-svg', IconSvg)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getSessionId()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          const roles = [store.getters.roles]
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters)
            next({ ...to })
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

const vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
Vue.use(vm)
