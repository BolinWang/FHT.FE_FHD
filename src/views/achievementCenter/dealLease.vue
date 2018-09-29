/*
 * @Author: ghost 
 * @Date: 2018-09-30 02:26:00 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-09-30 02:26:20
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
              <el-input size="small" v-model="searchFrom.nameOrMobile" placeholder="业务员姓名/手机号码"  @keydown.native.enter="searchParam">
              </el-input>
            </el-form-item>
            <el-form-item>
               <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane :label="IncumbencyListItem.label" :name="IncumbencyListItem.value"
                 :key='index'
                 v-for='(IncumbencyListItem,index) in IncumbencyList'>
                   <div class="tab-Item">
                    <el-row class="top">
                      <el-col :span="5">
                        <span class="name">李三</span>
                      </el-col>
                      <el-col :span="9">
                        <span class="mobile">13598888888</span>
                      </el-col>
                      <el-col :span="5">
                        <span class="name">在职</span>
                      </el-col>
                      <el-col :span="5">
                        <span class="mobile">正式</span>
                      </el-col>
                    </el-row>
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
              v-model="searchFrom"
              range-separator="至"
              :default-time="['00:00:00']"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
            <el-input size="small" style="width:240px;"   placeholder='房间名称'  @keydown.native.enter="searchParam">
            </el-input>
            <el-button type="danger" class="right filter-item" size="mini" @click="delOrg" >清空</el-button>
            <el-button type="primary" class="right filter-item" size="mini" @click="editOrg" icon="el-icon-search">查询</el-button>
          </el-col>
        </el-row>
         <div class="tab-box">
           <GridUnit></GridUnit>
         </div>
      </el-main>
     </el-container>
  </div>
</template>
<script>
import { queryDepartmentByLogin } from '@/api/organization'
import GridUnit from '@/components/GridUnit/grid'
export default {
  computed: {
    treeHeight() {
      return {
        height: this.tableHeight + 104 + 'px'
      }
    }
  },
  components: {
    GridUnit
  },
  data() {
    return {
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
      tableHeight: 300,
      searchFrom: {
        depName: ''
      },
      organType: [
        {

        }
      ],
      treeData: [],
      defaultProps: {
        children: 'child',
        label: 'depName'
      }
    }
  },
  mounted() {
    this.getTree()
  },
  created() {
    let temp_height = document.body.clientHeight - 230
    this.tableHeight = temp_height > 300 ? temp_height : 300
    window.onresize = () => {
      return (() => {
        temp_height = document.body.clientHeight - 230
        this.tableHeight = temp_height > 300 ? temp_height : 300
      })()
    }
  },
  methods: {
    overlayNodeClick(node, data) { // 弹框tree点击
      this.searchFrom.depName = data.data.depName
      this.searchFrom.depId = data.data.id
    },

    getTree(id, fn) {
      queryDepartmentByLogin().then(res => {
        if (res.data && res.data instanceof Array) {
          this.treeData = res.data
          const nowId = id || this.treeData[0].id
          this.getFirstNode(nowId)
          if (fn) {
            this.$nextTick(() => {
              fn()
            })
          }
        }
      }).catch(rej => {})
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    padding:20px;
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
      .topBanner {
        margin-top:4px;
        border: 1px solid #ccc;
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
