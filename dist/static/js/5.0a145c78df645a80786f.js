webpackJsonp([5],{ARoL:function(e,t,n){var a=n("VU/8")(n("bPRz"),n("pMG4"),function(e){n("ckmk")},null,null);e.exports=a.exports},"Y+8N":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".dashboard-container{padding:20px}.dashboard-container .img-banner{height:50vh;border-radius:10px;background-color:#2d3a4b;background-image:url("+n("nTyu")+");background-size:cover;background-position:50%}.dashboard-text{font-size:30px;line-height:46px}",""])},bPRz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),r=n.n(a),i=n("NYxO"),o=n("nTyu"),s=n.n(o);t.default={name:"dashboard",filters:{rolesFilter:function(e){return{citySecretary:"【城市内勤】",citySteward:"【城市管家】",headman:"【组长】",webmaster:"【站长】",plateManage:"【板块经理】",areaManage:"【区域经理】",cityDirector:"【城市总】",personnel:"【人事】",operation:"【运营】",admin:"【系统管理员】"}[e]||"【未知用户】"}},data:function(){return{bannerPic:s.a}},computed:r()({},Object(i.b)(["name","roles"])),methods:{}}},ckmk:function(e,t,n){var a=n("Y+8N");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("7e39a544",a,!0)},nTyu:function(e,t,n){e.exports=n.p+"static/img/banner1.dbf64ba.jpg"},pMG4:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dashboard-container"},[t("p",{staticStyle:{"margin-top":"0"}},[this._v(this._s(this._f("rolesFilter")(this.roles))+this._s(this.name))]),this._v(" "),t("div",{staticClass:"img-banner"})])},staticRenderFns:[]}}});