<template>
  <div class="dialog-box">
    <el-dialog title="离职" :visible.sync="leaveFormVisible" label-width="140px">
      <el-form :model="formleave" :rules="leaverule" ref='leaveForm'  size="small">
        <div class="title-text">确定此员工离职么</div>
        <el-form-item label="请选择离职时间"  prop="gmtLeave" label-width="120px">
           <el-date-picker
            v-model="formleave.gmtLeave"
            type="date"
            placeholder="选择离职时间">
           </el-date-picker>
        </el-form-item>
        <div class="title-text">检测该职员下还有在生效的租约，请分配新的管理者</div>
        <el-form-item label="业务交接人员" label-width="120px">
          <el-select
            v-model="formleave.transferId"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod">
            <el-option
              v-for="item in onJobList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
               <span style="float: left">{{ item.name }}</span>
               <span style="float: right; color: #8492a6; font-size: 13px">{{ item.mobile }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelLeave('leaveForm')">取 消</el-button>
        <el-button type="primary" @click="submitLeave('leaveForm')">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="复职" :visible.sync="backFormVisible">
      <el-form :model="formback" label-position="left" :rules="rules" ref='formback' size="small" label-width="140px">
        <div class="title-text">确定复职此员工么</div>
        <el-form-item label="复职时间:" prop="gmtBack" label-width="120px">
          <el-date-picker
            v-model="formback.gmtBack"
            type="date"
            placeholder="选择复职时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="指定手机号码:" prop="mobile" label-width="120px">
          <el-input v-model="formback.mobile"></el-input>
        </el-form-item>
        <el-form-item label="手机编码:" prop="imei">
          <el-input v-model="formback.imei"></el-input>
        </el-form-item>
        <div class="title-text">温馨提示:复职后密码重新为123456</div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelBack('formback')">取 消</el-button>
        <el-button type="primary" @click="submitBack('formback')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  personnelBack,
  personnelLeave,
  queryOnTheJob }
  from '@/api/organization'
import { parseTime, delObjectItem} from '@/utils'
import { validateMobile } from '@/utils/validate'
export default {
  name: 'Incumbency',
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!validateMobile(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    return {
      leaverule: {
        gmtLeave: [
          { required: true, message: '请选择离职时间', trigger: 'blur' }
        ],
        transferId: [
          { required: true, message: '请选择业务交接人员', trigger: 'blur' }
        ]
      },
      rules: {
        gmtBack: [
          { required: true, message: '请选择复职时间', trigger: 'change' }
        ],
        mobile: [
          { required: true, trigger: 'blur', validator: validatePhone }
        ],
        imei: [
          {required: true, message: '请输入手机编码', trigger: 'blur'}
        ]
      },
      leaveFormVisible: false,
      backFormVisible: false,
      onJobList: [],
      formleave: {
        gmtLeave: '',
        oldManagerId: '',
        transferId: ''
      },
      formback: {
        gmtBack: '',
        managerId: '',
        mobile: '',
        imei: ''
      }
    }
  },
  methods: {
    cancelBack(formName) {
      this.backFormVisible = false
      delObjectItem(this.formback)
      this.$refs[formName].resetFields()
    },
    submitBack(formName) {
      if (!this.formback.gmtBack) {
        this.$message({
          message: '请选择复职时间',
          type: 'success'
        })
        return
      }
      this.formback.gmtBack = parseTime(this.formback.gmtBack)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          personnelBack(this.formback).then(res => {
            delObjectItem(this.formback)
            this.backFormVisible = false
            this.$emit('searchStart')
            this.$message({
              message: '操作成功',
              type: 'success'
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitLeave(formName) {
      if (!this.formleave.gmtLeave) {
        this.$message({
          message: '请选择离职时间',
          type: 'success'
        })
        return false
      }
      this.formleave.gmtLeave = parseTime(this.formleave.gmtLeave)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.formleave.transferId === '') {
            this.$message({
              message: '请选择交接人',
              type: 'success'
            })
            return
          }
          this.leaveFormVisible = false
          personnelLeave(this.formleave).then(res => {
            delObjectItem(this.formleave)
            this.$emit('searchStart')
            this.$message({
              message: '操作成功',
              type: 'success'
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancelLeave(formName) {
      this.leaveFormVisible = false
      delObjectItem(this.formleave)
      this.$refs[formName].resetFields()
    },
    open(row) {
      row.isDelete === 1 ? this.back(row) : this.leave(row)
    },
    leave(row) {
      this.leaveFormVisible = true
      this.formleave.oldManagerId = row.id
    },
    back(row) {
      this.backFormVisible = true
      this.formback.managerId = row.id
    },
    remoteMethod(query) {
      if (query !== '') {
        let param = {
          keyword: query
        }
        queryOnTheJob(param).then(res => {
          this.onJobList = res.data
        })
      } else {
        this.onJobList = []
      }
    }
  }
}
</script>
<style scoped>
  .title-text{
    padding-bottom: 4px;
  }
</style>


