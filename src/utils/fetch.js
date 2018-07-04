/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:10:13
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-07-03 10:43:06
 */

import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getSessionId } from '@/utils/auth'

/* 防止重复提交，利用axios的cancelToken */
let pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let CancelToken = axios.CancelToken
// 拼接当前请求的url
let formatUrl = (config) => {
  let typeData = config.method.toUpperCase() === 'POST'
    ? config.data
    : config.params
  // response返回的是string格式 需要转成对象
  typeData = typeof typeData === 'string' ? JSON.parse(typeData) : typeData
  // response返回的url是已经和baseURL拼接过的，而request过去的没有，需要处理一下否则导致接口完成无法删除一直都是重复提交
  let postUrl = config.url.indexOf(process.env.BASE_API) === -1
    ? `${process.env.BASE_API}${config.url}`
    : config.url
  const returnUrl = (postUrl.endsWith('/') ? postUrl : `${postUrl}/`) + typeData.method
  return returnUrl
}
let removePending = (config, f) => {
  let flagUrl = formatUrl(config)
  if (pending.indexOf(flagUrl) !== -1) {
    if (f) {
      f('取消重复请求') // 执行取消操作
    } else {
      pending.splice(pending.indexOf(flagUrl), 1)// 把这条记录从数组中移除
    }
  } else {
    if (f) {
      pending.push(flagUrl)
    }
  }
}

/* 默认请求参数 */
const defaultConfig = {
  version: '1.0',
  timestamp: new Date().getTime(),
  sign: '8F4C4A8E9D850EDD9692DE38723D0543'
}

/* 创建axios实例 */
const service = axios.create({
  baseURL: process.env.BASE_API,
  interceptors: true, // 是否开启response拦截器 默认true
  noAssign: false // 请求体是否带defaultConfig 默认false
  // timeout: 5000 // 请求超时时间
})

/* request拦截器 */
service.interceptors.request.use(config => {
  config.cancelToken = new CancelToken((c) => {
    removePending(config, c)
  })
  /* post请求 */
  if (config.method.toUpperCase() === 'POST') {
    if (store.getters.sessionId) {
      config.data['sessionId'] = getSessionId()
    }
    if (!config.noAssign) {
      config.data = Object.assign(config.data, defaultConfig)
    }
  } else {
    if (store.getters.sessionId) {
      config.params['sessionId'] = getSessionId()
    }
    if (!config.noAssign) {
      config.params = Object.assign(config.params, defaultConfig)
    }
  }
  return config
}, error => {
  console.log('【REQUEST】' + error)
  Promise.reject(error)
})

/* respone拦截器 */
service.interceptors.response.use(
  response => {
    removePending(response.config)
    return response
  },
  error => {
    pending = []
    if (error.message === '取消重复请求') {
      return Promise.reject(error)
    }
    Message({
      message: '连接服务器失败',
      type: 'error',
      duration: 5000
    })
    return Promise.reject(error)
  }
)

/* 调用退出系统 */
const logOutMethod = () => {
  store.dispatch('FedLogOut').then(() => {
    location.reload() // 为了重新实例化vue-router对象 避免bug
  })
}

/* axios请求体包装 */
const responseMehod = (response, resolve, reject) => {
  const res = response.data
  if (!response.config.interceptors || res.code * 1 === 0) {
    return resolve(res)
  }
  if (res.code * 1 === 1011 && res.message === '数据不存在') {
    logOutMethod()
  }
  Message({
    message: res.message || '未知错误，请联系管理员',
    type: 'error',
    duration: 5 * 1000
  })
  // sessionId 失效
  if (res.code * 1 === 1016) {
    MessageBox.confirm(`${res.message}，请重新登录`, '提示', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      logOutMethod()
    })
  }
  return reject('error')
}

const judgeMethod = (url, params, method = 'post') => {
  const requestBody = {
    method,
    url
  }
  if (method.toUpperCase() === 'POST') {
    requestBody.data = params
  } else {
    requestBody.params = params
  }
  return new Promise((resolve, reject) => {
    service(requestBody).then(response => {
      responseMehod(response, resolve, reject)
    })
  })
}

export const fetch = judgeMethod
