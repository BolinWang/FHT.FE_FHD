webpackJsonp([14],{Drk7:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".block[data-v-84670a02]{position:absolute;bottom:90px;display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;width:400px;right:40px;border-radius:10px;padding:0 20px;background:#fff;z-index:10}.block .demonstration[data-v-84670a02]{width:40px;text-align:center;line-height:38px;font-size:10px}.block .blockSlide[data-v-84670a02]{-ms-flex:1;flex:1;-webkit-box-flex:1}#map[data-v-84670a02]{height:540px;padding:0;width:100%;background:#fff}.tabItem[data-v-84670a02]{background:#a2a2a2;margin-bottom:15px;color:#fff}.tabItem .top[data-v-84670a02]{padding:0 10px}.active[data-v-84670a02]{background:#1e97fa}.table-box[data-v-84670a02]{border:1px solid #cccfd2;border-radius:4px;padding:4px 10px}.choose-active[data-v-84670a02]{overflow:auto}.table-box[data-v-84670a02]:first-child{padding-bottom:6px}.table-frist[data-v-84670a02]{margin-bottom:10px}.box-data[data-v-84670a02]{padding-bottom:6px}.text-left[data-v-84670a02]{text-align:right}.pad-ri[data-v-84670a02]{padding-right:10px}.container[data-v-84670a02]{padding:20px}.container .alertbox[data-v-84670a02]{background-color:#f0f9eb;color:#67c23a;padding:8px 16px;margin-right:16px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;font-size:13px}.container .tab-Item[data-v-84670a02]{background:#a2a2a2;margin-bottom:15px;color:#fff}.container .tab-Item .top[data-v-84670a02]{padding:0 10px}.container .filter-item[data-v-84670a02]{margin-left:10px}.container .el-form-item[data-v-84670a02]{margin-bottom:0}.container .pageMain[data-v-84670a02]{padding:0 10px}.container .pageMain .centerBanner[data-v-84670a02]{border:1px solid #ccc;border-radius:6px;margin-bottom:4px;padding:10px}.container .pageMain .topBanner[data-v-84670a02]{margin-top:4px;border:1px solid #ccc;border-radius:6px;margin-bottom:6px;padding:20px}.container .pageMain .topBanner .blue[data-v-84670a02]{color:#409eff;font-weight:700;line-height:28px}.leftSidebar[data-v-84670a02]{width:160px;height:100%}",""])},E6tP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("+MD4"),o=a("Htgu"),s=a("U4Ig"),n=a.n(s),r=a("vqyU"),l=a.n(r),c=a("0xDb"),d=a("mtWM"),h=a.n(d),p=void 0,m=void 0;t.default={computed:{listHeight:function(){return{height:(this.tableHeight-100)/2+"px"}},mapHeight:function(){return{height:this.tableHeight+110+"px"}}},components:{GridUnit:n.a,ScrollLoad:l.a},data:function(){return{lineList:[],lineValue:0,loading:!0,butlerList:[],tableHeight:300,pageNumber:0,chooseIndex:0,chooseCountIndex:0,nowDate:"",searchFrom:{depId:"",isDelete:"null",keyword:"",date:"",managerId:""},IncumbencyList:[{value:"null",label:"全部"},{value:"0",label:"在职"},{value:"1",label:"离职"}],searchList:[],treeData:[],defaultProps:{children:"child",label:"depName"}}},mounted:function(){this.getTree(),this.init()},created:function(){var e=this,t=document.body.clientHeight-320;this.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-320,void(e.tableHeight=t>300?t:300)};var a=new Date,i=a.getMonth()+1,o=a.getDate();i>=1&&i<=9&&(i="0"+i),o>=0&&o<=9&&(o="0"+o),this.nowDate=a.getFullYear()+"-"+i+"-"+o+" \n            "+a.getHours()+":"+a.getMinutes()+":\n            "+a.getSeconds()},watch:{lineValue:function(e,t){var a=[];a=e>t?this.lineArr.slice(t,e):this.lineArr.slice(e,t).reverse(),m.moveAlong(a,9e4,function(){})}},methods:{handleClick:function(){this.butlerList=[],this.pageNumber=0,this.searchFrom.managerId="",this.getisDeleteList()},init:function(){if(this.lineList.length>0){var e=this.lineList[0].location.split(",");p=new AMap.Map("map",{resizeEnable:!0,zoom:12,center:[e[0],e[1]]})}else p=new AMap.Map("map",{resizeEnable:!0,zoom:12});var t=[];this.lineList.length>0&&(t=this.lineList[0].location.split(","),m=new AMap.Marker({map:p,icon:"https://webapi.amap.com/images/car.png",offset:new AMap.Pixel(-26,-13),position:[t[0],t[1]],autoRotation:!0}));var a=this;p.plugin(["AMap.ToolBar","AMap.MapType"],function(){var e={offset:new AMap.Pixel(70,10),position:"RT",ruler:!0,noIpLocate:!1,locate:!0,liteStyle:!1,direction:!0,autoPosition:!(a.lineList.length>0),locationMarker:AMap.Marker({map:p}),useNative:!1};p.addControl(new AMap.ToolBar(e)),p.addControl(new AMap.MapType({showTraffic:!1,showRoad:!1}))})},handleLogin:function(){this.getLineArr()},drawLine:function(){var e=this;this.lineArr=[],this.lineList.map(function(t){var a=t.location.split(",");e.lineArr.push(new AMap.LngLat(a[0],a[1]))}),new AMap.Polyline({map:p,path:this.lineArr,strokeColor:"#fe4a4a",strokeOpacity:1,strokeWeight:3,strokeStyle:"solid"});var t=new AMap.Polyline({map:p,path:this.lineArr,strokeColor:"#000",strokeOpacity:1,strokeWeight:3,strokeStyle:"solid"});m.on("moving",function(e){t.setPath(e.passedPath)}),p.setFitView()},getLineArr:function(){var e=this,t={starttime:this.searchList[this.chooseCountIndex].startTime,endtime:this.searchList[this.chooseCountIndex].endTime,page:1,gap:1e3,pagesize:800,tid:this.searchList[this.chooseCountIndex].gdTid,sid:11117,trid:this.searchList[this.chooseCountIndex].trid},a=this;h.a.get("https://tsapi.amap.com/v1/track/terminal/trsearch?key=7bf2aa112f46d78281004b9f678e03f2",{params:t}).then(function(t){1e4===t.data.errcode?a.lineList=t.data.data.tracks[0].points:e.$message({message:t.data.errdetail}),a.init(),a.drawLine()})},formatTooltip:function(e){if(this.lineList.length>0)return Object(c.d)(this.lineList[e].locatetime)},chooseManagerId:function(e,t){this.chooseCountIndex=t,this.getLineArr()},getworkTrailRecord:function(){var e=this;""!==this.searchFrom.managerId?(this.searchFrom.date=Object(c.e)(this.searchFrom.date),Object(o.h)(this.searchFrom).then(function(t){t.data.length>0&&(e.searchList=t.data,e.getLineArr())})):this.$message({message:"请选择要查看管家",type:"warning"})},nowManagerId:function(e,t){this.searchFrom.date=this.nowDate,this.searchList=[],this.chooseIndex=t,this.searchFrom.managerId=e.id,this.getworkTrailRecord()},searchIsDeleteList:function(){this.butlerList=[],this.pageNumber=0,this.getisDeleteList()},getisDeleteList:function(){var e=this,t={depId:this.searchFrom.depId,keyword:this.searchFrom.keyword,isDelete:this.searchFrom.isDelete,pageSize:20,pageNo:++this.pageNumber};this.chooseIndex="",Object(o.c)(t).then(function(t){t.data.result&&(e.butlerList=e.butlerList.concat(t.data.result))})},overlayNodeClick:function(e,t){this.searchFrom.depName=t.data.depName,this.searchFrom.depId=t.data.id,this.pageNumber=0,this.getisDeleteList(),this.butlerList=[]},getTree:function(e,t){var a=this;Object(i.k)().then(function(t){t.data&&t.data instanceof Array&&(a.treeData=t.data,a.searchFrom.depId=e||a.treeData[0].id,a.searchFrom.depName=a.treeData[0].depName,a.$nextTick(function(){a.getisDeleteList()}))}).catch(function(e){})}}}},MbiU:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-container",[a("el-aside",{staticClass:"leftSidebar",attrs:{width:"260px"}},[a("el-form",[a("el-form-item",[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small"},model:{value:e.searchFrom.depName,callback:function(t){e.$set(e.searchFrom,"depName",t)},expression:"searchFrom.depName"}},[a("el-tree",{ref:"overlayTree",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","highlight-current":!0,"expand-on-click-node":!1},on:{"node-click":e.overlayNodeClick}}),e._v(" "),a("el-option",{staticStyle:{display:"none"},attrs:{value:""}})],1)],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{size:"small",placeholder:"业务员姓名/手机号码"},on:{input:e.searchIsDeleteList},model:{value:e.searchFrom.keyword,callback:function(t){e.$set(e.searchFrom,"keyword",t)},expression:"searchFrom.keyword"}})],1),e._v(" "),a("el-form-item",[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.searchFrom.isDelete,callback:function(t){e.$set(e.searchFrom,"isDelete",t)},expression:"searchFrom.isDelete"}},e._l(e.IncumbencyList,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.value}})}))],1),e._v(" "),a("el-form-item",[a("div",{staticClass:"table-box table-frist"},[a("scrollLoad",{attrs:{listHeight:e.listHeight,butlerList:e.butlerList,chooseIndex:e.chooseIndex,getBulter:e.getisDeleteList},on:{getManagerId:e.nowManagerId}})],1)]),e._v(" "),a("el-form-item",[a("div",{staticClass:"table-box"},[a("div",{staticClass:"box-data"},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",size:"small",placeholder:"选择日期"},on:{change:e.getworkTrailRecord},model:{value:e.searchFrom.date,callback:function(t){e.$set(e.searchFrom,"date",t)},expression:"searchFrom.date"}})],1),e._v(" "),a("div",{staticClass:"choose-active",style:e.listHeight},e._l(e.searchList,function(t,i){return e.searchList.length>0?a("div",{key:i,staticClass:"tabItem",class:{active:e.chooseCountIndex===i},on:{click:function(a){e.chooseManagerId(t,i)}}},[a("el-row",{staticClass:"top"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"mobile"},[e._v("轨迹"+e._s(i+1))])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("span",{staticClass:"mobile"},[e._v(e._s(t.start)+"-"+e._s(t.end))])])],1)],1):a("div",{staticClass:"tab-Item"},[e._v("\n                   暂无数据～～\n                 ")])}))])])],1)],1),e._v(" "),a("el-main",{staticClass:"pageMain"},[a("div",{style:e.mapHeight,attrs:{id:"map"}}),e._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("开始")]),e._v(" "),a("el-slider",{staticClass:"blockSlide",attrs:{max:e.lineList.length,"format-tooltip":e.formatTooltip},model:{value:e.lineValue,callback:function(t){e.lineValue=t},expression:"lineValue"}}),e._v(" "),a("span",{staticClass:"demonstration"},[e._v("结束")])],1)])],1)],1)},staticRenderFns:[]}},WjIg:function(e,t,a){var i=a("VU/8")(a("E6tP"),a("MbiU"),function(e){a("oVxH")},"data-v-84670a02",null);e.exports=i.exports},oVxH:function(e,t,a){var i=a("Drk7");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("2650ad4a",i,!0)}});