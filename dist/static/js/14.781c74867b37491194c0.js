webpackJsonp([14],{Drk7:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".block[data-v-84670a02]{position:absolute;bottom:90px;display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;width:400px;right:40px;border-radius:10px;padding:0 20px;background:#fff;z-index:10}.block .demonstration[data-v-84670a02]{width:40px;text-align:center;line-height:38px;font-size:10px}.block .blockSlide[data-v-84670a02]{-ms-flex:1;flex:1;-webkit-box-flex:1}#map[data-v-84670a02]{height:540px;padding:0;width:100%;background:#fff}.tabItem[data-v-84670a02]{background:#a2a2a2;margin-bottom:15px;color:#fff}.tabItem .top[data-v-84670a02]{padding:0 10px}.active[data-v-84670a02]{background:#1e97fa}.table-box[data-v-84670a02]{border:1px solid #cccfd2;border-radius:4px;padding:4px 10px}.choose-active[data-v-84670a02]{overflow:auto}.table-box[data-v-84670a02]:first-child{padding-bottom:6px}.table-frist[data-v-84670a02]{margin-bottom:10px}.box-data[data-v-84670a02]{padding-bottom:6px}.text-left[data-v-84670a02]{text-align:right}.pad-ri[data-v-84670a02]{padding-right:10px}.container[data-v-84670a02]{padding:20px}.container .alertbox[data-v-84670a02]{background-color:#f0f9eb;color:#67c23a;padding:8px 16px;margin-right:16px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;font-size:13px}.container .tab-Item[data-v-84670a02]{background:#a2a2a2;margin-bottom:15px;color:#fff}.container .tab-Item .top[data-v-84670a02]{padding:0 10px}.container .filter-item[data-v-84670a02]{margin-left:10px}.container .el-form-item[data-v-84670a02]{margin-bottom:0}.container .pageMain[data-v-84670a02]{padding:0 10px}.container .pageMain .centerBanner[data-v-84670a02]{border:1px solid #ccc;border-radius:6px;margin-bottom:4px;padding:10px}.container .pageMain .topBanner[data-v-84670a02]{margin-top:4px;border:1px solid #ccc;border-radius:6px;margin-bottom:6px;padding:20px}.container .pageMain .topBanner .blue[data-v-84670a02]{color:#409eff;font-weight:700;line-height:28px}.leftSidebar[data-v-84670a02]{width:160px;height:100%}",""])},E6tP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("+MD4"),o=a("Htgu"),s=a("U4Ig"),r=a.n(s),n=a("vqyU"),l=a.n(n),d=a("0xDb"),c=a("+aT9"),h=a.n(c),p=a("mtWM"),m=a.n(p),g=void 0,f=void 0;e.default={computed:{listHeight:function(){return{height:(this.tableHeight-50)/2+"px"}},mapHeight:function(){return{height:this.tableHeight+110+"px"}}},components:{GridUnit:r.a,ScrollLoad:l.a},data:function(){return{lineList:[],lineValue:0,loading:!0,butlerList:[],tableHeight:300,pageNumber:0,chooseIndex:0,searchFrom:{depId:"",isDelete:"",keyword:"",date:"",managerId:""},searchList:[],treeData:[],defaultProps:{children:"child",label:"depName"}}},mounted:function(){this.getTree(),this.init()},created:function(){var t=this,e=document.body.clientHeight-320;this.tableHeight=e>300?e:300,window.onresize=function(){return e=document.body.clientHeight-320,void(t.tableHeight=e>300?e:300)}},watch:{lineValue:function(t,e){var a=[];a=t>e?this.lineArr.slice(e,t):this.lineArr.slice(t,e).reverse(),console.log(a),f.moveAlong(a,9e4,function(){})}},methods:{init:function(){g=new h.a.Map("map",{resizeEnable:!0,zoom:12});var t=[];this.lineList.length>0&&(t=this.lineList[0].location.split(","),f=new h.a.Marker({map:g,icon:"https://webapi.amap.com/images/car.png",offset:new h.a.Pixel(-26,-13),position:[t[0],t[1]],autoRotation:!0})),g.plugin(["AMap.ToolBar","AMap.MapType"],function(){var t={offset:new h.a.Pixel(70,10),position:"RT",ruler:!0,noIpLocate:!1,locate:!0,liteStyle:!1,direction:!0,autoPosition:!0,locationMarker:h.a.Marker({map:g}),useNative:!1};g.addControl(new h.a.ToolBar(t)),g.addControl(new h.a.MapType({showTraffic:!1,showRoad:!1}))})},handleLogin:function(){this.getLineArr()},drawLine:function(){var t=this;this.lineArr=[],this.lineList.map(function(e){var a=e.location.split(",");t.lineArr.push(new h.a.LngLat(a[0],a[1]))}),new h.a.Polyline({map:g,path:this.lineArr,strokeColor:"#fe4a4a",strokeOpacity:1,strokeWeight:3,strokeStyle:"solid"});var e=new h.a.Polyline({map:g,path:this.lineArr,strokeColor:"#000",strokeOpacity:1,strokeWeight:3,strokeStyle:"solid"});f.on("moving",function(t){e.setPath(t.passedPath)}),g.setFitView()},getLineArr:function(){var t={starttime:this.searchList[this.chooseIndex].startTime,endtime:this.searchList[this.chooseIndex].endTime,page:1,gap:1e3,pagesize:800,tid:this.searchList[this.chooseIndex].gdTid,sid:8018,trid:this.searchList[this.chooseIndex].trid},e=this;m.a.get("https://tsapi.amap.com/v1/track/terminal/trsearch?key=7bf2aa112f46d78281004b9f678e03f2",{params:t}).then(function(t){t.data.data.tracks&&(e.lineList=t.data.data.tracks[0].points),e.init(),e.drawLine()})},formatTooltip:function(t){if(this.lineList.length>0)return Object(d.d)(this.lineList[t].locatetime)},chooseManagerId:function(t,e){this.chooseIndex=e,this.getLineArr()},getworkTrailRecord:function(){var t=this;""!==this.searchFrom.managerId?(this.searchFrom.date=Object(d.e)(this.searchFrom.date),console.log(this.searchFrom),Object(o.f)(this.searchFrom).then(function(e){e.data.length>0&&(t.searchList=e.data,t.getLineArr())})):this.$message({message:"请选择要查看管家",type:"warning"})},nowManagerId:function(t,e){this.searchFrom.date="",this.searchList=[],this.chooseIndex=e,this.searchFrom.managerId=t.id},searchIsDeleteList:function(){this.butlerList=[],this.pageNumber=0,this.getisDeleteList()},getisDeleteList:function(){var t=this,e={depId:this.searchFrom.depId,keyword:this.searchFrom.keyword,isDelete:this.searchFrom.isDelete,pageSize:20,pageNo:++this.pageNumber};this.chooseIndex="",Object(o.c)(e).then(function(e){e.data.result&&(console.log(e),t.butlerList=t.butlerList.concat(e.data.result))})},overlayNodeClick:function(t,e){this.searchFrom.depName=e.data.depName,this.searchFrom.depId=e.data.id,this.pageNumber=0,this.getisDeleteList(),this.butlerList=[]},getTree:function(t,e){var a=this;Object(i.k)().then(function(e){e.data&&e.data instanceof Array&&(a.treeData=e.data,a.searchFrom.depId=t||a.treeData[0].id,a.searchFrom.depName=a.treeData[0].depName,a.$nextTick(function(){a.getisDeleteList()}))}).catch(function(t){})}}}},MbiU:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-container",[a("el-aside",{staticClass:"leftSidebar",attrs:{width:"260px"}},[a("el-form",[a("el-form-item",[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"small"},model:{value:t.searchFrom.depName,callback:function(e){t.$set(t.searchFrom,"depName",e)},expression:"searchFrom.depName"}},[a("el-tree",{ref:"overlayTree",attrs:{data:t.treeData,props:t.defaultProps,"node-key":"id","highlight-current":!0,"expand-on-click-node":!1},on:{"node-click":t.overlayNodeClick}}),t._v(" "),a("el-option",{staticStyle:{display:"none"},attrs:{value:""}})],1)],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{size:"small",placeholder:"业务员姓名/手机号码"},on:{input:t.searchIsDeleteList},model:{value:t.searchFrom.keyword,callback:function(e){t.$set(t.searchFrom,"keyword",e)},expression:"searchFrom.keyword"}})],1),t._v(" "),a("el-form-item",[a("div",{staticClass:"table-box table-frist"},[a("scrollLoad",{attrs:{listHeight:t.listHeight,butlerList:t.butlerList,chooseIndex:t.chooseIndex,getBulter:t.getisDeleteList},on:{getManagerId:t.nowManagerId}})],1)]),t._v(" "),a("el-form-item",[a("div",{staticClass:"table-box"},[a("div",{staticClass:"box-data"},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",size:"small",placeholder:"选择日期"},on:{change:t.getworkTrailRecord},model:{value:t.searchFrom.date,callback:function(e){t.$set(t.searchFrom,"date",e)},expression:"searchFrom.date"}})],1),t._v(" "),a("div",{staticClass:"choose-active",style:t.listHeight},t._l(t.searchList,function(e,i){return t.searchList.length>0?a("div",{key:i,staticClass:"tabItem",class:{active:t.chooseIndex===i},on:{click:function(a){t.chooseManagerId(e,i)}}},[a("el-row",{staticClass:"top"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"mobile"},[t._v("轨迹"+t._s(i+1))])]),t._v(" "),a("el-col",{attrs:{span:18}},[a("span",{staticClass:"mobile"},[t._v(t._s(e.start)+"-"+t._s(e.end))])])],1)],1):a("div",{staticClass:"tab-Item"},[t._v("\n                   暂无数据～～\n                 ")])}))])])],1)],1),t._v(" "),a("el-main",{staticClass:"pageMain"},[a("div",{style:t.mapHeight,attrs:{id:"map"}}),t._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("开始")]),t._v(" "),a("el-slider",{staticClass:"blockSlide",attrs:{max:t.lineList.length,"format-tooltip":t.formatTooltip},model:{value:t.lineValue,callback:function(e){t.lineValue=e},expression:"lineValue"}}),t._v(" "),a("span",{staticClass:"demonstration"},[t._v("结束")])],1)])],1)],1)},staticRenderFns:[]}},WjIg:function(t,e,a){var i=a("VU/8")(a("E6tP"),a("MbiU"),function(t){a("oVxH")},"data-v-84670a02",null);t.exports=i.exports},oVxH:function(t,e,a){var i=a("Drk7");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("2650ad4a",i,!0)}});