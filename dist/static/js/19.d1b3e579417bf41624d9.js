webpackJsonp([19],{"/L9s":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".button-group{position:absolute;bottom:40px;right:0}#app{height:600px}#map{position:absolute;padding:0;width:100%;background:#fff}#container{width:100%;height:100%;font-size:15px}#panel{background-color:#fff;max-height:90%;overflow-y:auto;top:10px;right:10px;width:280px;border-bottom:1px solid silver}.footer_map_buttons{background:#fff;width:100%;font-size:0}.footer_map_buttons button{font-size:15px;background:#fff;border:none;width:24%;display:inline-block;line-height:40px}.footer_map_buttons .enroll{display:inline-block;width:28%;background:#fe4a4a;color:#fff}.footer_map_buttons .active{color:#fe4a4a}.content{position:absolute;background:#fff;left:0;top:0;width:100%;height:40%;visibility:hidden;z-index:9999}.content>.content-top{height:84%;overflow:hidden}.content>.content-top>div{font-size:12px;line-height:.7rem;border-bottom:1px solid #aeaeae;margin:0 5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.content>.content-bottom{height:10%;text-align:center;font-weight:300;color:#333;font-size:30px}.input{position:absolute;top:20px;z-index:10;right:40px}.list-button{font-size:12px;position:absolute;background:#fff;left:1%;bottom:8%;width:20%;padding:2% 0;height:6%;z-index:200}.list-button>div{text-align:center}",""])},"3U3z":function(t,e,i){var n=i("/L9s");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("87116bac",n,!0)},LVHV:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"map"}},[i("div",{staticStyle:{width:"100%",height:"90%"},attrs:{id:"container"}}),t._v(" "),i("div",{staticClass:"input"},[t._v("\n     tid: "),i("el-input",{attrs:{type:"text",autoComplete:"on",placeholder:"请输入用户名tid"},model:{value:t.tid,callback:function(e){t.tid=e},expression:"tid"}}),t._v("\n     sid: "),i("el-input",{attrs:{type:"text",autoComplete:"on",placeholder:"请输入sid"},model:{value:t.sid,callback:function(e){t.sid=e},expression:"sid"}}),t._v("\n     trid: "),i("el-input",{attrs:{type:"text",autoComplete:"on",placeholder:"请输入trid"},model:{value:t.trid,callback:function(e){t.trid=e},expression:"trid"}}),t._v(" "),i("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(e){e.preventDefault(),t.handleLogin(e)}}},[t._v("\n          查\n    ")])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"button-group"},[e("input",{staticClass:"button",attrs:{type:"button",value:"开始动画",id:"start"}}),this._v(" "),e("input",{staticClass:"button",attrs:{type:"button",value:"暂停动画",id:"pause"}}),this._v(" "),e("input",{staticClass:"button",attrs:{type:"button",value:"继续动画",id:"resume"}}),this._v(" "),e("input",{staticClass:"button",attrs:{type:"button",value:"停止动画",id:"stop"}})])}]}},UeMK:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mtWM"),o=i.n(n),a=i("+aT9"),s=i.n(a),r=void 0,l=[],p=[];e.default={components:{},mounted:function(){this.init()},data:function(){return{lineList:[],trid:692,sid:8018,tid:1566181}},methods:{init:function(){r=new s.a.Map("container",{resizeEnable:!0,center:[120.111267,30.268943],zoom:17}),l=new s.a.Marker({map:r,position:[120.111267,30.268943],icon:"https://webapi.amap.com/images/car.png",offset:new s.a.Pixel(-26,-13),autoRotation:!0}),r.plugin(["AMap.ToolBar","AMap.MapType"],function(){r.addControl(new s.a.ToolBar),r.addControl(new s.a.MapType({showTraffic:!1,showRoad:!1}))})},handleLogin:function(){this.getLineArr()},drawLine:function(){this.lineList.map(function(t){var e=t.location.split(",");p.push(new s.a.LngLat(e[0],e[1]))}),console.log(p);new s.a.Polyline({map:r,path:p,strokeColor:"#00A",strokeWeight:3});var t=new s.a.Polyline({map:r,strokeColor:"#145",strokeWeight:3});l.on("moving",function(e){t.setPath(e.passedPath)}),r.setFitView(),s.a.event.addDomListener(document.getElementById("start"),"click",function(){l.moveAlong(p,9e3)},!1),s.a.event.addDomListener(document.getElementById("pause"),"click",function(){l.pauseMove()},!1),s.a.event.addDomListener(document.getElementById("resume"),"click",function(){l.resumeMove()},!1),s.a.event.addDomListener(document.getElementById("stop"),"click",function(){l.stopMove()},!1)},getLineArr:function(){var t={page:1,gap:1e3,pagesize:800,tid:this.tid,sid:this.sid,trid:this.trid},e=this;o.a.get("https://tsapi.amap.com/v1/track/terminal/trsearch?key=7bf2aa112f46d78281004b9f678e03f2",{params:t}).then(function(t){console.log(t),e.lineList=t.data.data.tracks[0].points,console.log("1234"),e.drawLine()})}}}},gxrW:function(t,e,i){var n=i("VU/8")(i("UeMK"),i("LVHV"),function(t){i("3U3z")},null,null);t.exports=n.exports}});