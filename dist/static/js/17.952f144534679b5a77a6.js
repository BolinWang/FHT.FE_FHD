webpackJsonp([17],{"2LLK":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".box[data-v-27c2ab88]{min-height:68px;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #e0e0e0}.text-empty[data-v-27c2ab88]{line-height:60px;text-align:center;border-top:1px solid #e0e0e0}",""])},AQ5V:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"客源跟进记录",visible:t.followUpDialogVisible,width:"40%"},on:{"update:visible":function(e){t.followUpDialogVisible=e}}},[i("div",{staticClass:"all-text"},[t.gridData.length?i("div",{staticClass:"table-container"},t._l(t.gridData,function(e){return i("div",{key:e.id,staticClass:"box"},[i("div",{staticClass:"name-box"},[t._v(t._s(e.followTime)+" "+t._s(e.gmtCreateName))]),t._v(" "),i("div",{staticClass:"name-box"},[t._v(t._s(t._f("filterCreat")(e.followType))+" "+t._s(e.remark))])])})):i("div",{staticClass:"table-container"},[i("div",{staticClass:"box"},[i("div",{staticClass:"text-empty"},[t._v("暂无数据")])])])]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("关闭")])],1)])},staticRenderFns:[]}},ejdf:function(t,e,i){var o=i("VU/8")(i("p9HO"),i("AQ5V"),function(t){i("uKBk")},"data-v-27c2ab88",null);t.exports=o.exports},p9HO:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Htgu");e.default={data:function(){return{followUpDialogVisible:!1,customerId:"",gridData:[]}},filters:{filterCreat:function(t){return{1:"新增",2:"接待",3:"电话联系",4:"网络联系",5:"接单",6:"放单",7:"签约",8:"关闭",9:"配房",10:"开始带看",11:"结束带看",12:"离职交接"}[t]}},methods:{getList:function(){var t=this;Object(o.e)({customerId:this.customerId}).then(function(e){t.gridData=e.data.result})},showFollowList:function(t){this.followUpDialogVisible=!0,this.customerId=t,this.getList()}}}},uKBk:function(t,e,i){var o=i("2LLK");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("7aec490e",o,!0)}});