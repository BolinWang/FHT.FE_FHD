/*
 * @Author: ghost
 * @Date: 2018-09-04 20:08:01
 * @Last Modified by: 
 * @Last Modified time: 2018-09-13 20:55:05
 */

<template>
   <div class="container">
     <el-tabs type="border-card" v-model="type" @tab-click="chooseTab" >
      <el-tab-pane :label="item.value"  :name="item.key"  v-for="(item, index) in recordType" :key="index">
        <div class="search-box">
          <el-input
            v-if="item.key==1"
            style="width:300px;"
            size="small"
            placeholder="离职人员姓名／手机号码／身份证号"
            v-model="keyword"
            clearable>
          </el-input>
          <el-input
            v-else
            style="width:300px;"
            size="small"
            placeholder="复职人员姓名／身份证号"
            v-model="keyword"
            clearable>
          </el-input>
          <el-button type="primary" size="small" icon="el-icon-search" @click.native="searchParam" class="filter-item">查询</el-button>
          <el-button plain size = "small" icon="el-icon-remove-outline" @click.native="clearForm">清空</el-button>
        </div>
        <leave-Office :staffDataList = "staffList" :columns = 'colModels'></leave-Office>
      </el-tab-pane>
    </el-tabs>
    <div class="model-pagination">
      <el-pagination background   @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageItems.pageNo" :page-sizes="pageSizeList" :page-size="pageItems.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
   </div>
</template>
<script>
import leaveOffice from './commpents/leaveOffice'
import { queryModifyRecord } from '@/api/organization'
const typedata = [
  {prop: 'name', label: '姓名'},
  {prop: 'depName', label: '部门'},
  {prop: 'createName', label: '权限角色'},
  {prop: 'mobile', label: '手机号码'},
  {prop: 'idNo', label: '身份证号'},
  {prop: 'gmtLeave', label: '离职时间'},
  {prop: 'createName', label: '操作人'},
  {prop: 'gmtCreate', label: '操作时间'},
  {prop: 'transferName', label: '业务交接人'}
]
const typedata2 = [
  {prop: 'name', label: '姓名'},
  {prop: 'idNo', label: '身份证号'},
  {prop: 'gmtBack', label: '复职时间'},
  {prop: 'createName', label: '操作人'},
  {prop: 'gmtCreate', label: '操作时间'}
]
export default {
  components: {
    leaveOffice
  },
  data() {
    return {
      total: null,
      pageItems: { // pageSize对象
        pageNo: 1,
        pageSize: 20
      },
      pageSizeList: [10, 20, 30, 50],
      staffList: [],
      recordType: [
        {
          key: '1',
          value: '离职记录'
        }, {
          key: '0',
          value: '复职记录'
        }
      ],
      colModels: typedata,
      keyword: null,
      type: '1'
    }
  },
  mounted() {
    this.searchParam()
  },
  methods: {
    clearForm() {
      this.keyword = ''
    },
    handleSizeChange(val) {
      this.pageItems.pageSize = val
      this.searchParam()
    },
    handleCurrentChange(val) {
      this.pageItems.pageNo = val
      this.searchParam()
    },
    searchParam() {
      let params = {
        keyword: this.keyword,
        type: parseInt(this.type)
      }
      params = Object.assign(params, this.pageItems)
      queryModifyRecord(params).then(res => {
        console.log(res)
        this.staffList = res.data.result
        this.total = res.data.total
      })
    },
    chooseTab(targetName) {
      this.staffList = []
      this.total = null
      this.type = targetName.name
      console.log(targetName.name)
      targetName.name === '1' ? this.colModels = typedata : this.colModels = typedata2
      console.log(this.colModels)
      this.searchParam()
    }
  }
}
</script>
<style scoped>
  .container{
    padding:20px;
  }
  .model-pagination{
    padding: 10px 0;
    text-align: right;
  }
</style>

