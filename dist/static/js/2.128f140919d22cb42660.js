webpackJsonp([2],{"+MD4":function(e,t,a){"use strict";t.g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/department/queryDepartmentByLogin",{method:"method",params:e})},t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/department/createDepartment",{method:"method",params:e})},t.i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/department/updateDepartment",{method:"method",params:e})},t.f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/department/queryDepAreaPerm",{method:"method",params:e})},t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/department/createDepAreaPerm",{method:"method",params:e})},t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/department/delDepartment",{method:"method",params:e})},t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/user/createManager",{method:"method",params:e})},t.j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/user/updateManager",{method:"method",params:e})},t.h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/user/resetPassword",{method:"method",params:e})},t.k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/user/updateType",{method:"method",params:e})},t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)("/user/deleteManager",{method:"method",params:e})};var n=a("Vo7i")},"0xDb":function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},a=!0,n=!1,i=void 0;try{for(var l,c=s()(o()(e));!(a=(l=c.next()).done);a=!0){var d=l.value,u=e[d];void 0===u||""===u||null===u||r()(u)||-1===u||(t[d]=u)}}catch(e){n=!0,i=e}finally{try{!a&&c.return&&c.return()}finally{if(n)throw i}}return t},t.b=function e(t){if(!t&&"object"!==(void 0===t?"undefined":d()(t)))throw new Error("error arguments","shallowClone");var a=t.constructor===Array?[]:{};for(var n in t)t.hasOwnProperty(n)&&(t[n]&&"object"===d()(t[n])?(a[n]=t[n].constructor===Array?[]:{},a[n]=e(t[n])):a[n]=t[n]);return a};var n=a("jCJX"),r=a.n(n),i=a("cfvZ"),o=a.n(i),l=a("u6qr"),s=a.n(l),c=a("GxZn"),d=a.n(c)},"3vny":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout-container"},[a("el-container",[a("el-aside",{staticClass:"asideBox",style:e.treeHeight,attrs:{width:"240px"}},[a("el-tree",{ref:"trees",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","highlight-current":!0,"expand-on-click-node":!1,"default-expanded-keys":[e.nowOrgObj.id]},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),a("el-main",{staticClass:"pageMain"},[a("el-row",{staticClass:"topBanner"},[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"blue"},[e._v("当前选择："+e._s(e.nowOrgObj.depName))]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1!==e.nowOrgObj.id,expression:"nowOrgObj.id !== 1"}],staticClass:"right filter-item",attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:e.delOrg}},[e._v("删除")]),e._v(" "),a("el-button",{staticClass:"right filter-item",attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:e.editOrg}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1!==e.nowOrgObj.id,expression:"nowOrgObj.id !== 1"}],staticClass:"right filter-item",attrs:{type:"primary",size:"mini",icon:"el-icon-menu"},on:{click:e.assignHouse}},[e._v("房源分配")]),e._v(" "),a("el-button",{staticClass:"right filter-item",attrs:{type:"primary",size:"mini",icon:"el-icon-circle-plus-outline"},on:{click:e.addOrg}},[e._v("添加旗下部门")])],1)],1),e._v(" "),a("div",{staticClass:"model-search clearfix"},[a("el-input",{staticStyle:{width:"300px"},attrs:{size:"small",placeholder:"姓名/手机号码"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchParam(t)}},model:{value:e.formData.nameOrMobile,callback:function(t){e.$set(e.formData,"nameOrMobile",t)},expression:"formData.nameOrMobile"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",size:"small",icon:"el-icon-search"},nativeOn:{click:function(t){e.searchParam(t)}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{plain:"",size:"small",icon:"el-icon-remove-outline"},nativeOn:{click:function(t){e.clearForm(t)}}},[e._v("清空")]),e._v(" "),a("el-button",{staticClass:"right",attrs:{type:"primary",size:"small",icon:"el-icon-circle-plus-outline"},nativeOn:{click:function(t){e.handleApply(t)}}},[e._v("新增账号")])],1),e._v(" "),a("GridUnit",{ref:"refGridUnit",attrs:{columns:e.colModels,url:e.url,listField:"data.data",autoLoad:!1,dataMethod:e.method,formOptions:e.formData,height:e.tableHeight},scopedSlots:e._u([{key:"handle",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:function(a){e.editAccount(t.row)}}},[e._v("\n            编辑\n          ")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh",size:"small"},on:{click:function(a){e.resetPsd(t.row)}}},[e._v("\n            密码重置\n          ")]),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(a){e.delAccount(t.row)}}},[e._v("\n            删除\n          ")])]}},{key:"roleTmp",fn:function(t){return[e._v("\n          "+e._s(e._f("roleStr")(t.row.role))+"\n        ")]}},{key:"accountType",fn:function(t){return[1==t.row.type?a("el-tag",[e._v("正式")]):0==t.row.type?a("div",{staticClass:"underline colorRed",on:{click:function(a){e.changeAccountType(t.row)}}},[e._v("试用中")]):a("div",{staticClass:"underline colorInfo",on:{click:function(a){e.changeAccountType(t.row)}}},[e._v("已失效")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"dialog-info"},[a("el-dialog",{attrs:{title:e.isEditOrg?"编辑部门":"新增部门",visible:e.layer_addOrg,width:"500px"},on:{close:e.layerClose,"update:visible":function(t){e.layer_addOrg=t}}},[a("el-form",{ref:"orgForm",staticStyle:{"margin-left":"20px"},attrs:{size:"small",model:e.orgForm,rules:e.rules,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"部门名称",prop:"depName"}},[a("el-input",{model:{value:e.orgForm.depName,callback:function(t){e.$set(e.orgForm,"depName",t)},expression:"orgForm.depName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上级部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.superiorName,callback:function(t){e.superiorName=t},expression:"superiorName"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.layer_addOrg=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.submitOrg}},[e._v("确定")])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-info"},[a("el-dialog",{attrs:{title:"房源分配管理",visible:e.layer_house,width:"700px"},on:{"update:visible":function(t){e.layer_house=t},close:e.houseClose}},[a("div",{staticStyle:{"padding-bottom":"10px"}},[e._v("\n        给部门 "),a("span",{staticClass:"colorRed"},[e._v(e._s(e.nowOrgObj.depName))]),e._v(" 分配房源\n      ")]),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content"},[a("div",{staticClass:"topTitle"},[e._v("\n              城市\n            ")]),e._v(" "),a("ul",{staticClass:"contentNav"},e._l(e.cityData,function(t,n){return a("li",{key:n,class:{current:e.cityIndex===n},on:{click:function(t){e.cityIndex=n}}},[a("el-checkbox",{attrs:{label:t.name,indeterminate:t.indeterminate},on:{change:function(a){e.checkChange(t.checked,t.childrens)}},model:{value:t.checked,callback:function(a){e.$set(t,"checked",a)},expression:"item.checked"}})],1)}))])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content"},[a("div",{staticClass:"topTitle"},[e._v("\n              区域\n            ")]),e._v(" "),a("ul",{staticClass:"contentNav"},e._l(e.cityData.length>0?e.cityData[e.cityIndex].childrens:[],function(t,n){return a("li",{key:n,class:{current:e.areaIndex===n},on:{click:function(t){e.areaIndex=n}}},[a("el-checkbox",{attrs:{label:t.name,indeterminate:t.indeterminate},on:{change:function(a){e.checkChange(t.checked,t.childrens)}},model:{value:t.checked,callback:function(a){e.$set(t,"checked",a)},expression:"item.checked"}})],1)}))])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content"},[a("div",{staticClass:"topTitle"},[e._v("\n              板块/商圈\n            ")]),e._v(" "),a("ul",{staticClass:"contentNav"},e._l(e.cityData.length>0?e.cityData[e.cityIndex].childrens[e.areaIndex].childrens:[],function(t,n){return a("li",{key:n},[a("el-checkbox",{attrs:{label:t.name},on:{change:function(a){e.checkChange(t.checked,t.childrens)}},model:{value:t.checked,callback:function(a){e.$set(t,"checked",a)},expression:"item.checked"}})],1)}))])])],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.layer_house=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.allocateHouse}},[e._v("确定")])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-info"},[a("el-dialog",{attrs:{title:e.isEditAccount?"编辑账号":"新增账号",visible:e.layer_account,width:"800px"},on:{close:e.closeAccount,"update:visible":function(t){e.layer_account=t}}},[a("el-form",{ref:"accountForm",attrs:{size:"small",model:e.accountForm,rules:e.rules,"label-position":"right","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[a("el-input",{model:{value:e.accountForm.mobile,callback:function(t){e.$set(e.accountForm,"mobile",t)},expression:"accountForm.mobile"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:e.accountForm.name,callback:function(t){e.$set(e.accountForm,"name",t)},expression:"accountForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-select",{model:{value:e.accountForm.sex,callback:function(t){e.$set(e.accountForm,"sex",t)},expression:"accountForm.sex"}},e._l(e.genderOpts,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所属部门",prop:"depName"}},[a("el-select",{staticStyle:{width:"100%"},model:{value:e.accountForm.depName,callback:function(t){e.$set(e.accountForm,"depName",t)},expression:"accountForm.depName"}},[a("el-tree",{ref:"overlayTree",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","highlight-current":!0,"expand-on-click-node":!1,"default-expanded-keys":[e.nowOrgObj.id]},on:{"node-click":e.overlayNodeClick}}),e._v(" "),a("el-option",{staticStyle:{display:"none"},attrs:{value:""}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"权限角色",prop:"role"}},[a("el-select",{staticStyle:{width:"100%"},model:{value:e.accountForm.role,callback:function(t){e.$set(e.accountForm,"role",t)},expression:"accountForm.role"}},e._l(e.roleOpts,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机编码",prop:"imei"}},[a("el-input",{model:{value:e.accountForm.imei,callback:function(t){e.$set(e.accountForm,"imei",t)},expression:"accountForm.imei"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"入职时间",prop:"gmtHire"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择入职日期"},model:{value:e.accountForm.gmtHire,callback:function(t){e.$set(e.accountForm,"gmtHire",t)},expression:"accountForm.gmtHire"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.layer_account=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("accountForm")}}},[e._v("确定")])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-info"},[a("el-dialog",{attrs:{title:"账号类型",visible:e.layer_accountType,width:"500px"},on:{close:e.close_accountType,"update:visible":function(t){e.layer_accountType=t}}},[a("div",[e._v("更改账号类型")]),e._v(" "),a("div",{staticStyle:{"line-height":"50px"}},[a("el-row",[a("el-radio-group",{staticStyle:{width:"100%"},on:{change:e.clearTypeValidate},model:{value:e.accoutTypeStatus,callback:function(t){e.accoutTypeStatus=t},expression:"accoutTypeStatus"}},[a("el-col",{attrs:{span:8}},[a("el-radio",{attrs:{label:1}},[e._v("设为正式账号")])],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-radio",{attrs:{label:0}},[e._v("设为试用账号")])],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-radio",{attrs:{label:2}},[e._v("设为失效账号")])],1)],1)],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:1==e.accoutTypeStatus,expression:"accoutTypeStatus == 1"}],ref:"typeForm",attrs:{size:"small",model:e.typeForm,rules:e.rules,"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:"指定手机号码",prop:"mobile"}},[a("el-input",{model:{value:e.typeForm.mobile,callback:function(t){e.$set(e.typeForm,"mobile",t)},expression:"typeForm.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机编码",prop:"imei"}},[a("el-input",{model:{value:e.typeForm.imei,callback:function(t){e.$set(e.typeForm,"imei",t)},expression:"typeForm.imei"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"入职时间",prop:"gmtHire"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择入职时间"},model:{value:e.typeForm.gmtHire,callback:function(t){e.$set(e.typeForm,"gmtHire",t)},expression:"typeForm.gmtHire"}})],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:0==e.accoutTypeStatus,expression:"accoutTypeStatus == 0"}],ref:"typeForm2",attrs:{size:"small",model:e.typeForm2,rules:e.rules,"label-position":"right","label-width":"80px"}},[a("el-form-item",{attrs:{label:"失效时间",prop:"gmtExpire"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd","picker-options":e.pickerOptions,placeholder:"选择失效日期"},model:{value:e.typeForm2.gmtExpire,callback:function(t){e.$set(e.typeForm2,"gmtExpire",t)},expression:"typeForm2.gmtExpire"}})],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.accoutTypeStatus,expression:"accoutTypeStatus == 2"}],staticClass:"colorRed"},[e._v("失效后，账号将无法登陆")]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.layer_accountType=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.accountTypeSub}},[e._v("确定")])],1)],1)],1)],1)},staticRenderFns:[]}},"7VTS":function(e,t,a){(e.exports=a("bKW+")(!1)).push([e.i,".model-table{border:1px solid #e6ebf5}.model-pagenation{padding:10px 0;text-align:right}.table-expand{font-size:0}.table-expand .el-form-item__content,.table-expand .el-form-item__label{font-size:12px}.table-expand label{color:#99a9bf}.table-expand .el-form-item{margin-right:0;margin-bottom:0;width:33%}",""])},D9Ui:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"model-table-pagenation"},[a("div",{staticClass:"model-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.lock",value:e.loading,expression:"loading",modifiers:{lock:!0}}],ref:"gridUnit",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:e.border,stripe:e.stripe,height:e.height,"max-height":e.maxHeight,fit:e.fit,size:e.size,"show-header":e.showHeader,"highlight-current-row":e.highlightCurrentRow,"current-row-key":e.currentRowKey,"row-class-name":e.rowClassName,"row-style":e.rowStyle,"row-ket":e.rowKey,"empty-text":e.emptyText,"default-expand-all":e.defaultExpandAll,"expand-row-keys":e.expandRowKeys,"default-sort":e.defaultSort,"tooltip-effect":e.tooltipEffect,"show-summary":e.showSummary,"sum-text":e.sumText,"summary-method":e.summaryMethod},on:{select:function(t,a){return e.emitEventHandler("select",t,a)},"select-all":function(t){return e.emitEventHandler("select-all",t)},"selection-change":function(t){return e.emitEventHandler("selection-change",t)},"cell-mouse-enter":function(t,a,n,r){return e.emitEventHandler("cell-mouse-enter",t,a,n,r)},"cell-mouse-leave":function(t,a,n,r){return e.emitEventHandler("cell-mouse-leave",t,a,n,r)},"cell-click":function(t,a,n,r){return e.emitEventHandler("cell-click",t,a,n,r)},"cell-dblclick":function(t,a,n,r){return e.emitEventHandler("cell-dblclick",t,a,n,r)},"row-click":function(t,a,n){return e.emitEventHandler("row-click",t,a,n)},"row-dblclick":function(t,a){return e.emitEventHandler("row-dblclick",t,a)},"row-contextmenu":function(t,a){return e.emitEventHandler("row-contextmenu",t,a)},"header-click":function(t,a){return e.emitEventHandler("header-click",t,a)},"sort-change":function(t){return e.emitEventHandler("sort-change",t)},"filter-change":function(t){return e.emitEventHandler("filter-change",t)},"current-change":function(t,a){return e.emitEventHandler("current-change",t,a)},"header-dragend":function(t,a,n,r){return e.emitEventHandler("header-dragend",t,a,n,r)},"expand-change":function(t,a){return e.emitEventHandler("expand-change",t,a)}}},[e.showRowIndex?a("el-table-column",{attrs:{type:"index",width:"40",align:"center"}}):e._e(),e._v(" "),e.showExpand?a("el-table-column",{attrs:{type:"expand",width:"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",size:"small",inline:""}},e._l(e.expandColums,function(n,r){return a("el-form-item",{key:r,attrs:{label:n.label}},[a("span",[e._v(e._s(t.row[n.prop]))])])}))]}}])}):e._e(),e._v(" "),e.showSelection?a("el-table-column",{attrs:{type:"selection",width:"40"}}):e._e(),e._v(" "),e._l(e.columns,function(t,n){return a("el-table-column",{key:n,attrs:{"column-key":t.columnKey,prop:t.prop,label:t.label,width:t.minWidth?"-":t.width||"auto",minWidth:t.minWidth||t.width||100,fixed:t.fixed,"render-header":t.renderHeader,sortable:t.sortable,"sort-method":t.method,resizable:t.resizable,formatter:t.formatter,"show-overflow-tooltip":t.showOverflowTooltip||!0,align:t.align||"left","header-align":t.headerAlign||t.align,"class-name":t.className,"label-class-name":t.labelClassName,selectable:t.selectable,"reserve-selection":t.reserveSelection,filters:t.filters,"filter-placement":t.filterPlacement,"filter-multiple":t.filterMultiple,"filter-method":t.filterMethod,"filtered-value":t.filteredValue},scopedSlots:e._u([{key:"default",fn:function(n){return[t.filter?a("span",["parseTime"===t.filter&&n.row[t.prop]&&""!=n.row[t.prop]?a("i",{staticClass:"el-icon-time"}):e._e(),e._v("\n            "+e._s(e.Vue.filter(t.filter)(n.row[t.prop]))+"\n          ")]):"img"===t.type?a("div",{staticStyle:{display:"flex"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.row[t.prop],expression:"scope.row[column.prop]"}],staticClass:"image preview-img image-center",attrs:{width:"40",height:"40"},on:{click:function(a){e.previewImage(n.row[t.prop])}}})]):"link"===t.type?a("a",{staticStyle:{color:"#409eff"},attrs:{href:n.row[t.prop],target:"_blank"}},[e._v("\n            "+e._s(n.row[t.prop])+"\n          ")]):"status"===t.type&&t.unitFilters?a("el-tag",{attrs:{type:t.unitFilters.renderStatusType(n.row[t.prop])}},[e._v("\n            "+e._s(t.unitFilters.renderStatusValue(n.row[t.prop]))+"\n          ")]):t.slotName?a("span",[e._t(t.slotName,null,{row:n.row,$index:n.$index})],2):a("span",[e._v("\n            "+e._s(t.render?t.render(n.row):n.row[t.prop])+"\n          ")])]}}])})})],2)],1),e._v(" "),e.showPagination?a("div",{staticClass:"model-pagenation"},[a("el-pagination",{attrs:{background:e.pagenationBg,"current-page":e.pagination.pageNo,"page-sizes":e.pageSizes,"page-size":e.pagination.pageSize,layout:e.paginationLayout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()])},staticRenderFns:[]}},FTeD:function(e,t,a){a("fntd"),e.exports=a("bGpD").Number.isNaN},HmUy:function(e,t,a){e.exports={default:a("o5eu"),__esModule:!0}},L25M:function(e,t,a){(e.exports=a("bKW+")(!1)).push([e.i,".asideBox{border:1px solid #ddd;height:100%}.filter-item{margin-left:10px}.pageMain{padding:0 20px}.topBanner{border:1px solid #ccc;padding:10px}.topBanner .blue{color:#409eff;font-weight:700;line-height:28px}.model-search{padding:10px 0}.underline{text-decoration:underline;cursor:pointer}.colorRed{color:#f56c6c}.colorInfo{color:#909399}.grid-content{width:100%;height:360px;border:1px solid #ccc}.grid-content .topTitle{width:100%;height:30px;line-height:30px;text-align:center;border-bottom:1px solid #ccc;background:#eee}.grid-content .contentNav{width:100%;height:330px;overflow:auto}.grid-content .contentNav li{width:100%;height:30px;line-height:30px;padding-left:10px}.grid-content .contentNav .current{background:#eee}",""])},LuId:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("cAgV"),r=a("U4Ig"),i=a.n(r),o=a("E4LH"),l=a("0xDb"),s=a("+MD4"),c=[{value:1,label:"城市内勤"},{value:2,label:"城市管家"},{value:3,label:"组长"},{value:4,label:"区域经理"},{value:5,label:"城市总"},{value:6,label:"人事"},{value:7,label:"运营"}];t.default={name:"framework",directives:{waves:n.a},components:{GridUnit:i.a},created:function(){var e=this,t=document.body.clientHeight-230;this.tableHeight=t>300?t:300,window.onresize=function(){return t=document.body.clientHeight-230,void(e.tableHeight=e.tableHeight=t>300?t:300)},this.defaultAccount=Object(l.b)(this.accountForm),this.getTree()},computed:{treeHeight:function(){return{height:this.tableHeight+104+"px"}}},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()}},rules:{depName:[{required:!0,message:"请输入部门名称",trigger:"blur"}],mobile:[{required:!0,trigger:"blur",validator:function(e,t,a){Object(o.a)(t)?a():a(new Error("请输入正确的手机号"))}}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],role:[{required:!0,message:"请选择权限角色",trigger:"change"}],imei:[{required:!0,message:"请输入手机编码",trigger:"blur"}],gmtExpire:[{required:!0,message:"请选择失效时间",trigger:"change"}],gmtHire:[{required:!0,message:"请选择入职时间",trigger:"blur"}]},defaultProps:{children:"child",label:"depName"},treeData:[],cityIndex:0,areaIndex:0,cityData:[],genderOpts:[{value:1,label:"男"},{value:2,label:"女"}],rowData:{},roleOpts:c,formData:{nameOrMobile:"",depId:"",type:null},nowOrgObj:{depName:"",id:""},parentOrg:{depName:"",id:""},tableHeight:300,layer_addOrg:!1,layer_house:!1,layer_accountType:!1,superiorName:"",orgForm:{depName:""},accountForm:{mobile:"",name:"",sex:1,depId:"",depName:"",role:"",imei:"",type:1,gmtHire:""},accoutTypeStatus:1,typeForm:{mobile:"",imei:"",gmtHire:""},typeForm2:{gmtExpire:""},defaultAccount:{},isEditOrg:!1,isEditAccount:!1,layer_account:!1,colModels:[{prop:"name",label:"姓名"},{prop:"depName",label:"部门"},{prop:"role",label:"权限角色",slotName:"roleTmp"},{prop:"mobile",label:"手机号码"},{prop:"imei",label:"手机编码",width:180},{prop:"type",label:"类型",slotName:"accountType"},{label:"操作",slotName:"handle",width:320},{prop:"gmtCreate",label:"创建时间",width:180}],url:"/user/managerList",method:"managerList"}},filters:{roleStr:function(e){var t="";return c.map(function(a){a.value===e&&(t=a.label)}),t||"未知角色"}},methods:{getTree:function(e){var t=this;Object(s.g)().then(function(a){if(a.data&&a.data instanceof Array){t.treeData=a.data;var n=e||t.treeData[0].id;t.getFirstNode(n)}}).catch(function(e){})},dataFomart:function(){this.cityData.map(function(e){var t=[],a=[];e.childrens.map(function(e){var n=[];e.childrens.map(function(e){e.checked&&n.push(e)}),n.length===e.childrens.length?(e.checked=!0,e.indeterminate=!1,t.push(e)):(e.checked=!1,e.indeterminate=n.length>0,e.indeterminate&&a.push(e))}),t.length===e.childrens.length?(e.checked=!0,e.indeterminate=!1):(e.checked=!1,e.indeterminate=t.length>0||a.length>0)})},getFirstNode:function(e){var t=this;this.$nextTick(function(){t.$refs.trees.setCurrentKey(e);var a=t.$refs.trees.getNode(e);t.nowOrgObj=Object(l.b)(a.data),t.parentOrg=a.parent.data instanceof Array?Object(l.b)(a.parent.data[0]):Object(l.b)(a.parent.data),t.formData.depId=t.nowOrgObj.id,t.$nextTick(function(){t.searchParam()})})},handleNodeClick:function(e,t){var a=this;this.nowOrgObj=Object(l.b)(t.data),this.parentOrg=t.parent.data instanceof Array?Object(l.b)(t.parent.data[0]):Object(l.b)(t.parent.data),this.formData.depId=this.nowOrgObj.id,this.$nextTick(function(){a.searchParam()})},assignHouse:function(){var e=this,t={depId:this.nowOrgObj.id,parentDepId:this.parentOrg.id||0};Object(s.f)(t).then(function(t){t.data&&t.data instanceof Array?(e.cityData=t.data,e.dataFomart(),e.layer_house=!0):e.$message.error("未查询到可分配的房源")}).catch(function(e){})},houseClose:function(){this.cityIndex=0,this.areaIndex=0},addOrg:function(){this.isEditOrg=!1,this.layer_addOrg=!0,this.superiorName=this.nowOrgObj.depName},editOrg:function(){this.isEditOrg=!0,this.superiorName=this.parentOrg.depName,this.orgForm.depName=this.nowOrgObj.depName,this.layer_addOrg=!0},submitOrg:function(){var e=this;this.$refs.orgForm.validate(function(t){if(!t)return!1;var a=Object(l.b)(e.orgForm),n=s.b;e.isEditOrg?(a.depId=e.nowOrgObj.id,n=s.i):a.parentId=e.nowOrgObj.id,n(a).then(function(t){e.layer_addOrg=!1,e.$message.success((e.isEditOrg?"编辑":"新增")+"部门成功"),e.getTree(e.nowOrgObj.id)}).catch(function(e){})})},delOrg:function(){var e=this;this.$confirm("确定删除部门 ‘"+this.nowOrgObj.depName+"’ 吗? 删除前请先确保部门旗下无员工","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={depId:e.nowOrgObj.id};Object(s.d)(t).then(function(t){e.$message.success("删除部门成功"),e.getTree(e.parentOrg.id)}).catch(function(e){})}).catch(function(){})},layerClose:function(){this.$refs.orgForm.resetFields(),this.orgForm.depName=""},searchParam:function(){this.$refs.refGridUnit.searchHandler()},clearForm:function(){this.formData.nameOrMobile="",this.$refs.refGridUnit.searchHandler()},handleApply:function(){var e=this;this.layer_account=!0,this.isEditAccount=!1,this.accountForm=Object(l.b)(this.defaultAccount),this.accountForm.depId=this.nowOrgObj.id,this.accountForm.depName=this.nowOrgObj.depName,this.$nextTick(function(){e.$refs.overlayTree.setCurrentKey(e.nowOrgObj.id)})},overlayNodeClick:function(e,t){this.accountForm.depName=t.data.depName,this.accountForm.depId=t.data.id},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a=Object(l.b)(t.accountForm),n=s.c;t.isEditAccount&&(n=s.j),delete a.depName,n(a).then(function(e){t.layer_account=!1,t.$message.success((t.isEditAccount?"编辑":"新增")+"账号成功"),t.searchParam()}).catch(function(e){})})},editAccount:function(e){var t=this;for(var a in this.accountForm)this.accountForm[a]=e[a];this.accountForm.id=e.id,this.layer_account=!0,this.isEditAccount=!0,this.$nextTick(function(){t.$refs.overlayTree.setCurrentKey(t.accountForm.depId)})},resetPsd:function(e){var t=this;this.$confirm("<div>确定将账号'"+e.name+'\'的密码重置为 <span style="color: red">123456</span> 吗？',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then(function(){var a={id:e.id,password:"123456"};Object(s.h)(a).then(function(e){t.$message.success("重置密码成功"),t.searchParam()}).catch(function(e){})}).catch(function(){})},delAccount:function(e){var t=this;this.$confirm("确定删除账号'"+e.name+"'吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then(function(){var a={id:e.id};Object(s.e)(a).then(function(e){t.$message.success("删除账号成功"),t.searchParam()}).catch(function(e){})}).catch(function(){})},closeAccount:function(){this.$refs.accountForm.resetFields()},changeAccountType:function(e){this.layer_accountType=!0,this.rowData=e},close_accountType:function(){this.clearTypeValidate()},accountTypeSub:function(){var e=this;if(2===this.accoutTypeStatus){this.postType({type:2})}else{var t=1===this.accoutTypeStatus?"typeForm":"typeForm2";this.$refs[t].validate(function(t){if(!t)return!1;var a=1===e.accoutTypeStatus?e.typeForm:e.typeForm2;a.type=e.accoutTypeStatus,e.postType(a)})}},postType:function(e){var t=this;e.id=this.rowData.id,Object(s.k)(e).then(function(e){t.layer_accountType=!1,t.$message.success("编辑账号类型成功"),t.searchParam()}).catch(function(e){})},clearTypeValidate:function(){this.$refs.typeForm.resetFields(),this.$refs.typeForm2.resetFields()},allocateHouse:function(){var e=this,t=[];this.cityData.map(function(e){e.childrens.map(function(a){a.childrens.map(function(n){n.checked&&t.push({cityId:e.id,areaId:a.id,zoneId:n.id})})})});var a={depId:this.nowOrgObj.id,depPerms:t};Object(s.a)(a).then(function(t){e.layer_house=!1,e.$message.success("房源分配成功")}).catch(function(e){})},checkChange:function(e,t){t instanceof Array&&function t(a){a.map(function(a){if(a.checked=e,!(a.childrens instanceof Array&&a.childrens.length>0))return!1;t(a.childrens)})}(t),this.dataFomart()}}}},PdyQ:function(e,t,a){var n=a("7VTS");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("6imX")("3c8e8876",n,!0)},SP5S:function(e,t,a){(e.exports=a("bKW+")(!1)).push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},U4Ig:function(e,t,a){var n=a("+g4/")(a("zFEj"),a("D9Ui"),function(e){a("PdyQ")},null,null);e.exports=n.exports},WgnK:function(e,t,a){var n=a("otxf");n(n.S+n.F*!a("R971"),"Object",{defineProperty:a("tERE").f})},WxFH:function(e,t,a){"use strict";t.__esModule=!0;var n,r=a("HmUy"),i=(n=r)&&n.__esModule?n:{default:n};t.default=function(e,t,a){return t in e?(0,i.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},cAgV:function(e,t,a){"use strict";var n=a("Edqs"),r=a.n(n),i=(a("ctMr"),{bind:function(e,t){e.addEventListener("click",function(a){var n=r()({},t.value),i=r()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var l=o.getBoundingClientRect(),s=o.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(l.width,l.height)+"px",o.appendChild(s)),i.type){case"center":s.style.top=l.height/2-s.offsetHeight/2+"px",s.style.left=l.width/2-s.offsetWidth/2+"px";break;default:s.style.top=a.pageY-l.top-s.offsetHeight/2-document.body.scrollTop+"px",s.style.left=a.pageX-l.left-s.offsetWidth/2-document.body.scrollLeft+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}},!1)}}),o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;t.a=i},ctMr:function(e,t,a){var n=a("SP5S");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("6imX")("64df947d",n,!0)},fntd:function(e,t,a){var n=a("otxf");n(n.S,"Number",{isNaN:function(e){return e!=e}})},ihX5:function(e,t,a){var n=a("L25M");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("6imX")("2cf36e82",n,!0)},jCJX:function(e,t,a){e.exports={default:a("FTeD"),__esModule:!0}},o5eu:function(e,t,a){a("WgnK");var n=a("bGpD").Object;e.exports=function(e,t,a){return n.defineProperty(e,t,a)}},xgMI:function(e,t,a){var n=a("+g4/")(a("LuId"),a("3vny"),function(e){a("ihX5")},null,null);e.exports=n.exports},zFEj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("fHpZ"),r=a.n(n),i=a("Sxqw"),o=a.n(i),l=a("GxZn"),s=a.n(l),c=a("WxFH"),d=a.n(c),u=a("Edqs"),p=a.n(u),m=a("KEcs"),h={height:[String,Number],maxHeight:[String,Number],stripe:{type:Boolean,default:!0},border:Boolean,size:{type:String,default:"small"},fit:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},highlightCurrentRow:{type:Boolean,default:!0},currentRowKey:[String,Number],rowClassName:[String,Function],rowStyle:[String,Function],rowKey:[String,Function],emptyText:String,defaultExpandAll:Boolean,expandRowKeys:Array,defaultSort:Object,tooltipEffect:String,showSummary:Boolean,sumText:String,summaryMethod:Function,url:{type:String},method:{type:String,default:"post",validator:function(e){return-1!==["get","post","put","delete"].indexOf(e.toLowerCase())}},dataMethod:{type:String},headers:{type:Object,default:function(){return{}}},showRowIndex:{type:Boolean,default:!0},showSelection:{type:Boolean,default:!1},showExpand:{type:Boolean,default:!1},listField:{type:String,default:"data.content"},totalField:{type:String,default:"data.totalElements"},params:{type:Object,default:function(){return{}}},formOptions:{type:Object,default:function(){return{}}},autoLoad:{type:Boolean,default:!0},type:{type:String,default:"remote",validator:function(e){var t=-1!==["remote","local"].indexOf(e);return t||(this.$message.error("不支持'"+e+"', 请设置remote或local（local我是不支持的，不要问我为什么，有需要找我来呀）."),!1)}},data:{type:Array},dataHandler:{type:Function},columns:{type:Array,required:!0,columnKey:String,label:{type:String,required:!0},prop:{type:String,required:!0},width:{type:[Number,String],default:"auto"},minWidth:{type:Number,default:100},fixed:[Boolean,String],renderHeader:Function,sortable:[Boolean,String],sortMethod:Function,resizable:Boolean,formatter:Function,showOverflowTooltip:{type:Boolean,default:!0},align:{type:String,default:"left"},headerAlign:String,className:{type:String,default:""},labelClassName:{type:String,default:""},selectable:Function,reserveSelection:Boolean,filters:Array,filterPlacement:String,filterMultiple:{type:Boolean,default:!0},filterMethod:Function,filteredValue:Array,filter:{type:String},render:{type:Function},slotName:{type:String}},expandColums:{type:Array,default:function(){return[]}},showPagination:{type:Boolean,default:!0},pagenationBg:{type:Boolean,default:!0},pageSizes:{type:Array,default:function(){return[20,30,50]}},paginationLayout:{type:String,default:"total, sizes, prev, pager, next, jumper"},pageNoKey:{type:String,default:"pageNo"},pageSizeKey:{type:String,default:"pageSize"}},f=a("Vo7i"),g=a("0xDb");t.default={name:"fht-table-pagination",components:{},props:h,data:function(){return{Vue:m.default,pagination:{pageNo:1,pageSize:20},total:0,loading:!1,tableData:[],searchParams:{}}},computed:{},methods:{previewImage:function(e){if(!e)return!1;var t={src:e},a=new Image;a.src=e,a.onload=function(){t.w=a.width||800,t.h=a.height||600,m.default.$preview.open(0,[t])}},handleSizeChange:function(e){this.pagination.pageSize=e,this.fetchHandler()},handleCurrentChange:function(e){this.pagination.pageNo=e,this.fetchHandler()},searchHandler:function(){this.pagination.pageNo=1,this.fetchHandler()},fetchHandler:function(){var e=this;this.loading=!0;var t,a=void 0,n=this.url,r=this.dataMethod,i=this.listField,o=this.pageNoKey,l=this.pageSizeKey,c=this.totalField,u=this.showPagination,m=this.pagination;(a=Object(g.a)(Object(g.b)(this.searchParams)),u)&&(a=p()(a,(t={},d()(t,o,m.pageNo),d()(t,l,m.pageSize),t)));if(!f.a)return this.$message.error("请联系柏林如何在Grid组件中使用axios请求"),this.loading=!1,!1;Object(f.a)(n,{method:r,params:a}).then(function(t){var a=t;if(!t||t instanceof Array||(i&&-1!==i.indexOf(".")?i.split(".").forEach(function(e){a=a[e]}):a=t[i]),!(a&&a instanceof Array))return e.$message.error(i+"必须是Array哦. 后端童鞋注意下"),e.loading=!1,!1;e.dataHandler?e.tableData=a.map(e.dataHandler):e.tableData=a;var n=t;"[object Array]"===Object.prototype.toString.call(t)?n=t.length:"object"===(void 0===t?"undefined":s()(t))?c&&-1!==c.indexOf(".")?c.split(".").forEach(function(e){n=n[e]}):n=t[c]:n=0,e.total=n,e.loading=!1}).catch(function(t){console.log(t),e.loading=!1})},emitEventHandler:function(e){this.$emit.apply(this,[e].concat(o()(r()(arguments).slice(1))))}},mounted:function(){var e=this;this.$refs.gridUnit.$on("expand-change",function(t,a){return e.emitEventHandler("expand-change",t,a)});var t=this.type,a=this.autoLoad,n=this.formOptions,r=this.params;"remote"===t&&a&&(this.searchParams=n?p()(n,r):r,this.fetchHandler())},watch:{formOptions:{handler:function(e){this.searchParams=p()(e,this.params)},deep:!0},params:{handler:function(e){this.searchParams=p()(e,this.params)},deep:!0}}}}});