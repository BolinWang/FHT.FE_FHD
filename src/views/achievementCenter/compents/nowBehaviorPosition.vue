/*
 * @Author: ghost 
 * @Date: 2018-10-09 23:40:24 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-18 09:42:06
 */
<template>
  <div class="container" v-loading="loading">
     <el-container>
      <el-aside  class="leftSidebar" width="260px">
          <el-form  >
            <el-form-item>
              <el-select size="small" style='width:100%' v-model="searchFrom.depName">
                <el-tree
                  ref="overlayTree"
                  :data="treeData"
                  :props="defaultProps"
                  node-key="id"
                  :highlight-current="true"
                  :expand-on-click-node="false"
                  @getManagerId='nowManagerId'
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
              <div class="table-box">
                <scrollLoad 
                  :listHeight='listHeight'
                  :butlerList ="butlerList"
                  :chooseIndex='chooseIndex'
                  @getManagerId='nowManagerId'
                  :getBulter ='getisDeleteList'
                  ></scrollLoad>
              </div>
            </el-form-item>
          </el-form>
      </el-aside >
      <el-main class="pageMain">
        <div id="map" :style="mapHeight">
          
        </div>
      </el-main>
     </el-container>
  </div>
</template>
<script>
let map
import { queryDepartmentByLogin } from '@/api/organization'
import { managerRTPApi } from '@/api/achievementCenter'
import AMap from 'AMap'
import ScrollLoad from './scrollLoad'
export default {
  components: {
    ScrollLoad
  },
  computed: {
    listHeight() {
      return {
        height: this.tableHeight - 49 + 'px'
      }
    },
    mapHeight() {
      return {
        height: this.tableHeight + 28 + 'px'
      }
    }
  },
  data() {
    return {
      butlerList: [], // 管家列表
      pageNumber: 0,
      chooseIndex: '',
      treeData: [],
      loading: true,
      defaultProps: {
        children: 'child',
        label: 'depName'
      },
      IncumbencyList: [
        {
          value: null,
          label: '全部'
        }, {
          value: 0,
          label: '在职'
        }, {
          value: 1,
          label: '离职'
        }
      ],
      searchFrom: {
        depId: '',
        isDelete: '',
        keyword: '',
        startTime: '',
        endTime: '',
        roomName: '',
        managerId: ''
      }
    }
  },
  mounted() {
    this.getTree()
  },
  created() {
    let temp_height = document.body.clientHeight - 250
    this.tableHeight = temp_height > 300 ? temp_height : 300
    window.onresize = () => {
      return (() => {
        temp_height = document.body.clientHeight - 250
        this.tableHeight = temp_height > 300 ? temp_height : 300
      })()
    }
  },
  methods: {
    nowManagerId(item) {
      this.searchFrom.managerId = item.id
      this.chooseIndex = ''
      console.log(item)
      if (item.data.location !== '') {
        map.setZoomAndCenter(20, item.data.location.split(','))
      }
    },
    addClickHandler(item, markerDia) { // 聚合点点击事件
      // markerDia.on('mouseover', function(e) {
      //   // marker.setPosition(e.data.lnglat)
      //   // marker.setLabel({ content: e.data.name })

      // })
    },
    init: function() {
      map = new AMap.Map('map', {
        resizeEnable: true,
        zoom: 12
      })

      this.butlerList.map(item => {
        if (item.data.location !== '') {
          const markerDia = new AMap.Marker({ // 添加聚合点
            map: map,
            icon: new AMap.Icon({
              image: item.status === true ? '//webapi.amap.com/theme/v1.2/m3.png' : '//webapi.amap.com/theme/v1.2/m1.png',
              imageSize: new AMap.Size(24, 24)
            }),
            offset: new AMap.Pixel(-26, -13),
            position: item.data.location.split(',')
          })
          markerDia.setLabel({
            // 修改label相对于maker的位置
            offset: new AMap.Pixel(20, 20),
            content: `<div class="content-amap">
                       <div class='info'>${item.name}</div>
                       <div class='info'>工作状态：${item.status === true ? '工作中' : '休息'}</div>
                       <div class='info'>时间：${item.data.locatetime}</div>
                      </div>`
          })
          this.addClickHandler(item, markerDia)
        }
      })

      map.plugin(['AMap.ToolBar', 'AMap.MapType'], function() {
        const toolopt = {
          offset: new AMap.Pixel(100, 10), // 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为AMap.Pixel(10,10)
          position: 'RT',
          ruler: true, // 标尺键盘是否可见，默认为true
          noIpLocate: true, // 定位失败后，是否开启IP定位，默认为false
          locate: true, // 是否显示定位按钮，默认为false
          liteStyle: false, // 是否使用精简模式，默认为false
          direction: true, // 方向键盘是否可见，默认为true
          autoPosition: true, // 是否自动定位，即地图初始化加载完成后，是否自动定位的用户所在地，在支持HTML5的浏览器中有效，默认为false
          locationMarker: AMap.Marker({ map: map }),
          useNative: false
        }
        map.addControl(new AMap.ToolBar(toolopt))
        map.addControl(new AMap.MapType({ showTraffic: false, showRoad: false }))
      })
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
    },
    overlayNodeClick(node, data) { // 弹框tree点击
      this.searchFrom.depName = data.data.depName
      this.searchFrom.depId = data.data.id
      this.pageNumber = 0
      this.getisDeleteList()
      this.butlerList = []
    },
    searchbulter() {
      this.pageNumber = 0
      this.getisDeleteList()
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
        pageSize: 20,
        pageNo: ++this.pageNumber
      }
      this.chooseIndex = ''
      managerRTPApi(parms).then(res => {
        if (res.data.result) {
          this.butlerList = this.butlerList.concat(res.data.result)
          this.init()
          this.$nextTick(res => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .pageMain{
    margin:-20px 0;
  }
  #map{
    padding: 0;
    width: 100%;
    background: #FFFFFF;
  }
  .el-form-item{
    margin-bottom: 0px;
  }
  .table-box{
    padding-top:10px;
  }
  .content-amap{
    background: #123;
  }
</style>

