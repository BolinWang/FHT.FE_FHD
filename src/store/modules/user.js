/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:09:27
 * @Last Modified by: FT.FE.Bolin
 * @Last Modified time: 2018-08-27 09:22:12
 */

import { login, logout, getInfo } from '@/api/login'
import SHA1 from 'js-sha1'
import { getSessionId, setSessionId, removeSessionId } from '@/utils/auth'
import defaultAvatar from '@/assets/defaultAvatar.png'

const user = {
  state: {
    sessionId: getSessionId(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_SESSIONID: (state, sessionId) => {
      state.sessionId = sessionId
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      const rolesMap = {
        '1': 'citySecretary', // 城市内勤
        '2': 'citySteward', // 城市管家
        '3': 'headman', // 组长
        '4': 'webmaster', // 站长
        '5': 'plateManage', // 板块经理
        '6': 'areaManage', // 区域经理
        '7': 'cityDirector', // 城市总
        '8': 'personnel', // 人事
        '9': 'operation', // 运营
        '10': 'admin' // 系统管理员
      }
      state.roles = rolesMap[roles.toString()] || 'citySecretary'
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const mobile = userInfo.mobile.trim()
      const password = SHA1(userInfo.password)
      return new Promise((resolve, reject) => {
        login(mobile, password).then(response => {
          const data = response.data
          setSessionId(data.sessionId)
          // 存储账号密码供BI鉴权使用
          localStorage.setItem('userInfo', JSON.stringify({
            mobile,
            password: userInfo.password
          }))
          commit('SET_SESSIONID', data.sessionId)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.sessionId).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roleId)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.picUrl || defaultAvatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout({ sessionId: state.sessionId }).then(() => {
          removeSessionId()
          commit('SET_SESSIONID', '')
          commit('SET_ROLES', [])
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        removeSessionId()
        commit('SET_SESSIONID', '')
        resolve()
      })
    }
  }
}

export default user
