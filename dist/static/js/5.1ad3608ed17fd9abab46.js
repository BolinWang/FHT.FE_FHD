webpackJsonp([5],{"9GXO":function(e,t,n){var a=n("qRU6");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("7eac465d",a,!0)},ARoL:function(e,t,n){var a=n("Alxp")(n("WM23"),n("XhTS"),function(e){n("9GXO")},null,null);e.exports=a.exports},WM23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),r=n.n(a),i=n("9rMa"),s=n("nTyu"),o=n.n(s);t.default={name:"dashboard",filters:{rolesFilter:function(e){return{citySecretary:"【城市内勤】",citySteward:"【城市管家】",headman:"【组长】",webmaster:"【站长】",plateManage:"【板块经理】",areaManage:"【区域经理】",cityDirector:"【城市总】",personnel:"【人事】",operation:"【运营】",admin:"【系统管理员】"}[e]||"【未知用户】"}},data:function(){return{bannerPic:o.a}},computed:r()({},Object(i.b)(["name","roles"])),methods:{}}},XhTS:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dashboard-container"},[t("p",{staticStyle:{"margin-top":"0"}},[this._v(this._s(this._f("rolesFilter")(this.roles))+this._s(this.name))]),this._v(" "),t("div",{staticClass:"img-banner"})])},staticRenderFns:[]}},nTyu:function(e,t,n){e.exports=n.p+"static/img/banner1.dbf64ba.jpg"},qRU6:function(e,t,n){(e.exports=n("BkJT")(!1)).push([e.i,".dashboard-container{padding:20px}.dashboard-container .img-banner{height:50vh;border-radius:10px;background-color:#2d3a4b;background-image:url("+n("nTyu")+");background-size:cover;background-position:50%}.dashboard-text{font-size:30px;line-height:46px}",""])}});