webpackJsonp([15],{"5q8B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"收货地址",width:"700px",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("div",[a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v("客源号")])]),t._v(" "),a("el-col",{attrs:{span:19}},[a("span",{staticClass:"pad-ri"},[t._v(t._s(t.orderDetail.id))]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===t.orderDetail.status,expression:"orderDetail.status === 2"}],attrs:{size:"mini",type:"primary"}},[t._v("已签约")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1===t.orderDetail.status,expression:"orderDetail.status === 1"}],attrs:{size:"mini",type:"danger"}},[t._v("未签约")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===t.orderDetail.status,expression:"orderDetail.status === 2"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){t.goDeaLease(t.orderDetail.orderNo)}}},[t._v("查看订单租约")])],1)],1),t._v(" "),a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v("创建时间")])]),t._v(" "),a("el-col",{attrs:{span:19}},[t._v(t._s(t.orderDetail.createTime))])],1),t._v(" "),a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v(" 创建人")])]),t._v(" "),a("el-col",{attrs:{span:19}},[t._v(t._s(t.orderDetail.createName))])],1),t._v(" "),a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v("租客姓名")])]),t._v(" "),a("el-col",{attrs:{span:19}},[t._v(t._s(t.orderDetail.name))])],1),t._v(" "),a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v("手机号码")])]),t._v(" "),a("el-col",{attrs:{span:19}},[t._v(t._s(t.orderDetail.mobile))])],1),t._v(" "),a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v("客源渠道")])]),t._v(" "),a("el-col",{attrs:{span:19}},[t._v(t._s(t.orderDetail.sourceName)+"~"+t._s(t.orderDetail.sourceTypeName))])],1),t._v(" "),a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v("租客要求")])]),t._v(" "),a("el-col",{attrs:{span:19}},[a("el-button",{attrs:{type:"primary",size:"mini",plain:""}},[t._v(t._s(t.orderDetail.rentMin)+"-"+t._s(t.orderDetail.rentMax))]),t._v(" "),t.orderDetail.houseType?a("el-button",{attrs:{type:"primary",size:"mini",plain:""}},[t._v(t._s(t._f("houseTypeFilter")(t.orderDetail.houseType)))]):t._e(),t._v(" "),t.orderDetail.roomType?a("el-button",{attrs:{type:"primary",size:"mini",plain:""}},[t._v(t._s(t._f("roomTypeFilter")(t.orderDetail.roomType)))]):t._e(),t._v(" "),t.orderDetail.houseDirection?a("el-button",{attrs:{type:"primary",size:"mini",plain:""}},[t._v(t._s(t._f("houseDirectionFilter")(t.orderDetail.houseDirection)))]):t._e(),t._v(" "),t._l(t.houseFeature,function(e,r){return t.orderDetail.houseFeatureList?a("el-button",{key:r,attrs:{type:"primary",size:"mini",plain:""}},[t._v("\n         "+t._s(e)+"\n       ")]):t._e()})],2)],1),t._v(" "),a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v("意向板块")])]),t._v(" "),a("el-col",{attrs:{span:19}},t._l(t.orderDetail.customerAreas,function(e,r){return t.orderDetail.customerAreas?a("el-button",{key:r,attrs:{type:"primary",size:"mini",plain:""}},[t._v("\n         "+t._s(e.name)+"\n       ")]):t._e()}))],1),t._v(" "),a("el-row",{staticClass:"pad-t",attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"text-right"},[t._v("备注")])]),t._v(" "),a("el-col",{attrs:{span:19}},[t._v(t._s(t.orderDetail.remark))])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("关闭")])],1)])},staticRenderFns:[]}},Ccil:function(t,e,a){var r=a("xO4B");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("08ae3e8c",r,!0)},Z4Eu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Htgu");e.default={data:function(){return{orderDetail:{},houseFeature:[],dialogFormVisible:!1}},filters:{houseDirectionFilter:function(t){return[{value:1,label:"朝南"},{value:2,label:"朝北"},{value:3,label:"朝东"},{value:4,label:"朝西"}].filter(function(e){return e.value===t})[0].label},houseTypeFilter:function(t){return[{value:1,label:"合租"},{value:2,label:"整租"},{value:3,label:"公寓"}].filter(function(e){return e.value===t})[0].label},roomTypeFilter:function(t){return[{value:1,label:"1室"},{value:2,label:"2室"},{value:3,label:"3室"},{value:4,label:"4室"},{value:5,label:"4室以上"}].filter(function(e){return e.value===t})[0].label}},methods:{goDeaLease:function(t){this.$router.push({path:"/achievementCenter/dealLease",query:{orderNo:t}})},getOrderDetil:function(t){var e=this;this.dialogFormVisible=!0,Object(r.b)({customerId:t}).then(function(t){e.orderDetail=t.data,e.orderDetail.houseFeatureList&&e.houseFeatureFilter(e.orderDetail.houseFeatureList)})},houseFeatureFilter:function(t){var e=this,a=[{value:"1",label:"独立卫生间"},{value:"2",label:"独立阳台"},{value:"3",label:"独立厨房"},{value:"4",label:"飘窗"}];t.map(function(t){a.forEach(function(a){a.value===t&&e.houseFeature.push(a.label)})})}}}},mFxO:function(t,e,a){var r=a("VU/8")(a("Z4Eu"),a("5q8B"),function(t){a("Ccil")},"data-v-4dcd2743",null);t.exports=r.exports},xO4B:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".text-right[data-v-4dcd2743]{text-align:right}.pad-t[data-v-4dcd2743]{padding-top:10px}",""])}});