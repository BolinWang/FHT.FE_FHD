/*
 * @Author: ghost
 * @Date: 2018-09-24 14:04:19
 * @Last Modified by:
 * @Last Modified time: 2018-09-24 14:04:19
 */
import { fetch } from '@/utils/fetch'

/* 登录获取sessionId */
export function login(mobile, password) {
  return fetch('/user/loginByMobile', {
    method: 'method',
    params: {
      mobile,
      password
    }
  })
}

/* sessionId获取用户信息 */
export function getInfo(sessionId) {
  return fetch('/user/queryRole', {
    method: 'method',
    params: {
      sessionId
    }
  })
}

/* 退出系统 */
export function logout(params = {}) {
  return fetch('/user/', {
    method: 'logout',
    params
  })
}

// 修改密码
