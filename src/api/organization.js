/*
 * @Author: chenxing
 * @Date: 2018-07-02 16:44:05
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-07-04 14:08:40
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
