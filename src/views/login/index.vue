/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:22:52
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-18 15:37:18
 */

<template>
  <div class="container">
    <div class="login-container">
      <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
        <h3 class="title">飞虎队管理平台</h3>
        <el-form-item prop="mobile">
          <span class="svg-container">
            <i class="iconfont icon-iPhoneX"></i>
          </span>
          <el-input name="mobile" type="text" v-model="loginForm.mobile" autoComplete="on" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="iconfont icon-mima"></i>
          </span>
          <el-input name="password" :maxlength='12' type="text" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 修改密码弹窗 -->
    <el-dialog title="修改密码" :before-close="handleClose" :visible.sync="dialogFormVisible">
      <el-form :model="formDate" :rules="editPasRules" ref="formDate" >
        <el-form-item  label="新密码" label-width="100px" prop="newPassword">
          <el-input :maxlength='12' type="password"  v-model="formDate.newPassword"  ></el-input>
        </el-form-item>
        <el-form-item  label="确认密码" label-width="100px" prop="newPasswordSure">
           <el-input :maxlength='12' type="password" v-model="formDate.newPasswordSure" @keyup.enter.native="submitLogin"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetFormDate('formDate')">取 消</el-button>
        <el-button type="primary" @click="submitLogin">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { validateMobile, validateisPassWord } from '@/utils/validate'
import SHA1 from 'js-sha1'
import { loginChangeApi } from '@/api/login'
export default {
  name: 'login',
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!validateMobile(value.trim())) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    const newPassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else if (value === '123456') {
        callback(new Error('密码过于简单请确认后重新输入'))
      } else if (!validateisPassWord(value.trim())) {
        callback(new Error('密码格式不正确,只能输入6-20个字母、数字、下划线 '))
      } else {
        callback()
      }
    }
    const passwordSure = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else if (value !== this.formDate.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        mobile: '',
        password: ''
      },
      formDate: {
        oldPassword: '',
        newPassword: '',
        newPasswordSure: ''
      },
      dialogFormVisible: false,
      loginRules: {
        mobile: [
          { required: true, trigger: 'blur', validator: validatePhone }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePass }
        ]
      },
      editPasRules: {
        newPassword: [{
          required: true, trigger: 'blur', validator: newPassword
        }],
        newPasswordSure: {
          required: true, trigger: 'blur', validator: passwordSure
        }
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          console.log(this.loginForm)
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.loginForm.password === '123456'
              ? this.changePassword()
              : this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleClose() {
      this.dialogFormVisible = false
      this.$refs['formDate'].resetFields()
    },
    submitLogin() {
      const params = {
        mobile: this.loginForm.mobile,
        oldPassword: SHA1(this.loginForm.password),
        newPassword: SHA1(this.formDate.newPassword)
      }
      this.$refs.formDate.validate(valid => {
        if (valid) {
          loginChangeApi(params).then(res => {
            this.$message.success('密码修改成功')
            this.loginForm.password = this.formDate.newPassword
            this.handleLogin()
          })
        }
      })
    },
    resetFormDate(formDate) {
      this.dialogFormVisible = false
      this.$refs[formDate].resetFields()
    },
    changePassword() {
      this.dialogFormVisible = true
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss">
@import "src/styles/mixin.scss";
.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
}

.login-container {
  @include relative;
  height: 100vh;
  background-color: #2d3a4b;
  background-image: url(../../assets/banner.jpg);
  background-size: cover;
  background-position: center center;
  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px rgb(133, 133, 133) inset !important;
    -webkit-box-shadow: 0 0 0px 1000px rgb(133, 133, 133) inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #fff;
    height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 289px;
  }
  .svg-container {
    padding: 5px;
    color: #fff;
    font-weight: 700;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: #fff;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin-top: -220px;
    margin-left: -200px;
    background-color: rgba(45, 58, 75, 0.4);
    border-radius: 10px;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    margin-bottom: 30px;
  }
  .forget-pwd {
    color: #fff;
  }
  .el-form-item__error {
    color: #ff0;
    font-size: 13px;
    line-height: 24px;
  }
}

</style>
