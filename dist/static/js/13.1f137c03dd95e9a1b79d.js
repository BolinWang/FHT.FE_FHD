webpackJsonp([13],{"+fak":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".text-left[data-v-15e931a6]{text-align:right}.pad-ri[data-v-15e931a6]{padding-right:10px}.container[data-v-15e931a6]{padding:20px}.container .alertbox[data-v-15e931a6]{background-color:#f0f9eb;color:#67c23a;padding:8px 16px;margin-right:16px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;font-size:13px}.container .tab-Item[data-v-15e931a6]{background:#a2a2a2;margin-bottom:15px;color:#fff}.container .tab-Item .top[data-v-15e931a6]{padding:0 10px}.container .filter-item[data-v-15e931a6]{margin-left:10px}.container .el-form-item[data-v-15e931a6]{margin-bottom:0}.container .pageMain[data-v-15e931a6]{padding:0 10px}.container .pageMain .centerBanner[data-v-15e931a6]{border:1px solid #ccc;border-radius:6px;margin-bottom:4px;padding:10px}.container .pageMain .topBanner[data-v-15e931a6]{margin-top:4px;border:1px solid #ccc;border-radius:6px;margin-bottom:6px;padding:20px}.container .pageMain .topBanner .blue[data-v-15e931a6]{color:#409eff;font-weight:700;line-height:28px}.leftSidebar[data-v-15e931a6]{width:160px;height:100%}",""])},"0jnP":function(e,t,a){var r=a("+fak");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("464119f0",r,!0)},"6m31":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-container",[a("el-aside",{staticClass:"leftSidebar",attrs:{width:"260px"}},[a("el-form",[a("el-form-item",[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small"},model:{value:e.searchFrom.depName,callback:function(t){e.$set(e.searchFrom,"depName",t)},expression:"searchFrom.depName"}},[a("el-tree",{ref:"overlayTree",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","highlight-current":!0,"expand-on-click-node":!1},on:{"node-click":e.overlayNodeClick}}),e._v(" "),a("el-option",{staticStyle:{display:"none"},attrs:{value:""}})],1)],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{size:"small",placeholder:"业务员姓名/手机号码"},on:{input:e.searchIsDeleteList},model:{value:e.searchFrom.keyword,callback:function(t){e.$set(e.searchFrom,"keyword",t)},expression:"searchFrom.keyword"}})],1),e._v(" "),a("el-form-item",[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.searchFrom.isDelete,callback:function(t){e.$set(e.searchFrom,"isDelete",t)},expression:"searchFrom.isDelete"}},e._l(e.IncumbencyList,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.value}})}))],1),e._v(" "),a("el-form-item",[a("div",{staticClass:"table-box"},[a("scrollLoad",{attrs:{listHeight:e.listHeight,butlerList:e.butlerList,chooseIndex:e.chooseIndex,getBulter:e.getisDeleteList},on:{getManagerId:e.nowManagerId}})],1)])],1)],1),e._v(" "),a("el-main",{staticClass:"pageMain"},[a("el-row",{staticClass:"topBanner"},[a("el-col",{attrs:{span:24}},[a("el-date-picker",{attrs:{type:"datetimerange",size:"small","range-separator":"至","default-time":["00:00:00"],"start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.searchParam},model:{value:e.searchTime,callback:function(t){e.searchTime=t},expression:"searchTime"}}),e._v(" "),a("el-input",{staticStyle:{width:"240px"},attrs:{size:"small",placeholder:"房间名称"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchParam(t)}},model:{value:e.searchFrom.roomName,callback:function(t){e.$set(e.searchFrom,"roomName",t)},expression:"searchFrom.roomName"}}),e._v(" "),a("el-button",{staticClass:"right filter-item",attrs:{type:"danger",size:"mini"},on:{click:e.delOrg}},[e._v("清空")]),e._v(" "),a("el-button",{staticClass:"right filter-item",attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.searchParam}},[e._v("查询")])],1)],1),e._v(" "),a("el-row",{staticClass:"centerBanner"},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"alertbox"},[e._v("\n             成交单数："+e._s(e.countList.count)+"\n           ")])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"alertbox"},[e._v("\n             月租金流水："+e._s(e.countList.monthRentFee)+"\n           ")])])],1),e._v(" "),a("div",{staticClass:"tab-box"},[a("GridUnit",{ref:"refGridUnit",attrs:{columns:e.colModels,url:e.url,listField:"data.result.0.flyOrderInfoDTOs",autoLoad:!1,dataMethod:e.method,formOptions:e.searchFrom,height:e.tableHeight},on:{selcetDate:e.getCount},scopedSlots:e._u([{key:"leaseType",fn:function(t){return[a("div",{staticClass:"box"},[5==t.row.status?a("el-button",{attrs:{type:"warning",size:"small"}},[e._v(e._s(e._f("leaseStatus")(t.row.status)))]):a("el-button",{attrs:{type:"success",size:"small"}},[e._v(e._s(e._f("leaseStatus")(t.row.status)))])],1)]}},{key:"goDetail",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.getOrderDetail(t.row.orderNo)}}},[e._v("查看详情")])]}}])})],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"订单租约详情",width:"600px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("订单")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("span",{staticClass:"pad-ri"},[e._v(e._s(e.orderDetail.orderNo))]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:3===e.orderDetail.status,expression:"orderDetail.status === 3"}],attrs:{size:"mini",type:"primary"}},[e._v("生效")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:99===e.orderDetail.status,expression:"orderDetail.status === 99"}],attrs:{size:"mini",type:"danger"}},[e._v("搬离")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.orderDetail.customerId,expression:"orderDetail.customerId"}],attrs:{size:"mini",type:"primary"},on:{click:function(t){e.goSourceDetail(e.orderDetail.customerId)}}},[e._v("查看关联客源")])],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("出单时间")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.createTime))])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("出单人")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.gmtCreateName))])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("房间")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.roomName))])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("房东")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.orgAdminName))])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("签约人")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.contactName))])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("交租方式")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.rentTypeName))])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("租期")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.monthNum)+"个月")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("租约起止日")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.startTime)+"～"+e._s(e.orderDetail.endTime))])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("房价")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.rentFee)+"元")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("押金")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.depositFee)+"元")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("每期固定费用")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.serviceChargePrice)+"元")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("一次性费用")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.onceFee)+"元")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("出房费率")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.splitFee)+"%")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("出房收入")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.splitMoney)+"元")])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("租房合同")])]),e._v(" "),a("el-col",{attrs:{span:19}},[1===e.orderDetail.uploadFlag?a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.lookcontract(e.orderDetail.contractUrl)}}},[e._v("查看合同")]):a("el-button",{attrs:{size:"mini",type:"primary",plain:""}},[e._v("未上传")])],1)],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:99===e.orderDetail.status,expression:"orderDetail.status === 99"}],attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-left"},[e._v("退房时间")])]),e._v(" "),a("el-col",{attrs:{span:19}},[e._v(e._s(e.orderDetail.outDate))])],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[]}},gVGG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("+MD4"),s=a("Htgu"),i=a("U4Ig"),l=a.n(i),o=a("vqyU"),n=a.n(o),c=a("0xDb");t.default={computed:{listHeight:function(){return{height:this.tableHeight+30+"px"}}},components:{GridUnit:l.a,ScrollLoad:n.a},filters:{leaseStatus:function(e){return[{value:0,label:"未付款"},{value:1,label:"生效"},{value:2,label:"失败"},{value:3,label:"已取消"},{value:4,label:"关闭"},{value:5,label:"搬离"}][e].label}},data:function(){return{loading:!0,dialogFormVisible:!1,IncumbencyList:[{value:"null",label:"全部"},{value:"0",label:"在职"},{value:"1",label:"离职"}],orderDetail:{},countList:{},butlerList:[],tableHeight:300,searchTime:[],pageNumber:0,chooseIndex:"",searchFrom:{depId:"",isDelete:"null",keyword:"",startTime:"",endTime:"",roomName:"",managerId:""},colModels:[{prop:"createTime",label:"出单时间"},{prop:"orderNo",label:"订单号",width:200},{prop:"roomName",label:"房间名称",width:200},{prop:"status",label:"租约状态",slotName:"leaseType",width:100},{prop:"rentFee",label:"月租金流水"},{prop:"splitMoney",label:"出房收入"},{prop:"gmtCreateName",label:"出单人"},{prop:"adminName",label:"目前管理"},{label:"其他",slotName:"goDetail"}],url:"/order/backOrderList",method:"method",treeData:[],defaultProps:{children:"child",label:"depName"}}},mounted:function(){this.$route.query.orderNo&&this.getOrderDetail(this.$route.query.orderNo);var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,r=new Date(t,a,0);this.searchTime=[t+"-"+a+"-01 00:00:00",t+"-"+a+"-"+r.getDate()+" 00:00:00"],this.getTree()},created:function(){var e=this,t=document.body.clientHeight-290;this.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-290,void(e.tableHeight=t>300?t:300)}},watch:{searchTime:function(e){e=e||[],this.searchFrom.startTime=e[0]?Object(c.e)(e[0]):"",this.searchFrom.endTime=e[1]?Object(c.e)(e[1]):""}},methods:{goSourceDetail:function(e){this.$router.push({path:"/achievementCenter/intentionalSource",query:{customerId:e}})},lookcontract:function(e){window.open(e)},searchParam:function(){this.$refs.refGridUnit.searchHandler()},nowManagerId:function(e,t){this.searchFrom.managerId=e.id,this.chooseIndex=t,this.searchParam()},handleNodeClick:function(e,t){var a=this;this.$nextTick(function(){a.searchParam()})},searchIsDeleteList:function(){this.butlerList=[],this.pageNumber=0,""===this.searchFrom.keyword&&(this.searchFrom.managerId=""),this.getisDeleteList()},getOrderDetail:function(e){var t=this,a={orderNo:e};this.dialogFormVisible=!0,Object(s.d)(a).then(function(e){t.orderDetail=e.data})},searchbulter:function(){this.pageNumber=0,this.getisDeleteList()},getisDeleteList:function(){var e=this,t={depId:this.searchFrom.depId,keyword:this.searchFrom.keyword,isDelete:this.searchFrom.isDelete,pageSize:20,pageNo:++this.pageNumber};this.chooseIndex="",Object(s.c)(t).then(function(t){t.data.result&&(e.butlerList=e.butlerList.concat(t.data.result))})},getCount:function(e){this.countList=e.data.result[0]},delOrg:function(){Object(c.c)(this.searchFrom)},overlayNodeClick:function(e,t){this.searchFrom.depName=t.data.depName,this.searchFrom.depId=t.data.id,this.pageNumber=0,this.searchParam(),this.getisDeleteList(),this.butlerList=[]},handleClick:function(){this.butlerList=[],this.pageNumber=0,this.searchParam(),this.getisDeleteList()},getTree:function(e,t){var a=this;Object(r.k)().then(function(t){t.data&&t.data instanceof Array&&(a.treeData=t.data,a.searchFrom.depId=e||a.treeData[0].id,a.searchFrom.depName=a.treeData[0].depName,a.$nextTick(function(){a.getisDeleteList(),a.searchParam()}))}).catch(function(e){})}}}},k6Qw:function(e,t,a){var r=a("VU/8")(a("gVGG"),a("6m31"),function(e){a("0jnP")},"data-v-15e931a6",null);e.exports=r.exports}});