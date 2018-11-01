/*
 * @Author: ghost 
 * @Date: 2018-09-30 02:26:00 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-11-01 10:34:54
 */
<template>
  <div class="container">
    <el-container>
      <el-aside  class="leftSidebar" width="260px">
          <el-form>
            <el-form-item>
              <el-select size="small" style='width:100%' v-model="searchFrom.depName">
                <el-tree
                  ref="overlayTree"
                  :data="treeData"
                  :props="defaultProps"
                  node-key="id"
                  :highlight-current="true"
                  :expand-on-click-node="false"
                  @node-click="overlayNodeClick">
                </el-tree>
                <el-option style="display:none" value=""></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input size="small" v-model="searchFrom.keyword" placeholder="业务员姓名/手机号码"  @input="searchIsDeleteList">
              </el-input>
            </el-form-item>
             <el-form-item>
               <el-tabs v-model="searchFrom.isDelete" @tab-click="handleClick">
                <el-tab-pane 
                 v-for='(IncumbencyListItem,index) in IncumbencyList'
                 :label="IncumbencyListItem.label" 
                 :key='index'
                 :name='IncumbencyListItem.value'>
                 </el-tab-pane>
              </el-tabs>
            </el-form-item>
            <el-form-item>
              <div class="table-box table-frist">
                <scrollLoad 
                  :listHeight='listHeight'
                  :butlerList ="butlerList"
                  :chooseIndex='chooseIndex'
                  @getManagerId='nowManagerId'
                  :getBulter ='getisDeleteList'
                ></scrollLoad>
              </div>
            </el-form-item>
            <el-form-item>
               <div class="table-box">
                 <div class="box-data">
                   <el-date-picker
                    @change="getworkTrailRecord"
                    style='width:100%'
                    v-model="searchFrom.date"
                    type="date"
                    size="small"
                    placeholder="选择日期">
                  </el-date-picker>
                 </div>
                 <div class="choose-active" :style="listHeight">
                   <div class="tabItem"
                    :key='index'
                    v-if="searchList.length>0"
                    @click='chooseManagerId(searchListItem,index)'
                    :class="{'active':chooseCountIndex === index}"
                    v-for='(searchListItem,index) in searchList'>
                      <el-row class="top" >
                        <el-col :span="6" >
                           <span class="mobile">轨迹{{index+1}}</span>
                        </el-col>
                        <el-col :span="18">
                          <span class="mobile">{{searchListItem.start}}-{{searchListItem.end}}</span>
                        </el-col>
                      </el-row>
                   </div>
                   <div 
                     v-else
                     class="tab-Item">
                     暂无数据～～
                   </div>
                  </div>
               </div>
            </el-form-item>
          </el-form>
      </el-aside >
      <el-main class="pageMain">
        <div id="map" :style="mapHeight">
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
      </el-main>
     </el-container>
  </div>
</template>
<script>
import { queryDepartmentByLogin } from '@/api/organization'
import {
  workTrailRecordApi,
  getButlerAndKeywordApi } from '@/api/achievementCenter'
