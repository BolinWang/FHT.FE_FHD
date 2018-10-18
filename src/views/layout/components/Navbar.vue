/*
 * @Author: FT.FE.Bolin 
 * @Date: 2018-04-11 17:22:27 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-18 12:46:11
 */

<template>
  <div class="clearfix">
    <el-menu class="navbar" mode="horizontal">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
      <tags-view></tags-view> 
      <div class="right-menu">
        <el-tooltip effect="dark" content="全屏" placement="bottom">
          <screenfull class="screenfull right-menu-item"></screenfull>
        </el-tooltip>
        <el-tooltip effect="dark" content="换肤" placement="bottom">
          <theme-picker class="theme-switch right-menu-item"></theme-picker>
        </el-tooltip>
        <el-dropdown class="avatar-container right-menu-item" trigger="click">
          <div class="avatar-wrapper">
            <img class="user-avatar" :src="avatar">
            <span class="user-name">{{name}}</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <el-dropdown-item>
              <span @click="layer_showUserInfo = true" style="display:block;">个人信息</span>
            </el-dropdown-item>
            <router-link class='inlineBlock' to="/">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span @click="logout" style="display:block;">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
    <!-- 个人信息 -->
    <el-dialog title="个人信息" :visible.sync="layer_showUserInfo" width="600px" @close="dialogClose">
      <el-form :model="ruleForm" status-icon ref="ruleForm" :rules="ruleFormRules" label-width="100px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" disabled></el-input>
        </el-form-item>
         <el-form-item  label="修改密码" prop="newPassword">
          <el-input type="password" v-model="ruleForm.newPassword" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetFormDate('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitLogin">确定并重新登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import ThemePicker from '@/components/ThemePicker'
import Screenfull from '@/components/Screenfull'
import { default as TagsView } from './TagsView'
import SHA1 from 'js-sha1'
import { loginChangeApi } from '@/api/login'
export default {
  components: {
    Hamburger,
    ThemePicker,
    Screenfull,
    TagsView
  },

  data() {
    const newPassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else if (value === '123456') {
        callback(new Error('密码过于简单请确认后重新输入'))
      } else {
        callback()
      }
    }
    return {
      layer_showUserInfo: false,
      ruleFormRules: {
        newPassword: [
          { required: true, trigger: 'blur', validator: newPassword }
        ]
      },
      ruleForm: {
        name: this.$store.state.user.name,
        newPassword: ''
      }
    }
  },
  created() {

  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name'
    ])
  },
  methods: {
    submitLogin() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
      if (!userInfo.mobile || !userInfo.password) {
        this.$message.error('用户信息丢失，请重新登录后重试')
        return false
      }
      const params = {
        mobile: userInfo.mobile,
        oldPassword: SHA1(userInfo.password),
        newPassword: SHA1(this.ruleForm.newPassword)
      }
      console.log(params)
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          loginChangeApi(params).then(res => {
            this.$message.success('密码修改成功')
            this.$store.dispatch('FedLogOut').then(() => {
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
          })
        }
      })
    },
    resetFormDate() {
      this.$refs.ruleForm.resetFields()
      this.layer_showUserInfo = false
    },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('FedLogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    dialogClose() {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 54px;
    height: 49px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 150px;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 5px;
    }
    .screenfull {
      height: 40px;
      padding: 4px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      vertical-align: 1px;
    }
    .theme-switch {
      vertical-align: 16px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
      }
      .user-name {
        position: relative;
        top: -5px;
      }
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 4px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
