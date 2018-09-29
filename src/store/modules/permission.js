/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:08:54
 * @Last Modified by: ghost
 * @Last Modified time: 2018-09-30 02:06:06
 */

import {
  asyncRouterMap,
  constantRouterMap
} from '@/router/index'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(route, routes) {
  const temp = routes.filter(item => {
    return item.menuName === route.name && route.name
  })
  return temp
}
/**
 * 获取当前页面的路由，过滤挂载
 * @param roles
 * @param route
 */

function getfilterAsyncRouter(asyncRouterMap, routes) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(route, routes) && hasPermission(route, routes).length) {
      if (route.children && route.children.length) {
        getfilterAsyncRouter(route.children, routes)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter(asyncRouterMap, roles) {
//   const accessedRouters = asyncRouterMap.filter(route => {
//     if (hasPermission(roles, route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, roles)
//       }
//       return true
//     }
//     return false
//   })
//   return accessedRouters
// }

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const { routes } = data
        let accessedRouters = []
        if (routes) {
          accessedRouters = getfilterAsyncRouter(asyncRouterMap, routes)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
