webpackJsonp([4,9],{"3wxA":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("D7CT"),i=a.n(n),o=a("+MD4");t.default={components:{operateRole:i.a},data:function(){return{roleList:[]}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;Object(o.n)().then(function(t){e.roleList=t.data})},handleEdit:function(e){this.$refs.operateRole.open(e)},handleDelete:function(e){var t=this,a={roleId:e.roleId};Object(o.f)(a).then(function(e){t.getList(),t.$message({message:"删除成功",type:"success"})})},handClick:function(){this.$refs.operateRole.open()}}}},D7CT:function(e,t,a){var n=a("VU/8")(a("kKT2"),a("fjIz"),function(e){a("j0V5")},"data-v-1e055760",null);e.exports=n.exports},O9o3:function(e,t,a){var n=a("VU/8")(a("3wxA"),a("vTVK"),function(e){a("Rbsx")},"data-v-e7ebe92e",null);e.exports=n.exports},QCD6:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".contentNav[data-v-1e055760]{width:100%;height:330px;overflow:auto}.contentNav li[data-v-1e055760]{width:100%;height:30px;line-height:30px;padding-left:10px}.contentNav .current[data-v-1e055760]{background:#eee}.right[data-v-1e055760]{float:right}.current[data-v-1e055760]{background:#eee}.checkblue[data-v-1e055760]{color:#409eff}.topTitle[data-v-1e055760]{width:100%;height:30px;line-height:30px;text-align:center;border-bottom:1px solid #ccc;background:#eee}",""])},Rbsx:function(e,t,a){var n=a("kfJv");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("558a87bf",n,!0)},fjIz:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-dialog",{attrs:{title:e.editOradd?"编辑角色":"新建角色",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"text-box"},[a("el-form",{ref:"form",attrs:{inline:!0,model:e.form,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),a("el-form-item",{staticClass:"right"},[a("el-checkbox",{model:{value:e.form.backLogin,callback:function(t){e.$set(e.form,"backLogin",t)},expression:"form.backLogin"}},[e._v("允许登陆飞虎队后台")])],1)],1)],1),e._v(" "),a("div",{staticClass:"checkout-box"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content"},[a("div",{staticClass:"topTitle"},[e._v("\n             一级菜单\n           ")]),e._v(" "),a("ul",{staticClass:"contentNav"},e._l(e.allList,function(t,n){return a("li",{key:n,on:{click:function(t){e.operaIndex=n}}},[a("el-checkbox",{attrs:{indeterminate:t.isIndeterminat},on:{change:function(a){e.checkChange(t.flag,t.children)}},model:{value:t.flag,callback:function(a){e.$set(t,"flag",a)},expression:"item.flag"}}),e._v(" "),a("span",{class:{checkblue:1==t.flag}},[e._v(e._s(t.menuName))])],1)}))])]),e._v(" "),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"grid-content"},[a("div",{staticClass:"topTitle"},[e._v("\n             二级菜单\n           ")]),e._v(" "),a("ul",{staticClass:"contentNav"},e._l(e.allList.length>0?e.allList[e.operaIndex].children:[],function(t,n){return a("li",{key:n},[a("el-checkbox",{on:{change:function(a){e.checkChange(t.flag,t.children)}},model:{value:t.flag,callback:function(a){e.$set(t,"flag",a)},expression:"item.flag"}}),e._v(" "),a("span",{class:{checkblue:1==t.flag}},[e._v(e._s(t.menuName))])],1)}))])])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveSub}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]}},j0V5:function(e,t,a){var n=a("QCD6");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("239e5282",n,!0)},kKT2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("+MD4"),i=a("0xDb");t.default={data:function(){return{dialogFormVisible:!1,editOradd:null,allList:[],allListNow:[],operaIndex:0,form:{roleId:"",roleName:"",menuIds:[],backLogin:0}}},mounted:function(){},methods:{checkChange:function(e,t){t instanceof Array&&function t(a){a.map(function(a){if(a.flag=e,!(a.children instanceof Array&&a.children.length>0))return!1;t(a.children)})}(t),this.dataFomart()},dataFomart:function(){var e=[];this.allList.map(function(t){t.children.map(function(t){!0===t.flag&&e.push(t)}),e.length===t.children.length?(t.flag=!0,t.indeterminate=!1):(t.flag=!1,t.indeterminate=e.length>0)})},traverseTree:function(e,t){if(e&&e.children&&e.children.length>0)for(var a=0;a<e.children.length;a++)this.allListNow.push(e),this.traverseTree(e.children[a])},saveSub:function(){var e=this;this.allList.forEach(function(t,a){e.traverseTree(t,a),e.operaIndex=0}),!0===this.form.backLogin?this.form.backLogin=1:this.form.backLogin=0,this.form.menuIds=this.allListNow.filter(function(e){return e.flag}).map(function(e){return e.menuId}),Object(n.p)(this.form).then(function(t){Object(i.c)(e.form.menuIds),e.allListNow=[],e.editOradd=null,e.$message({message:"添加角色成功",type:"success"})})},getList:function(){var e=this,t={roleId:null!==this.editOradd&&void 0!==this.editOradd?this.editOradd.roleId:-1};Object(n.q)(t).then(function(t){e.allList=t.data})},open:function(e){this.operaIndex=0,this.dialogFormVisible=!0,e&&(this.editOradd=e,this.form.roleId=e.roleId,this.form.roleName=e.roleName,1===e.backLogin?this.form.backLogin=!0:this.form.backLogin=!1),this.getList()}}}},kfJv:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".container[data-v-e7ebe92e]{padding:20px}.add[data-v-e7ebe92e]{float:right}.table-box[data-v-e7ebe92e]{border:1px solid #e5e5e5}.btn-box[data-v-e7ebe92e]{padding-bottom:20px}",""])},vTVK:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"btn-box clearfix"},[a("el-button",{staticClass:"add",attrs:{size:"small",type:"primary"},on:{click:e.handClick}},[e._v("新增")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"small",data:e.roleList}},[a("el-table-column",{attrs:{type:"index"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleName",label:"角色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtModified",label:"修改时间"}}),e._v(" "),a("el-table-column",{attrs:{width:"180",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("operate-Role",{ref:"operateRole"})],1)},staticRenderFns:[]}}});