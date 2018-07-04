/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 16:33:06
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-07-03 10:35:12
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
