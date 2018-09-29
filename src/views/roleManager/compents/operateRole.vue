<template>
   <div class="container">
     <el-dialog :title="editOradd?'编辑角色':'新建角色'" :visible.sync="dialogFormVisible">
       <div class="text-box">
         <el-form  :inline="true" ref="form" :rules="rules"  :model="form" label-width="80px" size="small">
           <el-form-item label="角色名称" prop='roleName'>
              <!-- <el-form-item label="权限角色" prop="role">
                <el-select v-model="accountForm.role" style="width: 100%">
                  <el-option
                    v-for="item in roleOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item> -->
            <el-input v-model="form.roleName" :maxlength="10"  placeholder="请输入"></el-input>
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
                      v-model="item.isFlag"
                      :indeterminate='item.isIndeterminat'
                      @change="checkChange(item.isFlag, item.children)">
                    </el-checkbox>
                    <span :class="{ checkblue: item.isFlag==true }">{{item.menuName}}</span>
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
                      v-model="item.isFlag"
                      @change="checkChange(item.isFlag, item.children)">
                    </el-checkbox>
                    <span :class="{ checkblue: item.isFlag==true }">{{item.menuName}}</span>
                  </li>
              </ul>
            </div>
          </el-col>
        </el-row>
       </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancelRole">取 消</el-button>
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
      rules: {
        roleName: [
          { min: 0, max: 10, message: '长度在 10 个字符以内', trigger: 'blur' }
        ]
      },
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
          v.isFlag = checked
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
    dataFomart() {
      this.form.menuIds = []
      this.allList.map(allListItem => {
        const allListItemnum = []
        allListItem.children.map(twoList => {
          if (twoList.isFlag === true) {
            allListItemnum.push(twoList)
            this.form.menuIds.push(twoList.menuId)
            allListItem.isIndeterminat = true
          }
        })
        if (allListItemnum.length > 0) {
          this.form.menuIds.push(allListItem.menuId)
        }
        if (allListItemnum.length === allListItem.children.length) {
          allListItem.isFlag = true
          allListItem.isIndeterminat = false
        } else {
          allListItem.isFlag = false
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
      this.form.backLogin === true ? this.form.backLogin = 1 : this.form.backLogin = 0
      // this.form.menuIds = this.allListNow.filter(v => v.isFlag).map(v => v.menuId)
      this.dataFomart()
      roleSaveApi(this.form).then(res => {
        delObjectItem(this.form)
        this.allListNow = []
        this.editOradd = null
        this.dialogFormVisible = false
        this.$emit('editOver')
        this.$message({
          message: '保存成功',
          type: 'success'
        })
      })
    },
    cancelRole() {
      delObjectItem(this.form)
      this.allListNow = []
      this.editOradd = null
      this.dialogFormVisible = false
    },
    getList() {
      const params = {
        roleId: this.editOradd !== null && this.editOradd !== undefined ? this.editOradd.roleId : -1
      }
      showRoleMenusApi(params).then(res => {
        this.allList = res.data
        console.log(this.allList)
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
.grid-content {
    width: 100%;
    height: 360px;
    border: 1px solid #ccc;}
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
