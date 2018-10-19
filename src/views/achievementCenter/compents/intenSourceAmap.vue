/*
 * @Author: ghost 
 * @Date: 2018-10-08 23:52:39 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-19 15:24:47
 */
<template>
  <div class="container-box">
    <el-dialog
      title="带看地图轨迹"
      :visible.sync="centerDialogVisible"
      width="80%"
      :before-close="handleClose"
      center>
      <div class="tab-box">
          <div class="topbox">
            请选择带看轨迹
          </div>
          <div class="map-liner">
             <div class="liner-item"
               @click="chooseLiner(lookRecordListItem,index)"
               :key="index" 
               :class="{'active':chooseActive===index}"
               v-for='(lookRecordListItem,index) in  lookRecordList'>
               <div class="liner-nuim">
                 <span class="text">
                   带看{{index+1}}
                 </span>
                 <span class="room-num">带看{{lookRecordListItem.roomCount}}间房</span>
               </div>
               <div class="time-all">
                 <div class="time">
                   <span class="start-time">
                    {{lookRecordListItem.startDate}}
                   </span>
                   <span class='room-num'>开始带看</span>
                 </div>
                 <div class="time">
                   <span class="start-time">
                    {{lookRecordListItem.endDate}}
                   </span>
                   <span class='room-num'>结束带看</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      <div id="map" style="width:100%;">
      </div>
      <div class="block">
       <span class="demonstration">开始</span>
        <el-slider
          class="blockSlide"
          :max="lineList.length"
          v-model="lineValue"
          :format-tooltip="formatTooltip">
        </el-slider>
        <span class="demonstration">结束</span>
      </div>
      <!-- <div class="button-group">
          <input type="button" class="button" value="开始动画" id="start"/>
          <input type="button" class="button" value="暂停动画" id="pause"/>
          <input type="button" class="button" value="继续动画" id="resume"/>
          <input type="button" class="button" value="停止动画" id="stop"/>
      </div> -->
    </el-dialog>
  </div>
  
</template>

<script>
  import axios from 'axios'
  import AMap from 'AMap'
  import { fmtDate } from '@/utils'
  import {
    customerLookRecordApi
  } from '@/api/achievementCenter'
  let map
  let marker
  
