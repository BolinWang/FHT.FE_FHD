/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:24:18
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-30 14:40:25
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
import Storage from '@/utils/local-plugin'
Vue.config.productionTip = false
// process.env.MOCK && require('./mock')
Vue.use(ElementUI)
Vue.use(VuePreview)
Vue.use(VueLazyload, {
  /* error: errorPic,*/
  loading: lazyLoadPic
})
Vue.component('icon-svg', IconSvg)
const createMap = () => {
  const promise = new Promise(function(resolve, reject) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `//webapi.amap.com/maps?v=1.4.8&key=${process.env.AMAP_KEY}` // 高德地图
    document.body.appendChild(script)
    if (script.nodeName === 'SCRIPT') {
      resolve()
    } else {
      reject(new Error('Could not script image at ' + script.src))
    }
  })
  return promise
}
createMap().then(function() {
  console.log('读取高德地图成功')
  // 加載當前的ip定位
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error)
})

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
      if (!store.getters.permission_routers) {
        store.dispatch('GetInfo').then(res => { // 获取用户信息
          const routes = store.getters.permission_routers || Storage.get('permission_routers') // 当前身份页面权限
          store.dispatch('GenerateRoutes', { routes }).then(() => {
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
