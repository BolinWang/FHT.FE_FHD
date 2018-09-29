/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:09:27
 * @Last Modified by: ghost
 * @Last Modified time: 2018-09-30 01:35:45
 */
import { roleMenusListApi } from '@/api/organization'
import { login, logout, getInfo } from '@/api/login'
import Storage from '@/utils/local-plugin'
import SHA1 from 'js-sha1'
import { getSessionId, setSessionId, removeSessionId } from '@/utils/auth'
import defaultAvatar from '@/assets/defaultAvatar.png'

const user = {
  state: {
    sessionId: getSessionId(),
    name: '',
    avatar: '',
    depId: '',
    permission_routers: Storage.get('permission_routers') || [],
    roles: []
  },

  mutations: {
    SET_SESSIONID: (state, sessionId) => {
      state.sessionId = sessionId
    },
    SET_NAME: (state, name) => {
      console.log(name)
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_DEPID: (state, depId) => {
      state.depId = depId
    },
    SET_ROUTER: (state, routes) => {
      Storage.set('permission_routers', routes)
      state.permission_routers = routes
    }
  },

  actions: {
    // 登录
    Login({ commit, dispatch }, userInfo) {
      const mobile = userInfo.mobile.trim()
      const password = SHA1(userInfo.password)
      return new Promise((resolve, reject) => {
        login(mobile, password).then(response => {
          const data = response.data
          commit('SET_DEPID', data.depId)
          setSessionId(data.sessionId)
          // 存储账号密码供BI鉴权使用
          localStorage.setItem('userInfo', JSON.stringify({
            mobile,
            password: userInfo.password,
            depId: data.depId
          }))
          dispatch('GetRouterInfo', data.roleId)
          commit('SET_SESSIONID', data.sessionId)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取路由
    GetRouterInfo({
      commit
    }, roleId) {
      return new Promise((resolve, reject) => {
        roleMenusListApi({ roleId: roleId }).then(res => {
          commit('SET_ROUTER', res.data)
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
          // commit('SET_ROLES', [])
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
        Storage.remove('permission_routers')
        resolve()
      })
    }
  }
}

export default user
