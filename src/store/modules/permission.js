/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:08:54
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-15 11:50:13
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
  console.log(buttomList)
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
          // console.log(traverseTree(state.buttomList, data, path))
          let powerList = {}
          powerList = traverseTree(state.buttomList, data.paramRoute.parentsRouter, data.paramRoute.nowRouter)
          console.log(powerList)
          commit('SET_POWERBUTTON', powerList)
          resolve()
        }
      })
    }
  }
}

export default permission
