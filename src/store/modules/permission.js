/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:08:54
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-18 09:50:55
 */

import {
  asyncRouterMap,
  constantRouterMap
} from '@/router/index'
const path = []
/**
 * 通过path判断是否与当前用户权限匹配
 * @param menuName
 * @param route
 */
function hasPermission(route) {
  const nowRoute = route
  const temp = path.filter(item => {
    if (nowRoute.path === item) {
      if (nowRoute.hasOwnProperty('children') && nowRoute.children instanceof Array) {
        nowRoute.children = nowRoute.children.filter(v => {
          const routesNow = path.filter(vrouter => {
            return v.path === vrouter
          })
          if (routesNow.length > 0) {
            return v
          }
          return false
        })
      }
      return true
    } else {
      return false
    }
  })
  return temp.length > 0 ? nowRoute : ''
}
/**
 * 获取当前页面的路由，过滤挂载
 * @param menuName
 * @param route
 */
function getfilterAsyncRouter(asyncRouter) {
  // routes 配置的路由
  const accessedRouters = asyncRouter.filter(route => {
    if (route.path === '*') {
      return route
    }
    route = hasPermission(route)
    return route
  })
  return accessedRouters
}
// 遍历当前权限，重组path
function traverseNode(node) {
  path.push(node.path)
}
function traverseRouter(node) {
  if (!node) {
    return
  }
  traverseNode(node)
  if (node.children && node.children.length > 0) {
    var i = 0
    for (i = 0; i < node.children.length; i++) {
      traverseRouter(node.children[i])
    }
  }
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
  console.log(path)
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
    routers: constantRouterMap, // 默认页面
    buttomList: [], // 按钮列表
    addRouters: [], // 自有页面
    powerButton: [] // 当前页面 按钮
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
          routes.map(v => {
            traverseRouter(v)
          })
          accessedRouters = getfilterAsyncRouter(asyncRouterMap)
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
