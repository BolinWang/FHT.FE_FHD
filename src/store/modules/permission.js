/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:08:54
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-12 15:34:42
 */

import {
  asyncRouterMap,
  constantRouterMap
} from '@/router/index'

/**
 * 通过menuName判断是否与当前用户权限匹配
 * @param menuName
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
 * @param menuName
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
 * 递归过滤异步路由表，重组，返回当前页面的权限按钮
 * @param asyncRouterMap
 * @param roles
 */
function traverseTree(node) {
  if (!node) {
    return
  }
  let buttomList = []
  node.map(res => {
    if (res.children && res.children.length > 0) {
      buttomList = buttomList.push(res.children.filter(buttomListItem => {
        traverseTree(buttomListItem)
      }))
    }
    return buttomList
  })
}
const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    powerButton: []
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
    },
    ButtonPowerArray({
      commit
    }, data) {
      return new Promise(resolve => {
        if (data) {
          console.log(traverseTree(data))
        }
      })
    }
  }
}

export default permission
