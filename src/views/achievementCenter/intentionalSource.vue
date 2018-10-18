/*
 * @Author: ghost 
 * @Date: 2018-09-24 14:20:34 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-18 14:05:18
 */

<template>
  <div class="container">
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
                  @node-click="overlayNodeClick">
                </el-tree>
                <el-option style="display:none" value=""></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input size="small" v-model="keyword" placeholder="业务员姓名/手机号码"  @input="searchIsDeleteList">
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
        <el-row class="topBanner">
          <el-col :span="24">
            <el-date-picker
              type="datetimerange"
              size="small"
              v-model="searchTime"
              range-separator="至"
              :default-time="['00:00:00']"
              @change="searchParam"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
            <el-input size="small" style="width:240px;" v-model="searchFrom.customerId"   placeholder='客源号'  @keydown.native.enter="searchParam">
            </el-input>
            <el-button type="danger" class="right filter-item" size="mini" @click="delOrg" >清空</el-button>
            <el-button type="primary" class="right filter-item" size="mini" @click="searchParam" icon="el-icon-search">查询</el-button>
          </el-col>
        </el-row>
        <el-row class="centerBanner">
          <el-col :span="6">
             <div class="alertbox">
               客源数：{{countList.customerCount}}
             </div>
          </el-col>
          <el-col :span="6">
            <div class="alertbox">
               配房次数：{{countList.sumAllocationCount}}
             </div>
          </el-col>
          <el-col :span="6">
            <div class="alertbox">
               带看次数：{{countList.sumLookCount}}
             </div>
          </el-col>
          <el-col :span="6">
            <div class="alertbox">
               成交数：{{countList.successCount}}
             </div>
          </el-col>
        </el-row>
         <div class="tab-box">
          <GridUnit
            ref="refGridUnit"
            :columns="colModels"
            :url="url"
            listField="data.result.0.customerSourceDTOs"
            :autoLoad="false"
            @selcetDate="getCount"
            :dataMethod="method"
            :formOptions="searchFrom"
            :height="tableHeight">
            <template slot="sourceName" slot-scope="scope">
              <div class="box">
                {{scope.row.sourceName}} - {{scope.row.sourceTypeName}}
              </div>
            </template>
            <template slot="leaseType" slot-scope="scope">
              <div class="box">
                <el-button type="danger" size="mini" v-if="scope.row.status==1">{{scope.row.status|leaseStatus}}</el-button>
                <el-button type="success" size="mini" v-else>{{scope.row.status | leaseStatus}}</el-button>
              </div>
            </template>
            <template slot="goDetail" slot-scope="scope">
              <el-button type="text" class="mar-right" @click="getOrderDetail(scope.row.id)">客源详情</el-button>
              |
              <el-button type="text" :disabled="scope.row.lookCount===0" @click="goLookAmap(scope.row.id)">带看轨迹</el-button>
            </template>
          </GridUnit>
         </div>
      </el-main>
     </el-container>
     <SourceDetail ref='sourceDetail'></SourceDetail>
     <IntenSourceAmap ref="intenSourceAmap"></IntenSourceAmap>
  </div>
</template>
<script>
import { queryDepartmentByLogin } from '@/api/organization'
import {
  getButlerAndKeywordApi
} from '@/api/achievementCenter'
import GridUnit from '@/components/GridUnit/grid'
import SourceDetail from './compents/sourceDetail'
import ScrollLoad from './compents/scrollLoad'
import IntenSourceAmap from './compents/intenSourceAmap'
import {
  delObjectItem,
  parseTime } from '@/utils'
