/*
 * @Author: ghost
 * @Date: 2018-10-07 21:32:46
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-11 17:39:27
 */
import { fetch } from '@/utils/fetch'

// 获取管家列表

export function getButlerAndKeywordApi(params = {}) {
  return new Promise((resolve, reject) => {
    fetch('/user/queryByDepAndKeyword', {
      method: 'method',
      params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
// 获取订单租约详情
export function getbackOrderInfoApi(params = {}) {
  return new Promise((resolve, reject) => {
    fetch('/order/backOrderInfo', {
      method: 'method',
      params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// 意向客源列表接口
export function getBackCustomerListApi(params = {}) {
  return new Promise((resolve, reject) => {
    fetch('/customer/backCustomerList', {
      method: 'method',
      params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// 意向客源详情接口
export function getBackCustomerInfoApi(params = {}) {
  return new Promise((resolve, reject) => {
    fetch('/customer/backCustomerInfo', {
      method: 'method',
      params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// 带看轨迹
export function customerLookRecordApi(params = {}) {
  return new Promise((resolve, reject) => {
    fetch('/customer/customerLookRecord', {
      method: 'method',
      params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// 获取实时位置
export function managerRTPApi(params = {}) {
  return new Promise((resolve, reject) => {
    fetch('/trail/managerRTP', {
      method: 'method',
      params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

// 行为轨迹查询

export function workTrailRecordApi(params = {}) {
  return new Promise((resolve, reject) => {
    fetch('/trail/workTrailRecord', {
      method: 'method',
      params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
