<template>
   <div class="container">
     <el-dialog :title="editOradd?'编辑角色':'新建角色'" :visible.sync="dialogFormVisible">
       <div class="text-box">
         <el-form  :inline="true" ref="form" :model="form" label-width="80px" size="small">
           <el-form-item label="角色名称">
            <el-input v-model="form.name"  placeholder="请输入"></el-input>
           </el-form-item>
           <el-form-item class="right">
              <el-checkbox v-model="form.checked">允许登陆飞虎队后台</el-checkbox>
           </el-form-item>
         </el-form>
       </div>
       <div class="checkout-box">

       </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
   </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      editOradd: null,
      form: {
        name: '',
        checked: false
      }
    }
  },
  methods: {
    open(stype) {
      this.editOradd = stype
      this.dialogFormVisible = true
    }
  }
}
</script>
<style scoped>
  .right{
    float: right;
  }
</style>
