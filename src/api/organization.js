/*
 * @Author: chenxing
 * @Date: 2018-07-02 16:44:05
 * @Last Modified by:
 * @Last Modified time: 2018-09-06 21:25:59
 */

import { fetch } from '@/utils/fetch'

/* 修改个人信息 */
export function queryDepartmentByLogin(params = {}) {
  return fetch('/department/queryDepartmentByLogin', {
    method: 'method',
    params
  })
}

/* 新建部门 */
export function createDepartment(params = {}) {
  return fetch('/department/createDepartment', {
    method: 'method',
    params
  })
}

/* 编辑部门 */
export function updateDepartment(params = {}) {
  return fetch('/department/updateDepartment', {
    method: 'method',
    params
  })
}

/* 部门区域权限 */
export function queryDepAreaPerm(params = {}) {
  return fetch('/department/queryDepAreaPerm', {
    method: 'method',
    params
  })
}

/* 部门区域分配权限 */
export function createDepAreaPerm(params = {}) {
  return fetch('/department/createDepAreaPerm', {
    method: 'method',
    params
  })
}

/* 删除部门 */
export function delDepartment(params = {}) {
  return fetch('/department/delDepartment', {
    method: 'method',
    params
  })
}

/* 新建账号 */
export function createManager(params = {}) {
  return fetch('/user/createManager', {
    method: 'method',
    params
  })
}

/* 编辑账号 */
export function updateManager(params = {}) {
  return fetch('/user/updateManager', {
    method: 'method',
    params
  })
}

/* 重置密码 */
export function resetPassword(params = {}) {
  return fetch('/user/resetPassword', {
    method: 'method',
    params
  })
}

/* 账号类型变更 */
export function updateType(params = {}) {
  return fetch('/user/updateType', {
    method: 'method',
    params
  })
}

/* 账号删除 */
export function deleteManager(params = {}) {
  return fetch('/user/deleteManager', {
    method: 'method',
    params
  })
}

/* 职员复职 */
export function personnelBack(params = {}) {
  return fetch('/user/personnelBack', {
    method: 'method',
    params
  })
}

/* 职员离职 */
export function personnelLeave(params = {}) {
  return fetch('/user/personnelLeave', {
    method: 'method',
    params
  })
}

/* 查询在职管家 */
export function queryOnTheJob(params = {}) {
  return fetch('/user/queryOnTheJob', {
    method: 'method',
    params
  })
}

/* 查询人事变动记录 */
export function queryModifyRecord(params = {}) {
  return fetch('/user/queryModifyRecord', {
    method: 'method',
    params
  })
}

// 页面全部
export function showRoleMenusApi(params = {}) {
  return fetch('/role/showRoleMenus', {
    method: 'method',
    params
  })
}

// 角色列表
export function roleListApi(params = {}) {
  return fetch('/role/list', {
    method: 'method',
    params
  })
}

// 删除角色
export function deleteRoleApi(params = {}) {
  return fetch('/role/delete', {
    method: 'method',
    params
  })
}

// 添加编辑
export function roleSaveApi(params = {}) {
  return fetch('/role/save', {
    method: 'method',
    params
  })
}

// 查看路由
export function roleMenusListApi(params = {}) {
  return fetch('/role/roleMenusList', {
    method: 'method',
    params
  })
}
