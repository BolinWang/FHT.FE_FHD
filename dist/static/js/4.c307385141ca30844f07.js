webpackJsonp([4,17],{"4xIP":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-container",[a("el-aside",{staticClass:"leftSidebar",attrs:{width:"260px"}},[a("el-form",[a("el-form-item",[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small"},model:{value:t.searchFrom.depName,callback:function(e){t.$set(t.searchFrom,"depName",e)},expression:"searchFrom.depName"}},[a("el-tree",{ref:"overlayTree",attrs:{data:t.treeData,props:t.defaultProps,"node-key":"id","highlight-current":!0,"expand-on-click-node":!1},on:{"node-click":t.overlayNodeClick}}),t._v(" "),a("el-option",{staticStyle:{display:"none"},attrs:{value:""}})],1)],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{size:"small",placeholder:"业务员姓名/手机号码"},on:{input:t.searchIsDeleteList},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),a("el-form-item",[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.searchFrom.isDelete,callback:function(e){t.$set(t.searchFrom,"isDelete",e)},expression:"searchFrom.isDelete"}},t._l(t.IncumbencyList,function(t,e){return a("el-tab-pane",{key:e,attrs:{label:t.label,name:t.value}})}))],1),t._v(" "),a("el-form-item",[a("div",{staticClass:"table-box"},[a("scrollLoad",{attrs:{listHeight:t.listHeight,butlerList:t.butlerList,chooseIndex:t.chooseIndex,getBulter:t.getisDeleteList},on:{getManagerId:t.nowManagerId}})],1)])],1)],1),t._v(" "),a("el-main",{staticClass:"pageMain"},[a("el-row",{staticClass:"topBanner"},[a("el-col",{attrs:{span:24}},[a("el-date-picker",{staticStyle:{width:"350px"},attrs:{type:"datetimerange",size:"small","range-separator":"至","default-time":["00:00:00"],"start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.searchParam},model:{value:t.searchTime,callback:function(e){t.searchTime=e},expression:"searchTime"}}),t._v(" "),a("el-input",{staticStyle:{width:"140px"},attrs:{size:"small",placeholder:"客源号"},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchParam(e)}},model:{value:t.searchFrom.customerId,callback:function(e){t.$set(t.searchFrom,"customerId",e)},expression:"searchFrom.customerId"}}),t._v(" "),a("el-input",{staticStyle:{width:"140px"},attrs:{size:"small",placeholder:"租客姓名"},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchParam(e)}},model:{value:t.searchFrom.name,callback:function(e){t.$set(t.searchFrom,"name",e)},expression:"searchFrom.name"}}),t._v(" "),a("el-button",{staticClass:"right filter-item",attrs:{type:"danger",size:"mini"},on:{click:t.delOrg}},[t._v("清空")]),t._v(" "),a("el-button",{staticClass:"right filter-item",attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:t.searchParam}},[t._v("查询")])],1)],1),t._v(" "),a("el-row",{staticClass:"centerBanner"},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"alertbox"},[t._v("\n             客源数："+t._s(t.countList.customerCount)+"\n           ")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"alertbox"},[t._v("\n             配房次数："+t._s(t.countList.sumAllocationCount)+"\n           ")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"alertbox"},[t._v("\n             带看次数："+t._s(t.countList.sumLookCount)+"\n           ")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"alertbox"},[t._v("\n             成交数："+t._s(t.countList.successCount)+"\n           ")])])],1),t._v(" "),a("div",{staticClass:"tab-box"},[a("GridUnit",{ref:"refGridUnit",attrs:{columns:t.colModels,url:t.url,listField:"data.result.0.customerSourceDTOs",autoLoad:!1,dataMethod:t.method,formOptions:t.searchFrom,height:t.tableHeight},on:{selcetDate:t.getCount},scopedSlots:t._u([{key:"sourceName",fn:function(e){return[a("div",{staticClass:"box"},[t._v("\n              "+t._s(e.row.sourceName)+" - "+t._s(e.row.sourceTypeName)+"\n            ")])]}},{key:"leaseType",fn:function(e){return[a("div",{staticClass:"box"},[1==e.row.status?a("el-button",{attrs:{type:"danger",size:"mini"}},[t._v(t._s(t._f("leaseStatus")(e.row.status)))]):a("el-button",{attrs:{type:"success",size:"mini"}},[t._v(t._s(t._f("leaseStatus")(e.row.status)))])],1)]}},{key:"goDetail",fn:function(e){return[a("el-button",{staticClass:"mar-right",attrs:{type:"text"},on:{click:function(a){t.getOrderDetail(e.row.id)}}},[t._v("客源详情")]),t._v("\n            |\n            "),a("el-button",{attrs:{type:"text",disabled:0===e.row.lookCount},on:{click:function(a){t.goLookAmap(e.row.id)}}},[t._v("带看轨迹")])]}}])})],1)],1)],1),t._v(" "),a("SourceDetail",{ref:"sourceDetail",on:{showdeal:t.getdeal}}),t._v(" "),a("DealListDetail",{ref:"dealListDetail"}),t._v(" "),a("IntenSourceAmap",{ref:"intenSourceAmap"})],1)},staticRenderFns:[]}},"6LZU":function(t,e,a){var i=a("VU/8")(a("hSHd"),a("JT9d"),function(t){a("r/ch")},"data-v-b8277832",null);t.exports=i.exports},B5PF:function(t,e,a){var i=a("e/0M");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("4a31c8d2",i,!0)},JT9d:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-box"},[a("el-dialog",{attrs:{title:"带看地图轨迹",visible:t.centerDialogVisible,width:"80%","before-close":t.handleClose,center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("div",{staticClass:"tab-box"},[a("div",{staticClass:"topbox"},[t._v("\n          请选择带看轨迹\n        ")]),t._v(" "),a("div",{staticClass:"map-liner"},t._l(t.lookRecordList,function(e,i){return a("div",{key:i,staticClass:"liner-item",class:{active:t.chooseActive===i},on:{click:function(a){t.chooseLiner(e,i)}}},[a("div",{staticClass:"liner-nuim"},[a("span",{staticClass:"text"},[t._v("\n                 带看"+t._s(i+1)+"\n               ")]),t._v(" "),a("span",{staticClass:"room-num"},[t._v("带看"+t._s(e.roomCount)+"间房")])]),t._v(" "),a("div",{staticClass:"time-all"},[a("div",{staticClass:"time"},[a("span",{staticClass:"start-time"},[t._v("\n                  "+t._s(e.startDate)+"\n                 ")]),t._v(" "),a("span",{staticClass:"room-num"},[t._v("开始带看")])]),t._v(" "),a("div",{staticClass:"time"},[a("span",{staticClass:"start-time"},[t._v("\n                  "+t._s(e.endDate)+"\n                 ")]),t._v(" "),a("span",{staticClass:"room-num"},[t._v("结束带看")])])])])}))]),t._v(" "),a("div",{staticStyle:{width:"100%"},attrs:{id:"map"}}),t._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("开始")]),t._v(" "),a("el-slider",{staticClass:"blockSlide",attrs:{max:t.lineList.length,"format-tooltip":t.formatTooltip},model:{value:t.lineValue,callback:function(e){t.lineValue=e},expression:"lineValue"}}),t._v(" "),a("span",{staticClass:"demonstration"},[t._v("结束")])],1)])],1)},staticRenderFns:[]}},caO3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("+MD4"),o=a("hmLJ"),n=a.n(o),s=a("Htgu"),r=a("U4Ig"),l=a.n(r),c=a("mFxO"),d=a.n(c),u=a("vqyU"),p=a.n(u),h=a("6LZU"),m=a.n(h),b=a("0xDb");e.default={computed:{listHeight:function(){return{height:this.tableHeight+30+"px"}}},components:{GridUnit:l.a,ScrollLoad:p.a,SourceDetail:d.a,IntenSourceAmap:m.a,DealListDetail:n.a},filters:{leaseStatus:function(t){return[{value:1,label:"未签约"},{value:2,label:"已签约"}].filter(function(e){return e.value===t})[0].label}},data:function(){return{loading:!0,dialogFormVisible:!1,IncumbencyList:[{value:"null",label:"全部"},{value:"0",label:"在职"},{value:"1",label:"离职"}],orderDetail:{},countList:{},butlerList:[],tableHeight:300,searchTime:[],pageNumber:0,chooseIndex:"",keyword:"",searchFrom:{depId:"",name:"",depName:"",isDelete:"null",customerId:"",startTime:"",endTime:"",managerId:""},colModels:[{prop:"id",label:"客源号",width:60},{prop:"createTime",label:"创建时间"},{prop:"createName",label:"创建人"},{prop:"name",label:"租客姓名"},{label:"客源渠道",slotName:"sourceName",width:150},{prop:"allocationCount",label:"配房次数",width:80},{prop:"lookCount",label:"带看次数"},{prop:"status",label:"状态",slotName:"leaseType",width:100},{label:"操作",slotName:"goDetail",width:180}],url:"/customer/backCustomerList",method:"method",treeData:[],defaultProps:{children:"child",label:"depName"}}},mounted:function(){this.getTree(),this.$route.query.customerId&&this.getOrderDetail(this.$route.query.customerId)},created:function(){var t=this,e=document.body.clientHeight-290;this.tableHeight=e>300?e:300,window.onresize=function(){return e=document.body.clientHeight-290,void(t.tableHeight=e>300?e:300)};var a=new Date,i=a.getFullYear(),o=a.getMonth()+1,n=new Date(i,o,0);this.searchTime=[i+"-"+o+"-01 00:00:00",i+"-"+o+"-"+n.getDate()+" 00:00:00"]},watch:{searchTime:function(t){t=t||[],this.searchFrom.startTime=t[0]?Object(b.e)(t[0]):"",this.searchFrom.endTime=t[1]?Object(b.e)(t[1]):""}},methods:{goLookAmap:function(t){this.$refs.intenSourceAmap.getAmapLinerShow(t)},getdeal:function(t){this.$refs.dealListDetail.getOrderDetilShow(t)},lookcontract:function(t){window.location.href=t},searchParam:function(){this.$refs.refGridUnit.searchHandler()},nowManagerId:function(t,e){this.searchFrom.managerId=t.id,this.chooseIndex=e,this.searchParam()},overlayNodeClick:function(t,e){var a=this;this.$nextTick(function(){a.searchFrom.depName=e.data.depName,a.searchFrom.depId=e.data.id,a.pageNumber=0,a.searchParam(),a.getisDeleteList(),a.butlerList=[]})},searchIsDeleteList:function(){this.butlerList=[],this.pageNumber=0,""===this.searchFrom.keyword&&(this.searchFrom.managerId=""),this.getisDeleteList()},getOrderDetail:function(t){this.$refs.sourceDetail.getOrderDetil(t)},searchbulter:function(){this.pageNumber=0,this.getisDeleteList()},getisDeleteList:function(){var t=this,e={depId:this.searchFrom.depId,keyword:this.keyword,isDelete:this.searchFrom.isDelete,pageSize:20,pageNo:++this.pageNumber};this.chooseIndex="",Object(s.c)(e).then(function(e){e.data.result&&(t.butlerList=t.butlerList.concat(e.data.result))})},getCount:function(t){this.countList=t.data.result[0]},delOrg:function(){Object(b.c)(this.searchFrom),this.searchTime=[]},handleClick:function(){this.butlerList=[],this.pageNumber=0,this.searchFrom.managerId="",this.getisDeleteList(),this.searchParam()},getTree:function(t,e){var a=this;Object(i.k)().then(function(e){e.data&&e.data instanceof Array&&(a.treeData=e.data,a.searchFrom.depId=t||a.treeData[0].id,a.searchFrom.depName=a.treeData[0].depName,a.$nextTick(function(){a.getisDeleteList(),a.searchParam()}))}).catch(function(t){})}}}},"e/0M":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".mar-right[data-v-0cdbc61e]{margin-right:10px}.text-left[data-v-0cdbc61e]{text-align:right}.pad-ri[data-v-0cdbc61e]{padding-right:10px}.container[data-v-0cdbc61e]{padding:20px}.container .alertbox[data-v-0cdbc61e]{background-color:#f0f9eb;color:#67c23a;padding:8px 16px;margin-right:16px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;font-size:13px}.container .filter-item[data-v-0cdbc61e]{margin-left:10px}.container .el-form-item[data-v-0cdbc61e]{margin-bottom:0}.container .pageMain[data-v-0cdbc61e]{padding:0 10px}.container .pageMain .centerBanner[data-v-0cdbc61e]{border:1px solid #ccc;border-radius:6px;margin-bottom:4px;padding:10px}.container .pageMain .topBanner[data-v-0cdbc61e]{margin-top:4px;border:1px solid #ccc;border-radius:6px;margin-bottom:6px;padding:20px}.container .pageMain .topBanner .blue[data-v-0cdbc61e]{color:#409eff;font-weight:700;line-height:28px}.leftSidebar[data-v-0cdbc61e]{width:160px;height:100%}",""])},gFaY:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".block[data-v-b8277832]{position:absolute;bottom:90px;display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;width:400px;right:40px;border-radius:10px;padding:0 20px;background:#fff;z-index:10}.block .demonstration[data-v-b8277832]{width:40px;text-align:center;line-height:38px;font-size:10px}.block .blockSlide[data-v-b8277832]{-ms-flex:1;flex:1;-webkit-box-flex:1}.tab-box[data-v-b8277832]{position:absolute;top:90px;z-index:10;width:220px;left:60px;-webkit-box-shadow:4px 4px 5px #888;box-shadow:4px 4px 5px #888}.tab-box .map-liner[data-v-b8277832]{background:#fff;height:440px;padding-bottom:4px;overflow:auto}.tab-box .active[data-v-b8277832]{background:#909399!important}.tab-box .topbox[data-v-b8277832]{overflow:hidden;text-align:center;height:45px;line-height:45px;color:#fff;background:#409eff}.tab-box .liner-item[data-v-b8277832]{background:#c7c7c7;color:#fff;padding:0 10px;margin-bottom:10px}.tab-box .liner-item .liner-nuim[data-v-b8277832]{height:35px;line-height:35px;border-bottom:2px solid #fff}.tab-box .liner-item .time[data-v-b8277832]{line-height:26px}.tab-box .liner-item .room-num[data-v-b8277832]{float:right}.button-group[data-v-b8277832]{position:absolute;bottom:40px;z-index:9999;right:0}#map[data-v-b8277832]{height:540px;padding:0;width:100%;background:#fff}#container[data-v-b8277832]{width:100%;height:100%;font-size:15px}#panel[data-v-b8277832]{background-color:#fff;max-height:90%;overflow-y:auto;top:10px;right:10px;width:280px;border-bottom:1px solid silver}.footer_map_buttons[data-v-b8277832]{background:#fff;width:100%;font-size:0}.footer_map_buttons button[data-v-b8277832]{font-size:15px;background:#fff;border:none;width:24%;display:inline-block;line-height:40px}.footer_map_buttons .enroll[data-v-b8277832]{display:inline-block;width:28%;background:#fe4a4a;color:#fff}.footer_map_buttons .active[data-v-b8277832]{color:#fe4a4a}.content[data-v-b8277832]{position:absolute;background:#fff;left:0;top:0;width:100%;height:40%;visibility:hidden;z-index:9999}.content>.content-top[data-v-b8277832]{height:84%;overflow:hidden}.content>.content-top>div[data-v-b8277832]{font-size:12px;line-height:.7rem;border-bottom:1px solid #aeaeae;margin:0 5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.content>.content-bottom[data-v-b8277832]{height:10%;text-align:center;font-weight:300;color:#333;font-size:30px}.input[data-v-b8277832]{position:absolute;top:20px;z-index:10;right:40px}.list-button[data-v-b8277832]{font-size:12px;position:absolute;background:#fff;left:1%;bottom:8%;width:20%;padding:2% 0;height:6%;z-index:200}.list-button>div[data-v-b8277832]{text-align:center}",""])},hSHd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),o=a.n(i),n=a("+aT9"),s=a.n(n),r=a("0xDb"),l=a("Htgu"),c=void 0,d=void 0;e.default={components:{},mounted:function(){},data:function(){return{centerDialogVisible:!1,lookRecordList:[],chooseActive:0,lineList:[],lineValue:0,nowLiner:[],oldvalue:0,lineArr:[]}},watch:{lineValue:function(t,e){var a=[];a=t>e?this.lineArr.slice(e,t):this.lineArr.slice(t,e).reverse(),d.moveAlong(a,9e4,function(){})}},methods:{formatTooltip:function(t){if(this.lineList.length>0)return Object(r.d)(this.lineList[t].locatetime)},handleClose:function(){this.centerDialogVisible=!1,d=""},getAmapLinerShow:function(t){var e=this;this.centerDialogVisible=!0,this.chooseActive=0,this.lineValue=0,this.$nextTick(function(){Object(l.a)({customerId:t}).then(function(t){e.lookRecordList=t.data,e.getLineArr(e.lookRecordList)})})},chooseLiner:function(t,e){this.chooseActive=e,this.lineValue=0,this.nowLiner=[],c.destroy(),this.getLineArr()},addClickHandler:function(t,e){e.on("mouseover",function(t){t.target.info.open(c,t.target.getPosition())})},init:function(){var t=this;c=new s.a.Map("map",{resizeEnable:!0,zoom:17});var e=this.lineList[0].location.split(",");this.lookRecordList[this.chooseActive].allocationInfoDTOs.map(function(e){var a=new s.a.Marker({map:c,icon:new s.a.Icon({image:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",imageSize:new s.a.Size(24,24)}),offset:new s.a.Pixel(0,0),position:[e.lookLongitude,e.lookLatitude]});a.info=new s.a.InfoWindow({content:"<div class=\"content-amap\">\n                          <div class='info'>房间地点："+e.roomName+"("+e.roomCode+")</div>\n                          <div class='info'>带看时间："+e.lookTime+"</div>\n                          </div>",offset:new s.a.Pixel(0,0)}),t.addClickHandler(e,a)}),d=new s.a.Marker({map:c,icon:"https://webapi.amap.com/images/car.png",offset:new s.a.Pixel(-26,-13),position:[e[0],e[1]],autoRotation:!0}),c.plugin(["AMap.ToolBar","AMap.MapType"],function(){var t={offset:new s.a.Pixel(70,10),position:"RT",ruler:!0,noIpLocate:!1,locate:!0,liteStyle:!1,direction:!0,autoPosition:!0,locationMarker:s.a.Marker({map:c}),useNative:!1};c.addControl(new s.a.ToolBar(t)),c.addControl(new s.a.MapType({showTraffic:!1,showRoad:!1}))})},handleLogin:function(){this.getLineArr()},drawLine:function(){var t=this;this.lineArr=[],this.lineList.map(function(e){var a=e.location.split(",");t.lineArr.push(new s.a.LngLat(a[0],a[1]))}),new s.a.Polyline({map:c,path:this.lineArr,strokeColor:"#fe4a4a",strokeOpacity:1,strokeWeight:6,strokeStyle:"solid"});var e=new s.a.Polyline({map:c,path:this.lineArr,strokeColor:"#000",strokeOpacity:1,strokeWeight:6,strokeStyle:"solid"});d.on("moving",function(t){e.setPath(t.passedPath)}),c.setFitView()},getLineArr:function(){var t=this,e={starttime:this.lookRecordList[this.chooseActive].startTime,endtime:this.lookRecordList[this.chooseActive].endTime,page:1,gap:1e3,pagesize:800,tid:this.lookRecordList[this.chooseActive].gdTid,sid:11117,trid:this.lookRecordList[this.chooseActive].trid},a=this;o.a.get("https://tsapi.amap.com/v1/track/terminal/trsearch?key=7bf2aa112f46d78281004b9f678e03f2",{params:e}).then(function(e){e.data.data.tracks&&(a.lineList=e.data.data.tracks[0].points),t.init(),a.drawLine()})}}}},"hT+r":function(t,e,a){var i=a("VU/8")(a("caO3"),a("4xIP"),function(t){a("B5PF")},"data-v-0cdbc61e",null);t.exports=i.exports},"r/ch":function(t,e,a){var i=a("gFaY");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("149a3bb0",i,!0)}});