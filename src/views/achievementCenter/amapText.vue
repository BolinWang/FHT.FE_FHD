/*
 * @Author: ghost 
 * @Date: 2018-09-24 14:00:22 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-09-24 14:17:52
 */
<template>
  <div id="map" style="width:100%; height:100%">
    <div id="container" style="width:100%; height:90%"></div>
    <div class="button-group">
      <input type="button" class="button" value="开始动画" id="start"/>
      <input type="button" class="button" value="暂停动画" id="pause"/>
      <input type="button" class="button" value="继续动画" id="resume"/>
      <input type="button" class="button" value="停止动画" id="stop"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import AMap from 'AMap'
  // import { getClass } from '@/utils'
  let map
  let marker = []
  let lineArr = []
export default {
    components: {},
    mounted: function() {
      this.getLineArr()
      console.log(AMap)
    },
    data() {
      return {
        lineList: []
      }
    },
    methods: {
      init: function() {
        map = new AMap.Map('container', {
          resizeEnable: true,
          center: [120.111267, 30.268943],
          zoom: 17
        })

        marker = new AMap.Marker({
          map: map,
          position: [120.111267, 30.268943],
          icon: 'https://webapi.amap.com/images/car.png',
          offset: new AMap.Pixel(-26, -13),
          autoRotation: true
        })
        map.plugin(['AMap.ToolBar', 'AMap.MapType'], function() {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.MapType({showTraffic: false, showRoad: false}))
        })
        let lngX = 120.111267
        let latY = 30.268943
        lineArr.push(new AMap.LngLat(lngX, latY))
        // for (let i = 1; i < 4; i++) {
        //   lngX = lngX + Math.random() * 0.05
        //   if (i % 2) {
        //     latY = latY + Math.random() * 0.0001
        //   } else {
        //     latY = latY + Math.random() * 0.06
        //   }
        //   lineArr.push(new AMap.LngLat(lngX, latY))
        // }
        console.log(this.lineList)
        this.lineList.map((listItem) => {
          let lat = listItem.location.split(',')
          lineArr.push(new AMap.LngLat(lat[0], lat[1]))
        })
        console.log(lineArr)
        // 绘制轨迹
        var polyline = new AMap.Polyline({
          map: map,
          path: lineArr,
          strokeColor: '#00A', // 线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 3 // 线宽
        // strokeStyle: "solid"  //线样式
        })
        var passedPolyline = new AMap.Polyline({
          map: map,
          // path: lineArr,
          strokeColor: '#145', // 线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 3 // 线宽
        // strokeStyle: "solid"  //线样式
        })

        marker.on('moving', function(e) {
          passedPolyline.setPath(e.passedPath)
        })
        map.setFitView()
  
        AMap.event.addDomListener(document.getElementById('start'), 'click', function() {
          marker.moveAlong(lineArr, 9000)
        }, false)
        AMap.event.addDomListener(document.getElementById('pause'), 'click', function() {
          marker.pauseMove()
        }, false)
        AMap.event.addDomListener(document.getElementById('resume'), 'click', function() {
          marker.resumeMove()
        }, false)
        AMap.event.addDomListener(document.getElementById('stop'), 'click', function() {
          marker.stopMove()
        }, false)
      },
      getLineArr() {
        let params = {
          // startTime: '',
          // endTime: '',
          page: 1,
          gap: 1000,
          pagesize: 800,
          tid: 1339185,
          sid: 8018,
          trid: 497}
        let self = this
        axios.get('https://tsapi.amap.com/v1/track/terminal/trsearch?key=7bf2aa112f46d78281004b9f678e03f2', {params}).then(res => {
          console.log(res.data.data)
          self.lineList = res.data.data.tracks[0].points
          self.init()
        })
      }
    }
  }
</script>

<style lang="scss">
.button-group{
  position: absolute;
  bottom: 40px;
  right: 0;
}
  #app {
    height: 600px;
  }
#map{
  position: absolute;
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
