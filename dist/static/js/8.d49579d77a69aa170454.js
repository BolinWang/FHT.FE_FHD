webpackJsonp([8],{"T+/8":function(o,e,t){var r=t("VU/8")(t("m1D0"),t("oCXO"),function(o){t("tGex")},null,null);o.exports=r.exports},hKcQ:function(o,e,t){o.exports=t.p+"static/img/banner.5db0395.jpg"},m1D0:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("E4LH"),n=t("B0Pk"),i=t.n(n),a=t("M9A7");e.default={name:"login",data:function(){var o=this;return{loginForm:{mobile:"",password:""},formDate:{oldPassword:"",newPassword:"",newPasswordSure:""},dialogFormVisible:!1,loginRules:{mobile:[{required:!0,trigger:"blur",validator:function(o,e,t){Object(r.a)(e.trim())?t():t(new Error("请输入正确的手机号"))}}],password:[{required:!0,trigger:"blur",validator:function(o,e,t){e.length<6?t(new Error("密码不能小于6位")):t()}}]},editPasRules:{newPassword:[{required:!0,trigger:"blur",validator:function(o,e,t){e.length<6?t(new Error("密码不能小于6位")):"123456"===e?t(new Error("密码过于简单请确认后重新输入")):Object(r.c)(e.trim())?t():t(new Error("密码格式不正确,只能输入6-20个字母、数字、下划线 "))}}],newPasswordSure:{required:!0,trigger:"blur",validator:function(e,t,r){t.length<6?r(new Error("密码不能小于6位")):t!==o.formDate.newPassword?r(new Error("两次输入密码不一致!")):r()}}},loading:!1}},methods:{handleLogin:function(){var o=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;o.loading=!0,console.log(o.loginForm),o.$store.dispatch("Login",o.loginForm).then(function(){o.loading=!1,"123456"===o.loginForm.password?o.changePassword():o.$router.push({path:"/"})}).catch(function(){o.loading=!1})})},handleClose:function(){this.dialogFormVisible=!1,this.$refs.formDate.resetFields()},submitLogin:function(){var o=this,e={mobile:this.loginForm.mobile,oldPassword:i()(this.loginForm.password),newPassword:i()(this.formDate.newPassword)};this.$refs.formDate.validate(function(t){t&&Object(a.c)(e).then(function(e){o.$message.success("密码修改成功"),o.loginForm.password=o.formDate.newPassword,o.handleLogin()})})},resetFormDate:function(o){this.dialogFormVisible=!1,this.$refs[o].resetFields()},changePassword:function(){this.dialogFormVisible=!0}}}},oCXO:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:o.loginForm,rules:o.loginRules,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title"},[o._v("飞虎队管理平台")]),o._v(" "),t("el-form-item",{attrs:{prop:"mobile"}},[t("span",{staticClass:"svg-container"},[t("i",{staticClass:"iconfont icon-iPhoneX"})]),o._v(" "),t("el-input",{attrs:{name:"mobile",type:"text",autoComplete:"on",placeholder:"请输入用户名"},model:{value:o.loginForm.mobile,callback:function(e){o.$set(o.loginForm,"mobile",e)},expression:"loginForm.mobile"}})],1),o._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("i",{staticClass:"iconfont icon-mima"})]),o._v(" "),t("el-input",{attrs:{name:"password",maxlength:12,type:"password",autoComplete:"on",placeholder:"请输入密码"},nativeOn:{keyup:function(e){if(!("button"in e)&&o._k(e.keyCode,"enter",13,e.key))return null;o.handleLogin(e)}},model:{value:o.loginForm.password,callback:function(e){o.$set(o.loginForm,"password",e)},expression:"loginForm.password"}})],1),o._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:o.loading},nativeOn:{click:function(e){e.preventDefault(),o.handleLogin(e)}}},[o._v("\n          登录\n        ")])],1)],1)],1),o._v(" "),t("el-dialog",{attrs:{title:"修改密码","before-close":o.handleClose,visible:o.dialogFormVisible},on:{"update:visible":function(e){o.dialogFormVisible=e}}},[t("el-form",{ref:"formDate",attrs:{model:o.formDate,rules:o.editPasRules}},[t("el-form-item",{attrs:{label:"新密码","label-width":"100px",prop:"newPassword"}},[t("el-input",{attrs:{maxlength:12,type:"password"},model:{value:o.formDate.newPassword,callback:function(e){o.$set(o.formDate,"newPassword",e)},expression:"formDate.newPassword"}})],1),o._v(" "),t("el-form-item",{attrs:{label:"确认密码","label-width":"100px",prop:"newPasswordSure"}},[t("el-input",{attrs:{maxlength:12,type:"password"},nativeOn:{keyup:function(e){if(!("button"in e)&&o._k(e.keyCode,"enter",13,e.key))return null;o.submitLogin(e)}},model:{value:o.formDate.newPasswordSure,callback:function(e){o.$set(o.formDate,"newPasswordSure",e)},expression:"formDate.newPasswordSure"}})],1)],1),o._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){o.resetFormDate("formDate")}}},[o._v("取 消")]),o._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:o.submitLogin}},[o._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},pNO0:function(o,e,t){(o.exports=t("FZ+f")(!1)).push([o.i,".tips{font-size:14px;color:#fff;margin-bottom:5px}.login-container{position:relative;width:100%;height:100%;height:100vh;background-color:#2d3a4b;background-image:url("+t("hKcQ")+");background-size:cover;background-position:50%}.login-container input:-webkit-autofill{box-shadow:inset 0 0 0 1000px #858585!important;-webkit-box-shadow:0 0 0 1000px #858585 inset!important;-webkit-text-fill-color:#fff!important}.login-container input{background:transparent;border:0;-webkit-appearance:none;border-radius:0;padding:12px 5px 12px 15px;color:#fff;height:47px}.login-container .el-input{display:inline-block;height:47px;width:289px}.login-container .svg-container{padding:5px;color:#fff;font-weight:700}.login-container .title{font-size:26px;font-weight:400;color:#fff;margin:0 auto 40px;text-align:center;font-weight:700}.login-container .login-form{position:absolute;left:50%;top:50%;width:400px;padding:35px 35px 15px;margin-top:-220px;margin-left:-200px;background-color:rgba(45,58,75,.4);border-radius:10px}.login-container .el-form-item{border:1px solid hsla(0,0%,100%,.3);background:rgba(0,0,0,.1);border-radius:5px;color:#454545;margin-bottom:30px}.login-container .forget-pwd{color:#fff}.login-container .el-form-item__error{color:#ff0;font-size:13px;line-height:24px}",""])},tGex:function(o,e,t){var r=t("pNO0");"string"==typeof r&&(r=[[o.i,r,""]]),r.locals&&(o.exports=r.locals);t("rjj0")("432d6198",r,!0)}});