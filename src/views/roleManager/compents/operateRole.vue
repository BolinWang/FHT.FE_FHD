<template>
   <div class="container">
     <el-dialog :title="editOradd?'编辑角色':'新建角色'" :visible.sync="dialogFormVisible">
       <div class="text-box">
         <el-form  :inline="true" ref="form" :model="form" label-width="80px" size="small">
           <el-form-item label="角色名称">
            <el-input v-model="form.roleName"  placeholder="请输入"></el-input>
           </el-form-item>
           <el-form-item class="right">
              <el-checkbox v-model="form.backLogin">允许登陆飞虎队后台</el-checkbox>
           </el-form-item>
         </el-form>
       </div>
       <div class="checkout-box">
         <el-row :gutter="10">
          <el-col :span="8" >
            <div class="grid-content">
              <div class="topTitle">
                一级菜单
              </div>
              <ul class="contentNav">
                  <li v-for="(item, index) in allList" :key="index" @click="operaIndex = index">
                    <el-checkbox
                      v-model="item.flag"
                      :indeterminate='item.isIndeterminat'
                      @change="checkChange(item.flag, item.children)">
                    </el-checkbox>
                    <span :class="{ checkblue: item.flag==true }">{{item.menuName}}</span>
                  </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="16" >
            <div class="grid-content">
              <div class="topTitle">
                二级菜单
              </div>
              <ul class="contentNav">
                  <li  v-for="(item, index) in (allList.length > 0 ? allList[operaIndex].children : [])" :key="index" >
                    <el-checkbox
                      v-model="item.flag"
                      @change="checkChange(item.flag, item.children)">
                    </el-checkbox>
                    <span :class="{ checkblue: item.flag==true }">{{item.menuName}}</span>
                  </li>
              </ul>
            </div>
          </el-col>
        </el-row>
       </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveSub">确 定</el-button>
        </div>
    </el-dialog>
   </div>
</template>
<script>
import { showRoleMenusApi, roleSaveApi } from '@/api/organization'
import { delObjectItem } from '@/utils'
export default {
  data() {
    return {
      dialogFormVisible: false,
      editOradd: null,
      allList: [],
      allListNow: [],
      operaIndex: 0,
      form: {
        roleId: '',
        roleName: '',
        menuIds: [],
        backLogin: 0
      }
    }
  },
  mounted() {
  },
  methods: {
    checkChange(checked, data) { // checkbox框切换
      function checkFn(list) {
        list.map(v => {
          v.flag = checked
          if (v.children instanceof Array && v.children.length > 0) {
            checkFn(v.children)
          } else {
            return false
          }
        })
      }
      if (data instanceof Array) {
        checkFn(data)
      }
      this.dataFomart()
    },
    dataFomart() { // 遍历数据判断checked（是否全选）和indeterminate（是否部分选中）
      let areaIndeterminate = []
      this.allList.map(nowList => { // 遍历城市
        nowList.children.map(areaList => { // 遍历
          if (areaList.flag === true) {
            areaIndeterminate.push(areaList)
          }
        })
        if (areaIndeterminate.length === nowList.children.length) {
          nowList.flag = true
          nowList.indeterminate = false
        } else {
          nowList.flag = false
          // 只要某个区域勾选了或者部分勾选了，城市都处于部分选中状态
          nowList.indeterminate = areaIndeterminate.length > 0
        }
      })
    },
    traverseTree(node, index) {
      if (!node) {
        return
      }
      if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
          this.allListNow.push(node)
          this.traverseTree(node.children[i])
        }
      }
    },
    saveSub() {
      this.allList.forEach((value, index) => {
        this.traverseTree(value, index)
        this.operaIndex = 0
      })
      this.form.backLogin === true ? this.form.backLogin = 1 : this.form.backLogin = 0
      this.form.menuIds = this.allListNow.filter(v => v.flag).map(v => v.menuId)
      roleSaveApi(this.form).then(res => {
        delObjectItem(this.form.menuIds)
        this.allListNow = []
        this.editOradd = null
        this.$message({
          message: '添加角色成功',
          type: 'success'
        })
      })
    },
    getList() {
      let params = {
        roleId: this.editOradd !== null && this.editOradd !== undefined ? this.editOradd.roleId : -1
      }
      showRoleMenusApi(params).then(res => {
        this.allList = res.data
      })
    },
    open(row) {
      this.operaIndex = 0
      this.dialogFormVisible = true
      if (row) {
        this.editOradd = row
        this.form.roleId = row.roleId
        this.form.roleName = row.roleName
        row.backLogin === 1 ? this.form.backLogin = true : this.form.backLogin = false
      }
      this.getList()
    }
  }
}
</script>
<style scoped lang="scss">
 .contentNav {
      width: 100%;
      height: 330px;
      overflow: auto;
      li {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
      }
      .current {
        background: #eee;
      }
    }
  .right{
    float: right;
  }
  .current {
        background: #eee;
  }
  .checkblue{
  color: #409eff;
}
 .topTitle {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      background: #eee;
    }
</style>