export default {
  computed: {
    listHeight() {
      return {
        height: this.tableHeight + 30 + 'px'
      }
    }
  },
  components: {
    GridUnit,
    ScrollLoad,
    SourceDetail,
    IntenSourceAmap
  },
  filters: {
    leaseStatus(val) {
      const valueMap = [
        {
          value: 1,
          label: '未签约'
        }, {
          value: 2,
          label: '已签约'
        }
      ]
      return valueMap.filter(item => {
        return item.value === val
      })[0].label
    }
  },
  data() {
    return {
      loading: true,
      dialogFormVisible: false,
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
      orderDetail: {},
      countList: {},
      butlerList: [], // 管家列表
      tableHeight: 300,
      searchTime: [],
      pageNumber: 0,
      chooseIndex: '',
      keyword: '',
      searchFrom: {
        depId: '',
        isDelete: 'null',
        customerId: '',
        startTime: '',
        endTime: '',
        managerId: ''
      },
      colModels: [
        { prop: 'id', label: '客源号', width: 60 },
        { prop: 'createTime', label: '创建时间' },
        { prop: 'createName', label: '创建人' },
        { prop: 'name', label: '租客姓名' },
        { label: '客源渠道', slotName: 'sourceName', width: 150 },
        { prop: 'allocationCount', label: '配房次数', width: 80 },
        { prop: 'lookCount', label: '带看次数' },
        { prop: 'status', label: '状态', slotName: 'leaseType', width: 100 },
        { label: '操作', slotName: 'goDetail', width: 180 }
      ],
      url: '/customer/backCustomerList',
      method: 'method',
      treeData: [],
      defaultProps: {
        children: 'child',
        label: 'depName'
      }
    }
  },
  mounted() {
    this.getTree()
    if (this.$route.query.customerId) {
      this.getOrderDetail(this.$route.query.customerId)
    }
  },
  created() {
    let temp_height = document.body.clientHeight - 290
    this.tableHeight = temp_height > 300 ? temp_height : 300
    window.onresize = () => {
      return (() => {
        temp_height = document.body.clientHeight - 290
        this.tableHeight = temp_height > 300 ? temp_height : 300
      })()
    }
    const date_ = new Date()
    const year = date_.getFullYear()
    const month = date_.getMonth() + 1
    const day = new Date(year, month, 0)
    this.searchTime = [`${year}-${month}-01 00:00:00`, `${year}-${month}-${day.getDate()} 00:00:00`]
  },
  watch: {
    searchTime(val) {
      val = val || []
      this.searchFrom.startTime = val[0] ? parseTime(val[0]) : ''
      this.searchFrom.endTime = val[1] ? parseTime(val[1]) : ''
    }
  },
  methods: {
    goLookAmap(item) {
      this.$refs.intenSourceAmap.getAmapLinerShow(item)
    },
    lookcontract(url) {
      window.location.href = url
    },
    searchParam() {
      this.$refs.refGridUnit.searchHandler()
    },
    nowManagerId(item, index) {
      this.searchFrom.managerId = item.id
      this.chooseIndex = index
      this.searchParam()
    },
    overlayNodeClick(node, data) { // 弹框tree点击
      this.$nextTick(() => {
        this.searchFrom.depName = data.data.depName
        this.searchFrom.depId = data.data.id
        this.pageNumber = 0
        this.searchParam()
        this.getisDeleteList()
        this.butlerList = []
      })
    },
    searchIsDeleteList() {
      this.butlerList = []
      this.pageNumber = 0
      if (this.searchFrom.keyword === '') {
        this.searchFrom.managerId = ''
      }
      this.getisDeleteList()
    },
    getOrderDetail(id) {
      this.$refs.sourceDetail.getOrderDetil(id)
    },
    searchbulter() {
      this.pageNumber = 0
      this.getisDeleteList()
    },
    getisDeleteList() { // 获取管家列表
      const parms = {
        depId: this.searchFrom.depId,
        keyword: this.keyword,
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
    getCount(list) {
      this.countList = list.data.result[0]
    },
    delOrg() {
      delObjectItem(this.searchFrom)
    },
    handleClick() { // 在职情况
      this.butlerList = []
      this.pageNumber = 0
      this.searchFrom.managerId = ''
      this.getisDeleteList()
      this.searchParam()
    },
    getTree(id, name) {
      queryDepartmentByLogin().then(res => {
        if (res.data && res.data instanceof Array) {
          this.treeData = res.data
          this.searchFrom.depId = id || this.treeData[0].id
          this.searchFrom.depName = this.treeData[0].depName
          this.$nextTick(() => {
            this.getisDeleteList()
            this.searchParam()
          })
        }
      }).catch(rej => {})
    }
  }
}
</script>
<style lang="scss" scoped>
  .mar-right{
    margin-right: 10px;
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
