webpackJsonp([10],{GAeh:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".dataWrap[data-v-196bf716]{margin-bottom:20px}",""])},QoOG:function(e,t,a){var r=a("GAeh");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("c339e4d2",r,!0)},XBu1:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},e._l(e.dataList,function(t){return a("div",{key:t.title,staticClass:"dataWrap"},[a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(t.title))])]),e._v(" "),a("el-button-group",e._l(t.btnList,function(t){return a("el-button",{key:t.name,attrs:{type:"primary",disabled:!t.link},on:{click:function(a){e.routerToBI(t.link)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}))],1)],1)}))},staticRenderFns:[]}},h1l0:function(e,t,a){var r=a("VU/8")(a("ttxb"),a("XBu1"),function(e){a("QoOG")},"data-v-196bf716",null);e.exports=r.exports},ttxb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("mtWM"),o=a.n(r),n=a("+MD4");t.default={name:"dataFromBI",data:function(){return{depLevel:"",dataList:[{title:"基础数据",btnList:[{name:"个人·每天",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FPivot%2F%5B4e2a%5D%5B4eba%5D-%5B6bcf%5D%5B5929%5D.cpt"},{name:"部门·每天",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FPivot%2F%5B90e8%5D%5B95e8%5D-%5B6bcf%5D%5B5929%5D.cpt"},{name:"个人·时间区间",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FPivot%2F%5B4e2a%5D%5B4eba%5D-%5B65f6%5D%5B95f4%5D%5B533a%5D%5B95f4%5D.cpt"},{name:"部门·时间区间",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FPivot%2F%5B90e8%5D%5B95e8%5D-%5B65f6%5D%5B95f4%5D%5B533a%5D%5B95f4%5D.cpt"},{name:"客源基础数据",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FftData%2F%5B5ba2%5D%5B6e90%5D%5B57fa%5D%5B7840%5D%5B6570%5D%5B636e%5D.cpt"},{name:"订单基础数据",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FftData%2F%5B98de%5D%5B864e%5D%5B961f%5D%5B6240%5D%5B6709%5D%5B8ba2%5D%5B5355%5D%5B72b6%5D%5B6001%5D.cpt"},{name:"出房收入基础数据",link:""}]},{title:"统计数据",btnList:[{name:"业务统计数据·每月",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FftData%2F%5B98de%5D%5B864e%5D%5B961f%5D%5B4e1a%5D%5B7ee9%5D%5B6570%5D%5B636e%5D%5B7edf%5D%5B8ba1%5D--%5B6309%5D%5B6708%5D%5B7ef4%5D%5B5ea6%5D.cpt"},{name:"业务统计数据·每日",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FftData%2F%5B98de%5D%5B864e%5D%5B961f%5D%5B4e1a%5D%5B7ee9%5D%5B6570%5D%5B636e%5D%5B7edf%5D%5B8ba1%5D--%5B6309%5D%5B65e5%5D%5B7ef4%5D%5B5ea6%5D.cpt"},{name:"业绩统计数据·每周",link:"//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FftData%2F%5B98de%5D%5B864e%5D%5B961f%5D%5B4e1a%5D%5B7ee9%5D%5B7edf%5D%5B8ba1%5D--%5B7edf%5D%5B8ba1%5D%5B5468%5D%5B671f%5D.cpt"}]}]}},mounted:function(){var e=this;console.log(this.depId);var t=JSON.parse(localStorage.getItem("userInfo"))||{};if(!t.mobile||!t.password)return this.$message.error("用户信息丢失，请重新登录后重试"),!1;var a={depId:t.depId};Object(n.i)(a).then(function(t){e.depLevel=t.data.level})},methods:{routerToBI:function(e){var t=this;if(!e)return this.$message.error("BI链接无效"),!1;var a=JSON.parse(localStorage.getItem("userInfo"))||{};if(!a.mobile||!a.password)return this.$message.error("用户信息丢失，请重新登录后重试"),!1;var r=window.open();r.document.title="BI权限识别中...",o.a.get("//bi.mdguanjia.com/fh/ReportServer?op=fs_load&cmd=sso",{withCredentials:!0,params:{fr_username:a.mobile,fr_password:a.password,depLevel:this.depLevel,depId:a.depId}}).then(function(a){console.log(a),a.data.includes("fail")?(t.$message.error("该账号无权查看，请联系管理员"),r.document.write("该账号无权查看，请联系管理员")):r.location.href=e}).catch(function(e){console.log(e),t.$message.error("请求BI失败，请联系管理员")})}}}}});