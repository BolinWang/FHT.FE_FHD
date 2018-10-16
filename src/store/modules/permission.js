/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:08:54
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-16 17:06:56
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
  let temp = []
  if (route.hasOwnProperty('children')) {
    temp = route.children.filter((item, index) => {
      return item.name
    })
  }

  return temp
}
/**
 * 获取当前页面的路由，过滤挂载
 * @param menuName
 * @param route
 */
function getfilterAsyncRouter(asyncRouter, routes) {
  // const accessedRouters = asyncRouter.filter(route => {
  //   if (hasPermission(route, routes) && hasPermission(route, routes).length > 0) {
  //     if (route.children && route.children.length) {
  //       route.children = getfilterAsyncRouter(route.children, routes)
  //     }
  //     return true
  //   }
  //   return false
  // })
  const accessedRouters = asyncRouter.filter(route => {
    return !route.hasOwnProperty('children') || route.children.length > 0
  })
  return accessedRouters
}

/**
 * 过滤路由表，返回当前页面的权限按钮
 * @param asyncRouterMap
 * @param roles
 */
function traverseTree(node, data, path) {
  if (!node) {
    return
  }
  let buttomList = []
  node.map(res => {
    if (res.children && res.children.length > 0 && res.path === data) {
      buttomList = res.children.filter(buttomListItem => {
        return buttomListItem.path === path
      })
    }
  })
  return buttomList[0].children
}
const permission = {
  state: {
    routers: constantRouterMap,
    buttomList: [],
    addRouters: [],
    powerButton: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_BUTTONLIST: (state, data) => {
      state.buttomList = data
    },
    SET_POWERBUTTON: (state, data) => {
      state.powerButton = data
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const { routes } = data
        console.log(data)
        let accessedRouters = []
        if (routes) {
          accessedRouters = getfilterAsyncRouter(asyncRouterMap, routes)
        }
        commit('SET_ROUTERS', accessedRouters)
        commit('SET_BUTTONLIST', routes)
        resolve()
      })
    },
    ButtonPowerArray({
      state, commit
    }, data) {
      return new Promise(resolve => {
        if (state.buttomList) {
          let powerList = {}
          powerList = traverseTree(state.buttomList, data.paramRoute.parentsRouter, data.paramRoute.nowRouter)
          commit('SET_POWERBUTTON', powerList)
          resolve()
        }
      })
    }
  }
}

export default permission
