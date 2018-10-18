<template>
   <div class="container">
     <el-dialog :before-close="cancelRole" :title="editOradd?'编辑角色':'新建角色'" :visible.sync="dialogFormVisible">
       <div class="text-box">
         <el-form  :inline="true" ref="form" :rules="rules"  :model="form" label-width="80px" size="small">
           <el-form-item label="角色名称" prop='roleName'>
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
          <el-col :span="8" >
            <div class="grid-content">
              <div class="topTitle">
                二级菜单
              </div>
              <ul class="contentNav">
                  <li  v-for="(item, index) in (allList.length > 0 ? allList[operaIndex].children : [])" :key="index" @click="actionIndex = index">
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
          <el-col :span="8">
            <div class="grid-content">
              <div class="topTitle">
                操作按钮
              </div>
              <ul class="contentNav">
                  <li  v-for="(item, index) in (allList.length > 0 ? allList[operaIndex].children[actionIndex].children : [])" :key="index" >
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
      actionIndex: 0,
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
    checkChange(isIndetermina, data) { // checkbox框切换
      function checkFn(list) {
        list.map(v => {
          v.isFlag = isIndetermina
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
      this.form.menuIds = []
      this.allList.map(OneList => { // 遍历一级
        const OneCheckList = [] // 一级下面选中的个数
        const OneIndeterminate = []
        OneList.children.map(twoList => { // 遍历二级
          const twoCheckList = [] // 二级下面选中的个数
          twoList.children.map(threeList => { // 遍历三级
            if (threeList.isFlag) {
              twoCheckList.push(threeList)
              this.form.menuIds.push(threeList.menuId)
            }
          })
          if (twoCheckList.length === twoList.children.length) { // 全选
            if (twoList.children.length === 0 && twoList.isFlag === true) {
              OneCheckList.push(twoList)
              this.form.menuIds.push(twoList.menuId)
            } else if (twoList.children.length !== 0) {
              twoList.isFlag = true // 当前二级选中
              twoList.isIndeterminat = false
              this.form.menuIds.push(twoList.menuId)
              OneCheckList.push(twoList) // 一级菜单下面选中的状态
            }
          } else {
            twoList.isFlag = false
            twoList.isIndeterminat = twoCheckList.length > 0
            if (twoList.isIndeterminat) { // 将勾选了三级菜单的存入数组
              OneIndeterminate.push(twoList)
              this.form.menuIds.push(twoList.menuId)
            }
          }
        })
        if (OneCheckList.length === OneList.children.length && OneList.children.length > 0) {
          OneList.isFlag = true
          this.form.menuIds.push(OneList.menuId)
          OneList.isIndeterminat = false
        } else {
          OneList.isFlag = false
          // 只要某个区域勾选了或者部分勾选了，城市都处于部分选中状态
          OneList.isIndeterminat = OneCheckList.length > 0 || OneIndeterminate.length > 0
          if (OneIndeterminate.length > 0) {
            this.form.menuIds.push(OneList.menuId)
          }
        }
      })
    },
    // dataFomart() {
    //   this.form.menuIds = []
    //   this.allList.map((allListItem, index) => {
    //     const allListItemnum = []
    //     const twoListItemnum = []
    //     allListItem.children.map(twoList => {
    //       if (twoList.isFlag === true) {
    //         allListItemnum.push(twoList)
    //         this.form.menuIds.push(twoList.menuId)
    //       }
    //       twoList.children.map(threeList => { // 遍历二级菜单
    //         if (threeList.isFlag === true) { // 三级有 选中
    //           allListItemnum.push(threeList) // 一级子菜单  全部个数
    //           twoListItemnum.push(threeList) // 二级子菜单全部个数
    //           allListItem.isIndeterminat = true // 把一级菜单变成横杠
    //           this.form.menuIds.push(threeList.menuId) // 全部id添加一个
    //           twoList.isIndeterminat = true // 二级菜单变为横杠
    //         }
    //       })
    //       if (twoListItemnum.length > 0) { // 三级菜单有一个选中，二级菜单id传给后端
    //         this.form.menuIds.push(twoList.menuId)
    //       }
    //       if (twoListItemnum.length === twoList.children.length) {
    //         twoList.isFlag = true
    //         twoList.isIndeterminat = false
    //       } else {
    //         twoList.isFlag = false
    //       }
    //     })
    //     if (allListItemnum.length > 0) {
    //       this.form.menuIds.push(allListItem.menuId)
    //     }
    //     if (allListItemnum.length === allListItem.children.length) {
    //       allListItem.isFlag = true
    //       allListItem.isIndeterminat = false
    //     } else {
    //       allListItem.isFlag = false
    //     }
    //   })
    // },
    saveSub() {
      this.form.backLogin === true ? this.form.backLogin = 1 : this.form.backLogin = 0
      // this.form.menuIds = this.allListNow.filter(v => v.isFlag).map(v => v.menuId)
      this.dataFomart()
      if (this.form.roleName === '') {
        this.$message({
          message: '没做任何操作，请确认数据',
          type: 'error'
        })
        return false
      }

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
      this.actionIndex = 0
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