import GridUnit from '@/components/GridUnit/grid'
import ScrollLoad from './scrollLoad'
import { parseTime } from '@/utils'
// import AMap from 'AMap'
// const AMap = window.AMap
import { fmtDate } from '@/utils'
import axios from 'axios'
let map
let marker
export default {
  computed: {
    listHeight() {
      return {
        height: (this.tableHeight - 100) / 2 + 'px'
      }
    },
    mapHeight() {
      return {
        height: this.tableHeight + 110 + 'px'
      }
    }
  },
  components: {
    GridUnit,
    ScrollLoad
  },
  data() {
    return {
      lineList: [],
      lineValue: 0,
      loading: true,
      butlerList: [], // 管家列表
      tableHeight: 300,
      pageNumber: 0,
      chooseIndex: 0,
      chooseCountIndex: 0,
      nowDate: '',
      searchFrom: {
        depId: '',
        isDelete: 'null',
        keyword: '',
        date: '',
        managerId: ''
      },
      IncumbencyList: [
        {
          value: 'null',
          label: '全部'
        }, {
          value: '0',
          label: '在职'
        }, {
          value: '1',
          label: '离职'
        }
      ],
      searchList: [],
      treeData: [],
      defaultProps: {
        children: 'child',
        label: 'depName'
      }
    }
  },
  mounted() {
    this.getTree()
    this.init()
  },
  created() {
    let temp_height = document.body.clientHeight - 320
    this.tableHeight = temp_height > 300 ? temp_height : 300
    window.onresize = () => {
      return (() => {
        temp_height = document.body.clientHeight - 320
        this.tableHeight = temp_height > 300 ? temp_height : 300
      })()
    }
    const date = new Date()
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    this.nowDate = `${date.getFullYear()}-${month}-${strDate} 
            ${date.getHours()}:${date.getMinutes()}:
            ${date.getSeconds()}`
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
    handleClick() { // 在职情况
      this.butlerList = []
      this.pageNumber = 0
      this.searchFrom.managerId = ''
      this.getisDeleteList()
    },
    init: function() {
      /* global AMap */
      let lat = []
      if (this.lineList.length > 0) {
        lat = this.lineList[0].location.split(',')
        map = new AMap.Map('map', {
          resizeEnable: true,
          zoom: 12,
          center: [lat[0], lat[1]]
        })
      } else {
        map = new AMap.Map('map', {
          resizeEnable: true,
          zoom: 12
        })
      }

      if (this.lineList.length > 0) {
        marker = new AMap.Marker({
          map: map,
          icon: 'https://webapi.amap.com/images/car.png',
          offset: new AMap.Pixel(-26, -13),
          position: [lat[0], lat[1]],
          autoRotation: true
        })
      }
      const self = this
      map.plugin(['AMap.ToolBar', 'AMap.MapType'], function() {
        const toolopt = {
          offset: new AMap.Pixel(70, 10), // 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为AMap.Pixel(10,10)
          position: 'RT',
          ruler: true, // 标尺键盘是否可见，默认为true
          noIpLocate: false, // 定位失败后，是否开启IP定位，默认为false
          locate: true, // 是否显示定位按钮，默认为false
          liteStyle: false, // 是否使用精简模式，默认为false
          direction: true, // 方向键盘是否可见，默认为true
          autoPosition: !(self.lineList.length > 0), // 是否自动定位，即地图初始化加载完成后，是否自动定位的用户所在地，在支持HTML5的浏览器中有效，默认为false
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
        strokeWeight: 3, // 线宽
        strokeStyle: 'solid' // 线样式
      })
      const passedPolyline = new AMap.Polyline({
        map: map,
        path: this.lineArr,
        strokeColor: '#000', // 线颜色
        strokeOpacity: 1, // 线透明度
        strokeWeight: 3, // 线宽
        strokeStyle: 'solid' // 线样式
      })
      marker.on('moving', function(e) {
        passedPolyline.setPath(e.passedPath)
      })
      map.setFitView()
    },
    getLineArr() {
      const params = {
        starttime: this.searchList[this.chooseCountIndex].startTime,
        endtime: this.searchList[this.chooseCountIndex].endTime,
        page: 1,
        gap: 1000,
        pagesize: 800,
        tid: this.searchList[this.chooseCountIndex].gdTid,
        sid: 11117,
        trid: this.searchList[this.chooseCountIndex].trid }
      const self = this
      axios.get(`https://tsapi.amap.com/v1/track/terminal/trsearch?key=${process.env.AMAP_KEY}`, { params }).then(res => {
        if (res.data.errcode === 10000) {
          self.lineList = res.data.data.tracks[0].points
        } else {
          this.$message({
            message: res.data.errdetail
          })
        }
        self.init()
        self.drawLine()
      })
    },
    formatTooltip(val) { // 滑块显示信息
      if (this.lineList.length > 0) {
        return fmtDate(this.lineList[val].locatetime)
      }
    },
    chooseManagerId(item, index) {
      this.chooseCountIndex = index
      this.lineValue = 0
      this.getLineArr()
    },
    getworkTrailRecord() {
      if (this.searchFrom.managerId !== '') {
        this.searchFrom.date = parseTime(this.searchFrom.date)
        workTrailRecordApi(this.searchFrom).then(res => {
          if (res.data.length > 0) {
            this.searchList = res.data
            this.lineValue = 0
            this.getLineArr()
          }
        })
      } else {
        this.$message({
          message: '请选择要查看管家',
          type: 'warning'
        })
      }
    },
    nowManagerId(item, index) {
      this.searchFrom.date = this.nowDate
      this.searchList = []
      this.chooseIndex = index
      this.searchFrom.managerId = item.id
      this.getworkTrailRecord()
    },
    searchIsDeleteList() {
      this.butlerList = []
      this.pageNumber = 0
      this.getisDeleteList()
    },
    getisDeleteList() { // 获取管家列表
      const parms = {
        depId: this.searchFrom.depId,
        keyword: this.searchFrom.keyword,
        isDelete: this.searchFrom.isDelete,
        pageSize: 20,
        pageNo: ++this.pageNumber
      }
      this.chooseIndex = ''
      getButlerAndKeywordApi(parms).then(res => {
        if (res.data.result) {
          this.butlerList = this.butlerList.concat(res.data.result)
        }
      })
    },
    overlayNodeClick(node, data) { // 弹框tree点击
      this.searchFrom.depName = data.data.depName
      this.searchFrom.depId = data.data.id
      this.pageNumber = 0
      this.getisDeleteList()
      this.butlerList = []
    },
    getTree(id, name) {
      queryDepartmentByLogin().then(res => {
        if (res.data && res.data instanceof Array) {
          this.treeData = res.data
          this.searchFrom.depId = id || this.treeData[0].id
          this.searchFrom.depName = this.treeData[0].depName
          this.$nextTick(() => {
            this.getisDeleteList()
          })
        }
      }).catch(rej => {})
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
    right: 60px;
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
#map{
  height:540px;
  padding: 0;
  width: 100%;
  box-shadow: 2px 4px 4px #9a9a9a;
  background: #FFFFFF;
}
   .tabItem{
     background: #a2a2a2;
      margin-bottom: 15px;
      color: #fff;
      .top{
        padding: 0 10px;
      }
   }
   .active{
    background: #1e97fa;
  }
  .table-box{
    border: 1px solid #cccfd2;
    border-radius: 4px;
    padding:4px 10px;
  }
  .choose-active{
    overflow: auto;
  }
  .table-box:first-child{
    padding-bottom: 6px;
  }
  .table-frist{
    margin-bottom: 10px;
  }
  .box-data{
    padding-bottom: 6px;
  }
  .text-left{
    text-align: right;
  }
  .pad-ri{
    padding-right: 10px;
  }
  .container{
    padding:20px;
    .alertbox{
      background-color: #f0f9eb;
      color: #67c23a;
      padding: 8px 16px;
      margin-right: 16px;
      box-sizing: border-box;
      border-radius: 4px;
      font-size:13px;
    }
    .tab-Item{
      background: #a2a2a2;
      margin-bottom: 15px;
      color: #fff;
      .top{
        padding: 0 10px;
      }
    }
    .filter-item {
     margin-left: 10px;
    }
    .el-form-item{
      margin-bottom: 0px;
    }
    .pageMain{
      padding:0 10px;
      .centerBanner{
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-bottom: 4px;
        padding:10px;
      }
      .topBanner {
        margin-top:4px;
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-bottom: 6px;
        padding: 20px;
        .blue {
          color: #409eff;
          font-weight: 700;
          line-height: 28px;
        }
      }
    }
  }
  .leftSidebar{
    width:160px;
    height: 100%;
  }
</style>
