webpackJsonp([9],{D7CT:function(e,t,i){var a=i("VU/8")(i("kKT2"),i("fjIz"),function(e){i("j0V5")},"data-v-1e055760",null);e.exports=a.exports},QCD6:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".grid-content[data-v-1e055760]{width:100%;height:360px;border:1px solid #ccc}.contentNav[data-v-1e055760]{width:100%;height:330px;overflow:auto}.contentNav li[data-v-1e055760]{width:100%;height:30px;line-height:30px;padding-left:10px}.contentNav .current[data-v-1e055760]{background:#eee}.right[data-v-1e055760]{float:right}.current[data-v-1e055760]{background:#eee}.checkblue[data-v-1e055760]{color:#409eff}.topTitle[data-v-1e055760]{width:100%;height:30px;line-height:30px;text-align:center;border-bottom:1px solid #ccc;background:#eee}",""])},fjIz:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("el-dialog",{attrs:{title:e.editOradd?"编辑角色":"新建角色",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("div",{staticClass:"text-box"},[i("el-form",{ref:"form",attrs:{inline:!0,model:e.form,"label-width":"80px",size:"small"}},[i("el-form-item",{attrs:{label:"角色名称"}},[i("el-input",{attrs:{maxlength:10,placeholder:"请输入"},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),i("el-form-item",{staticClass:"right"},[i("el-checkbox",{model:{value:e.form.backLogin,callback:function(t){e.$set(e.form,"backLogin",t)},expression:"form.backLogin"}},[e._v("允许登陆飞虎队后台")])],1)],1)],1),e._v(" "),i("div",{staticClass:"checkout-box"},[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("div",{staticClass:"topTitle"},[e._v("\n             一级菜单\n           ")]),e._v(" "),i("ul",{staticClass:"contentNav"},e._l(e.allList,function(t,a){return i("li",{key:a,on:{click:function(t){e.operaIndex=a}}},[i("el-checkbox",{attrs:{indeterminate:t.isIndeterminat},on:{change:function(i){e.checkChange(t.isFlag,t.children)}},model:{value:t.isFlag,callback:function(i){e.$set(t,"isFlag",i)},expression:"item.isFlag"}}),e._v(" "),i("span",{class:{checkblue:1==t.isFlag}},[e._v(e._s(t.menuName))])],1)}))])]),e._v(" "),i("el-col",{attrs:{span:16}},[i("div",{staticClass:"grid-content"},[i("div",{staticClass:"topTitle"},[e._v("\n             二级菜单\n           ")]),e._v(" "),i("ul",{staticClass:"contentNav"},e._l(e.allList.length>0?e.allList[e.operaIndex].children:[],function(t,a){return i("li",{key:a},[i("el-checkbox",{on:{change:function(i){e.checkChange(t.isFlag,t.children)}},model:{value:t.isFlag,callback:function(i){e.$set(t,"isFlag",i)},expression:"item.isFlag"}}),e._v(" "),i("span",{class:{checkblue:1==t.isFlag}},[e._v(e._s(t.menuName))])],1)}))])])],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.cancelRole}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.saveSub}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]}},j0V5:function(e,t,i){var a=i("QCD6");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("239e5282",a,!0)},kKT2:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("+MD4"),n=i("0xDb");t.default={data:function(){return{dialogFormVisible:!1,editOradd:null,allList:[],allListNow:[],operaIndex:0,form:{roleId:"",roleName:"",menuIds:[],backLogin:0}}},mounted:function(){},methods:{checkChange:function(e,t){t instanceof Array&&function t(i){i.map(function(i){if(i.isFlag=e,!(i.children instanceof Array&&i.children.length>0))return!1;t(i.children)})}(t),this.dataFomart()},dataFomart:function(){var e=this;this.form.menuIds=[],this.allList.map(function(t){var i=[];t.children.map(function(a){!0===a.isFlag&&(i.push(a),e.form.menuIds.push(a.menuId),t.isIndeterminat=!0)}),i.length>0&&e.form.menuIds.push(t.menuId),i.length===t.children.length?(t.isFlag=!0,t.isIndeterminat=!1):t.isFlag=!1})},traverseTree:function(e,t){if(e&&e.children&&e.children.length>0)for(var i=0;i<e.children.length;i++)this.allListNow.push(e),this.traverseTree(e.children[i])},saveSub:function(){var e=this;!0===this.form.backLogin?this.form.backLogin=1:this.form.backLogin=0,this.dataFomart(),Object(a.p)(this.form).then(function(t){Object(n.c)(e.form),e.allListNow=[],e.editOradd=null,e.dialogFormVisible=!1,e.$emit("editOver"),e.$message({message:"保存成功",type:"success"})})},cancelRole:function(){Object(n.c)(this.form),this.allListNow=[],this.editOradd=null,this.dialogFormVisible=!1},getList:function(){var e=this,t={roleId:null!==this.editOradd&&void 0!==this.editOradd?this.editOradd.roleId:-1};Object(a.q)(t).then(function(t){e.allList=t.data,console.log(e.allList)})},open:function(e){this.operaIndex=0,this.dialogFormVisible=!0,e&&(this.editOradd=e,this.form.roleId=e.roleId,this.form.roleName=e.roleName,1===e.backLogin?this.form.backLogin=!0:this.form.backLogin=!1),this.getList()}}}}});