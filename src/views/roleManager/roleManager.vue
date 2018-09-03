<template>
  <div class="container">
    <div class="btn-box clearfix">
         <el-button size="small" @click="handClick" class="add" type="primary">新增</el-button>
    </div>
    <div class="table-box">
       <el-table
        :data="roleList"
        style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          prop="date"
          label="角色">
        </el-table-column>
        <el-table-column
          prop="name"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="修改时间">
        </el-table-column>
         <el-table-column
          width="180"
          label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
export default {
  components: {
    operateRole
  },
  data() {
    return {
      roleList: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    handleEdit() { // 编辑
      this.$refs.operateRole.open(true)
    },
    handleDelete() { // 删除

    },
    handClick() { // 新增
      this.$refs.operateRole.open(false)
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
