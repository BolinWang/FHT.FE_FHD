<template>
  <div class="container">
    <div class="btn-box clearfix">
         <el-button size="small" @click="handClick" class="add" type="primary">新增</el-button>
    </div>
    <div class="table-box">
       <el-table
        size="small"
        :data="roleList"
        style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          label="角色">
           <template slot-scope="scope">
              <span >{{ scope.row.roleName || '-'}}</span>
            </template>
        </el-table-column>
        <el-table-column
          prop="gmtCreate"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="gmtModified"
          label="修改时间">
          <template slot-scope="scope">
              <span >{{ scope.row.gmtModified || '-'}}</span>
            </template>
        </el-table-column>
         <el-table-column
          width="180"
          label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 编辑／新增账号权限 -->
    <operate-Role ref="operateRole"></operate-Role>
  </div>
</template>
<script>
import operateRole from './compents/operateRole'

import { roleListApi, deleteRoleApi } from '@/api/organization'
export default {
  components: {
    operateRole
  },
  data() {
    return {
      roleList: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      roleListApi().then(res => {
        this.roleList = res.data
      })
    },
    handleEdit(row) { // 编辑
      this.$refs.operateRole.open(row)
    },
    handleDelete(row) { // 删除
      let param = {
        roleId: row.roleId
      }
      deleteRoleApi(param).then(res => {
        this.getList()
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      })
    },
    handClick() { // 新增
      this.$refs.operateRole.open()
    }
  }
}
</script>

<style scoped>
 .container{
    padding:20px;
  }
  .add{
    float: right;
  }
  .table-box{
    border: 1px solid #e5e5e5;
  }
  .btn-box {
    padding-bottom: 20px;
  }
</style>
