/*
 * @Author: ghost 
 * @Date: 2018-09-30 02:26:00 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-15 16:33:26
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
              <el-input size="small" v-model="searchFrom.keyword" placeholder="业务员姓名/手机号码"  @keydown.native.enter="searchIsDeleteList">
              </el-input>
            </el-form-item>
            <el-form-item>
               <el-tabs v-model="searchFrom.isDelete" @tab-click="handleClick">
                <el-tab-pane :label="IncumbencyListItem.label" 
                 :key='index'
                 :name="IncumbencyListItem.value"
                 v-for='(IncumbencyListItem,index) in IncumbencyList'>
                  <div class="table-box">
                    <scrollLoad 
                      :listHeight='listHeight'
                      :butlerList ="butlerList"
                      @getManagerId='nowManagerId'
                      :getBulter ='getisDeleteList'
                    ></scrollLoad>
                  </div>
                 </el-tab-pane>
              </el-tabs>
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
            <el-input size="small" style="width:240px;" v-model="searchFrom.roomName"   placeholder='房间名称'  @keydown.native.enter="searchParam">
            </el-input>
            <el-button type="danger" class="right filter-item" size="mini" @click="delOrg" >清空</el-button>
            <el-button type="primary" class="right filter-item" size="mini" @click="searchParam" icon="el-icon-search">查询</el-button>
          </el-col>
        </el-row>
        <el-row class="centerBanner">
          <el-col :span="6">
             <div class="alertbox">
               成交单数：{{countList.count}}
             </div>
          </el-col>
          <el-col :span="6">
            <div class="alertbox">
               月租金流水：{{countList.monthRentFee}}
             </div>
          </el-col>
        </el-row>
         <div class="tab-box">
          <GridUnit
            ref="refGridUnit"
            :columns="colModels"
            :url="url"
            listField="data.result.0.flyOrderInfoDTOs"
            :autoLoad="false"
            @selcetDate="getCount"
            :dataMethod="method"
            :formOptions="searchFrom"
            :height="tableHeight">
            <template slot="leaseType" slot-scope="scope">
              <div class="box">
                <el-button type="warning" size="small" v-if="scope.row.status==5">{{scope.row.status|leaseStatus}}</el-button>
                <el-button type="success" size="small" v-else>{{scope.row.status | leaseStatus}}</el-button>
              </div>
            </template>
            <template slot="goDetail" slot-scope="scope">
              <el-button type="text" @click="getOrderDetail(scope.row.orderNo)">查看详情</el-button>
            </template>
          </GridUnit>
         </div>
      </el-main>
     </el-container>
     <!-- 弹窗查看详情 -->
     <el-dialog title="收货地址" width="600px" :visible.sync="dialogFormVisible" >
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="text-left">订单</div>
        </el-col>
        <el-col :span="19">
          <span class="pad-ri">{{orderDetail.orderNo}}</span>
           <el-button size="mini" type="primary" v-show='orderDetail.status === 3'>生效</el-button>
           <el-button size="mini" type="danger" v-show='orderDetail.status === 99'>搬离</el-button>
           <el-button size="mini" type="primary" @click="goSourceDetail(orderDetail.customerId)" v-show='orderDetail.customerId'>查看关联客源</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">出单时间</div>
        </el-col>
        <el-col :span="19">{{orderDetail.createTime}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">出单人</div>
        </el-col>
        <el-col :span="19">{{orderDetail.gmtCreateName}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">房间</div>
        </el-col>
        <el-col :span="19">{{orderDetail.roomName}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">房东</div>
        </el-col>
        <el-col :span="19">{{orderDetail.orgAdminName}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
            <div class="text-left">签约人</div>
        </el-col>
        <el-col :span="19">{{orderDetail.contactName}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">交租方式</div>
        </el-col>
        <el-col :span="19">{{orderDetail.rentTypeName}}</el-col>
      </el-row>
      <el-row  :gutter="20">
        <el-col :span="5">
           <div class="text-left">租期</div>
        </el-col>
        <el-col :span="19">{{orderDetail.monthNum}}</el-col>
      </el-row>
      <el-row  :gutter="20">
        <el-col :span="5">
           <div class="text-left">租约起止日</div>
        </el-col>
        <el-col :span="19">{{orderDetail.startTime}}～{{orderDetail.endTime}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">房价</div>
        </el-col>
        <el-col :span="19">{{orderDetail.rentFee}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">押金</div>
        </el-col>
        <el-col :span="19">{{orderDetail.depositFee}}</el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">每期固定费用</div>
        </el-col>
        <el-col :span="19">{{orderDetail.serviceChargePrice}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">一次性费用</div>
        </el-col>
        <el-col :span="19">{{orderDetail.onceFee}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">出房费率</div>
        </el-col>
        <el-col :span="19">{{orderDetail.splitFee}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
           <div class="text-left">出房收入</div>
        </el-col>
        <el-col :span="19">{{orderDetail.splitMoney}}</el-col>
      </el-row>
      <el-row :gutter="20" >
        <el-col :span="5">
           <div class="text-left">租房合同</div>
        </el-col>
        <el-col :span="19">
          <el-button size="mini" @click="lookcontract(orderDetail.contractUrl)"   v-if='orderDetail.uploadFlag===1'>查看合同</el-button>
          <el-button size="mini"  type="primary" plain v-else>未上传</el-button>

        </el-col>
      </el-row>
      <el-row :gutter="20" v-show='orderDetail.status === 99'>
        <el-col :span="5">
           <div class="text-left">退房时间</div>
        </el-col>
        <el-col :span="19">{{orderDetail.outDate}}</el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
      </div>
     </el-dialog>
  </div>
</template>
<script>
import { queryDepartmentByLogin } from '@/api/organization'
import {
  getButlerAndKeywordApi,
  getbackOrderInfoApi } from '@/api/achievementCenter'
import GridUnit from '@/components/GridUnit/grid'
import ScrollLoad from './compents/scrollLoad'
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
    ScrollLoad
  },
  filters: {
    leaseStatus(val) {
      const valueMap = [
        {
          value: 0,
          label: '未付款'
        }, {
          value: 1,
          label: '成功'
        }, {
          value: 2,
          label: '失败'
        }, {
          value: 3,
          label: '已取消'
        }, {
          value: 4,
          label: '关闭'
        }, {
          value: 5,
          label: '搬离'
        }
      ]
      return valueMap[val].label
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
      searchFrom: {
        depId: '',
        isDelete: 'null',
        keyword: '',
        startTime: '',
        endTime: '',
        roomName: '',
        managerId: ''
      },
      colModels: [
        { prop: 'createTime', label: '出单时间' },
        { prop: 'orderNo', label: '订单号' },
        { prop: 'roomName', label: '房间名称', width: 200 },
        { prop: 'status', label: '租约状态', slotName: 'leaseType', width: 100 },
        { prop: 'rentFee', label: '月租金流水' },
        { prop: 'splitMoney', label: '出房收入' },
        { prop: 'gmtCreateName', label: '出单人' },
        { prop: 'adminName', label: '目前管理' },
        { label: '其他', slotName: 'goDetail' }
      ],
      url: '/order/backOrderList',
      method: 'method',
      treeData: [],
      defaultProps: {
        children: 'child',
        label: 'depName'
      }
    }
  },
  mounted() {
    if (this.$route.query.orderNo) {
      this.getOrderDetail(this.$route.query.orderNo)
    }
    this.getTree()
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
  },
  watch: {
    searchTime(val) {
      val = val || []
      this.searchFrom.startTime = val[0] ? parseTime(val[0]) : ''
      this.searchFrom.endTime = val[1] ? parseTime(val[1]) : ''
    }
  },
  methods: {
    goSourceDetail(id) {
      this.$router.push({ path: '/achievementCenter/intentionalSource', query: { customerId: id }})
    },
    lookcontract(url) {
      window.location.href = url
    },
    searchParam() {
      this.$refs.refGridUnit.searchHandler()
    },
    nowManagerId(item) {
      this.searchFrom.managerId = item.id
      this.searchParam()
    },
    handleNodeClick(node, data) { // 点击tree节点函数
      this.$nextTick(() => {
        this.searchParam()
      })
    },
    searchIsDeleteList() {
      this.butlerList = []
      this.pageNumber = 0
      this.getisDeleteList()
    },
    getOrderDetail(id) {
      const params = {
        orderNo: id
      }
      this.dialogFormVisible = true
      getbackOrderInfoApi(params).then(res => {
        this.orderDetail = res.data
      })
    },
    searchbulter() {
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
    overlayNodeClick(node, data) { // 弹框tree点击
      this.searchFrom.depName = data.data.depName
      this.searchFrom.depId = data.data.id
      this.pageNumber = 0
      this.getisDeleteList()
      this.butlerList = []
    },
    handleClick() { // 在职情况
      this.butlerList = []
      this.pageNumber = 0
      this.getisDeleteList()
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