export default {
    components: {},
    mounted: function() {
  
    },
    data() {
      return {
        centerDialogVisible: false,
        lookRecordList: [],
        chooseActive: 0,
        lineList: [],
        lineValue: 0,
        nowLiner: [],
        oldvalue: 0,
        lineArr: []
      }
    },
    watch: {
      lineValue(val, oldval) {
        let lineNeed = []
        if (val > oldval) {
          lineNeed = this.lineArr.slice(oldval, val)
        } else {
          lineNeed = this.lineArr.slice(val, oldval).reverse()
        }
        marker.moveAlong(lineNeed, 90000, () => {
        })
      }
    },
    methods: {
      formatTooltip(val) { // 滑块显示信息
        if (this.lineList.length > 0) {
          return fmtDate(this.lineList[val].locatetime)
        }
      },
      handleClose() { // 关闭销毁地图
        this.centerDialogVisible = false
        marker = ''
      },
      getAmapLinerShow(id) {
        this.centerDialogVisible = true
        this.chooseActive = 0
        this.lineValue = 0
        this.$nextTick(() => {
          customerLookRecordApi({ customerId: id }).then(res => {
            this.lookRecordList = res.data
            this.getLineArr(this.lookRecordList)
          })
        })
      },
      chooseLiner(item, index) {
        this.chooseActive = index
        this.lineValue = 0
        this.nowLiner = []
        map.destroy()
        this.getLineArr()
      },
      addClickHandler(item, markerDia) { // 聚合点点击事件
        markerDia.on('mouseover', function(e) {
          e.target.info.open(map, e.target.getPosition())
        })
      },
      init: function() {
        map = new AMap.Map('map', {
          resizeEnable: true,
          zoom: 17
        })
        const lat = this.lineList[0].location.split(',')
        this.lookRecordList[this.chooseActive].allocationInfoDTOs.map(item => {
          const markerDia = new AMap.Marker({ // 添加聚合点
            map: map,
            icon: new AMap.Icon({
              image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
              imageSize: new AMap.Size(24, 24)
            }),
            offset: new AMap.Pixel(0, 0),
            position: [item.lookLongitude, item.lookLatitude]
          })
          markerDia.info = new AMap.InfoWindow({
            content: `<div class="content-amap">
                          <div class='info'>房间地点：${item.roomName}(${item.roomCode})</div>
                          <div class='info'>带看时间：${item.lookTime}</div>
                          </div>`,
            offset: new AMap.Pixel(0, 0)
          })
          this.addClickHandler(item, markerDia)
        })
        marker = new AMap.Marker({
          map: map,
          icon: 'https://webapi.amap.com/images/car.png',
          offset: new AMap.Pixel(-26, -13),
          position: [lat[0], lat[1]],
          autoRotation: true
        })
  
        map.plugin(['AMap.ToolBar', 'AMap.MapType'], function() {
          const toolopt = {
            offset: new AMap.Pixel(70, 10), // 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为AMap.Pixel(10,10)
            position: 'RT',
            ruler: true, // 标尺键盘是否可见，默认为true
            noIpLocate: false, // 定位失败后，是否开启IP定位，默认为false
            locate: true, // 是否显示定位按钮，默认为false
            liteStyle: false, // 是否使用精简模式，默认为false
            direction: true, // 方向键盘是否可见，默认为true
            autoPosition: true, // 是否自动定位，即地图初始化加载完成后，是否自动定位的用户所在地，在支持HTML5的浏览器中有效，默认为false
            locationMarker: AMap.Marker({ map: map }),
            /**
                     *是否使用高德定位sdk用来辅助优化定位效果，默认：false.
                     *仅供在使用了高德定位sdk的APP中，嵌入webview页面时使用
                     *注：如果要使用辅助定位的功能，除了需要将useNative属性设置为true以外，
                     *还需要调用高德定位idk中，AMapLocationClient类的startAssistantLocation()方法开启辅助H5定位功能；
                     *不用时，可以调用stopAssistantLocation()方法停止辅助H5定位功能。具体用法可参考定位SDK的参考手册
                     */
            useNative: false
          }
          map.addControl(new AMap.ToolBar(toolopt))
          map.addControl(new AMap.MapType({ showTraffic: false, showRoad: false }))
        })
      },
      handleLogin() {
        this.getLineArr()
      },
      drawLine() {
        this.lineArr = []
        this.lineList.map((listItem) => {
          const lat = listItem.location.split(',')
          this.lineArr.push(new AMap.LngLat(lat[0], lat[1]))
        })
        // 绘制轨迹
        new AMap.Polyline({
          map: map,
          path: this.lineArr,
          strokeColor: '#fe4a4a', // 线颜色
          strokeOpacity: 1, // 线透明度
          strokeWeight: 6, // 线宽
          strokeStyle: 'solid' // 线样式
        })
        const passedPolyline = new AMap.Polyline({
          map: map,
          path: this.lineArr,
          strokeColor: '#000', // 线颜色
          strokeOpacity: 1, // 线透明度
          strokeWeight: 6, // 线宽
          strokeStyle: 'solid' // 线样式
        })
        marker.on('moving', function(e) {
          passedPolyline.setPath(e.passedPath)
        })
        map.setFitView()
      },
      getLineArr() {
        const params = {
          starttime: this.lookRecordList[this.chooseActive].startTime,
          endtime: this.lookRecordList[this.chooseActive].endTime,
          page: 1,
          gap: 1000,
          pagesize: 800,
          tid: this.lookRecordList[this.chooseActive].gdTid,
          sid: 11117,
          trid: this.lookRecordList[this.chooseActive].trid }
        const self = this
        axios.get('https://tsapi.amap.com/v1/track/terminal/trsearch?key=7bf2aa112f46d78281004b9f678e03f2', { params }).then(res => {
          if (res.data.data.tracks) {
            self.lineList = res.data.data.tracks[0].points
          }
          this.init()
          self.drawLine()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block{
    position: absolute;
    bottom:90px;
    display: flex;
    display: -webkit-flex;
    width:400px;
    right: 40px;
    border-radius: 10px;
    padding:0 20px;
    background: #fff;
    z-index: 10;
    .demonstration{
      width:40px;
      text-align: center;
      line-height: 38px;
      font-size: 10px;
    }
    .blockSlide{
      flex: 1;
      -webkit-box-flex: 1;
    }
  }
 .tab-box{
   position: absolute;
   top:90px;
   z-index: 10;
   width:220px;
   left:60px;
   box-shadow: 4px 4px 5px #888888;
   .map-liner{
     background: #fff; 
     height:440px;
     padding-bottom: 4px;
     overflow: auto; 
   }
   .active{
     background: #909399 !important;
   }
   .topbox{
     overflow: hidden;
     text-align: center;
     height:45px;
     line-height: 45px;
     color: #FFFFFF;
     background: #409EFF;
   }
   .liner-item{
     background: #c7c7c7;
     color: #fff;
     padding:0 10px;
     margin-bottom: 10px;
     .liner-nuim{
       height:35px;
       line-height: 35px;
       border-bottom: 2px solid #fff;
     }
     .time{
       line-height: 26px;
     }
     .room-num{
       float: right;
     }
   }
 }
.button-group{
  position: absolute;
  bottom: 40px;
  z-index: 9999;
  right: 0;
} 
#map{
  height:540px;
  padding: 0;
  width: 100%;
  background: #FFFFFF;
}
  #container {
    width: 100%;
    height: 100%;
    font-size: 15px;
  }

  #panel {
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
    border-bottom: solid 1px silver;
  }

  .footer_map_buttons {
    background: #FFFFFF;
    width: 100%;
    font-size: 0;
    button {
      font-size: 15px;
      background: #FFFFFF;
      border: none;
      width: 24%;
      display: inline-block;
      line-height: 40px;
    }
    .enroll {
      display: inline-block;
      width: 28%;
      background: #fe4a4a;
      color: #FFFFFF;
    }
    .active {
      color: #fe4a4a;
      /* border-top: 1px solid #fe4a4a; */
    }
  }
  .content {
    position: absolute;
    background: #FFFFFF;
    left: 0;
    top: 0;
    width: 100%;
    height: 40%;
    visibility: hidden;
    z-index: 9999;
    > .content-top {
      height: 84%;
      overflow: hidden;
      > div {
        font-size: 12px;
        line-height: 0.7rem;
        border-bottom: 1px solid #aeaeae;
        margin: 0 5%;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
      }
    }
    > .content-bottom {
      height: 10%;
      text-align: center;
      font-weight: 300;
      color: #333;
      font-size: 30px;
    }
  }
.input{
  position: absolute;
  top:20px;
  z-index: 10;
  right:40px;
}
  .list-button {
    font-size: 12px;
    position: absolute;
    background: #FFFFFF;
    left: 1%;
    bottom: 8%;
    width: 20%;
    padding: 2% 0;
    height: 6%;
    z-index: 200;
    > div {
      text-align: center;
    }
  }
</style>


