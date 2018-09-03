/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:07:11
 * @Last Modified by: ghost
 * @Last Modified time: 2018-09-03 10:11:42
 */

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/**
 * icon : slider图标
 * hidden : 菜单隐藏
 * redirect : ‘noRedirect’ 面包屑链接配置
 * noDropdown : ’noDropdown:true‘ 下拉菜单
 * meta : ‘{ role: ['admin'] }‘ 权限
 */

export const constantRouterMap = [{
  path: '/login',
  component: _import('login/index'),
  hidden: true
}, {
  path: '/404',
  component: _import('404'),
  hidden: true
}, {
  path: '',
  component: Layout,
  redirect: '/dashboard',
  icon: 'icon-shouye',
  noDropdown: true,
  hidden: true,
  children: [{
    name: '首页',
    path: 'dashboard',
    component: _import('dashboard/index')
  }]
}]

export default new Router({
  /* mode: 'history', //需要服务器配置路由 */
  scrollBehavior: () => ({
    y: 0
  }), // 后退后页面位置
  routes: constantRouterMap
})

export const asyncRouterMap = [{
  path: '/organization',
  component: Layout,
  redirect: 'noredirect',
  name: '人员组织',
  icon: 'icon-renyuanzuzhiguanli01',
  children: [{
    path: 'framework',
    component: _import('organization/framework'),
    name: '组织架构',
    meta: {
      role: ['admin', 'personnel', 'operation', 'areaManage', 'cityDirector']
    }
  }, {
    path: 'probation',
    component: _import('organization/probation'),
    name: '试岗账号',
    meta: {
      role: ['admin', 'personnel', 'operation', 'areaManage', 'cityDirector', 'citySecretary']
    }
  }, {
    path: 'satffChange',
    component: _import('staffChange/staffChange'),
    name: '人员变动',
    meta: {
      role: ['admin', 'personnel', 'operation', 'areaManage', 'cityDirector', 'citySecretary']
    }
  }, {
    path: 'roleManager',
    component: _import('roleManager/roleManager'),
    name: '角色管理',
    meta: {
      role: ['admin', 'personnel', 'operation', 'areaManage', 'cityDirector', 'citySecretary']
    }
  }]
},
// {
//   path: '/dailyOperation',
//   component: Layout,
//   redirect: 'noredirect',
//   name: '日常运营',
//   icon: 'icon-fangyuan',
//   children: [{
//     path: 'rentingABill',
//     component: _import('dailyOperation/rentingABill'),
//     name: '催租账单',
//     meta: {
//       role: ['admin', 'personnel', 'operation', 'areaManage', 'cityDirector', 'citySecretary']
//     }
//   }]
// },
{
  path: '*',
  redirect: '/404',
  hidden: true
}]
