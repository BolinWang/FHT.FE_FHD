webpackJsonp([8],{"7zsM":function(t,e,i){var a=i("uVk2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("40a5fcfc",a,!0)},"e2S+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{staffDataList:Array,columns:{type:Array,label:{type:String},prop:{type:String}}},data:function(){return{tableHeight:null}},mounted:function(){var t=this,e=document.body.clientHeight-280;this.tableHeight=e>400?e:400,window.onresize=function(){return e=document.body.clientHeight-280,void(t.tableHeight=e>400?e:400)}},computed:{tableStyle:function(){return{width:"100%",height:this.tableHeight+"px"}}},methods:{}}},j3jK:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-box"},[e("div",{staticClass:"table-box"},[e("el-table",{staticStyle:{width:"100%"},attrs:{size:"small",data:this.staffDataList,"max-height":this.tableHeight}},[e("el-table-column",{attrs:{type:"index"}}),this._v(" "),this._l(this.columns,function(t,i){return e("el-table-column",{key:i,attrs:{prop:t.prop,label:t.label}})})],2)],1)])},staticRenderFns:[]}},mVWg:function(t,e,i){var a=i("VU/8")(i("e2S+"),i("j3jK"),function(t){i("7zsM")},"data-v-f2fe288a",null);t.exports=a.exports},uVk2:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".table-box[data-v-f2fe288a]{padding-top:20px}",""])}});