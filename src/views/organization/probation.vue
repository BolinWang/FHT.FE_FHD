/*
 * @Author: chenxing 
 * @Date: 2018-06-26 11:01:57 
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-07-09 15:39:16
 */
<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="240px" class="asideBox" :style="treeHeight">
        <el-tree 
          ref="trees"
          :data="treeData"
          :props="defaultProps" 
          node-key="id"
          :highlight-current="true"
          :expand-on-click-node="false"
          :default-expanded-keys="[nowOrgObj.id]"
          @node-click="handleNodeClick">
        </el-tree>
      </el-aside>
      <el-main class="pageMain">
        <el-row class="topBanner">
          <el-col :span="24">
            <span class="blue">当前选择：{{nowOrgObj.depName}}</span>
          </el-col>
        </el-row>
        <div class="model-search clearfix">
          <el-input size="small" v-model="formData.nameOrMobile" placeholder="姓名/手机号码" style="width:300px;" @keydown.native.enter="searchParam">
          </el-input>
          <el-button type="primary" size="small" icon="el-icon-search" @click.native="searchParam" v-waves class="filter-item">查询</el-button>
          <el-button plain size="small" icon="el-icon-remove-outline" @click.native="clearForm">清空</el-button>
          <el-button class="right" type="primary" size="small" icon="el-icon-circle-plus-outline" @click.native="handleApply">新增试岗账号</el-button>
        </div>
        <GridUnit
          ref="refGridUnit"
          :columns="colModels"
          :url="url"
          listField="data.data"
          :autoLoad="false"
          :dataMethod="method"
          :formOptions="formData"
          :height="tableHeight">
          <template slot="handle" slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="small"
              @click="editAccount(scope.row)">
              编辑
            </el-button>
            <el-button type="danger" icon="el-icon-delete" size="small"
              @click="delAccount(scope.row)">
              删除
            </el-button>
          </template>
          <template slot="roleTmp" slot-scope="scope">
            {{scope.row.role | roleStr}}
          </template>
          <template slot="accountType" slot-scope="scope">
            <el-tag v-if="scope.row.type == 1">正式</el-tag>
            <div class="underline colorRed" v-else-if="scope.row.activityStatus == 0" @click="changeAccountType(scope.row)">试用中</div>
            <div class="underline colorInfo" @click="changeAccountType(scope.row)" v-else>已失效</div>
          </template>
        </GridUnit>
      </el-main>
    </el-container>

    <!-- 新增/编辑账号 -->
    <div class="dialog-info">
      <el-dialog :title="isEditAccount ? '编辑试岗账号' : '新增试岗账号'" @close="closeAccount" :visible.sync="layer_account" width="800px">
        <el-form size="small" :model="accountForm" ref="accountForm" :rules="rules" label-position="right" label-width="100px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="手机号码" prop="mobile">
                <el-input v-model="accountForm.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="accountForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="sex">
                <el-select v-model="accountForm.sex">
                  <el-option
                    v-for="item in genderOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="所属部门" prop="depName">
                <el-select v-model="accountForm.depName" style="width: 100%">
                  <el-tree 
                    ref="overlayTree"
                    :data="treeData"
                    :props="defaultProps" 
                    node-key="id"
                    :highlight-current="true"
                    :expand-on-click-node="false"
                    :default-expanded-keys="[nowOrgObj.id]"
                    @node-click="overlayNodeClick">
                  </el-tree>
                  <el-option style="display:none" value=""></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="权限角色" prop="role">
                <el-select v-model="accountForm.role" style="width: 100%">
                  <el-option
                    v-for="item in roleOpts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="手机编码" prop="imei">
                <el-input v-model="accountForm.imei"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="失效时间" prop="gmtExpire">
                <el-date-picker
                  v-model="accountForm.gmtExpire"
                  type="datetime"
                  default-time="23:59:59"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  style="width: 100%"
                  :picker-options="pickerOptions"
                  placeholder="失效时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="layer_account = false" size="small">取消</el-button>
          <el-button type="primary" @click="submitForm('accountForm')" size="small">确定</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script>
import waves from '@/directive/waves' // 水波纹指令
import GridUnit from '@/components/GridUnit/grid'
import { validateMobile } from '@/utils/validate'
import { deepClone } from '@/utils'
import { queryDepartmentByLogin, createManager, updateManager, deleteManager } from '@/api/organization'
const roleList = [
  {
    value: 2,
    label: '城市管家'
  }, {
    value: 3,
    label: '组长'
  }
]
export default {
  name: 'probation',
  directives: {
    waves
  },
  components: {
    GridUnit
  },
  created() {
    /* 表格高度控制 */
    let temp_height = document.body.clientHeight - 230
    this.tableHeight = temp_height > 300 ? temp_height : 300
    window.onresize = () => {
      return (() => {
        temp_height = document.body.clientHeight - 230
        this.tableHeight = this.tableHeight = temp_height > 300 ? temp_height : 300
      })()
    }
    this.defaultAccount = deepClone(this.accountForm)
    this.getTree()
  },
  computed: {
    treeHeight() {
      return {
        height: this.tableHeight + 104 + 'px'
      }
    }
  },
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!validateMobile(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        }
      },
      rules: {
        depName: [
          { required: true, message: '请输入部门名称', trigger: 'blur' }
        ],
        mobile: [
          { required: true, trigger: 'blur', validator: validatePhone }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        role: [
          { required: true, message: '请选择权限角色', trigger: 'change' }
        ],
        imei: [
          { required: true, message: '请输入手机编码', trigger: 'blur' }
        ],
        gmtExpire: [
          { required: true, message: '请选择失效时间', trigger: 'change' }
        ],
        gmtHire: [
          { required: true, message: '请选择入职时间', trigger: 'change' }
        ]
      },
      defaultProps: {
        children: 'child',
        label: 'depName'
      },
      treeData: [],
      genderOpts: [
        {
          value: 1,
          label: '男'
        }, {
          value: 2,
          label: '女'
        }
      ],
      roleOpts: roleList,
      formData: {
        nameOrMobile: '',
        depId: '',
        type: 0
      },
      nowOrgObj: {
        depName: '',
        id: ''
      },
      tableHeight: 300,
      accountForm: {
        mobile: '',
        name: '',
        sex: 1,
        depId: '',
        depName: '',
        role: '',
        imei: '',
        type: 0,
        gmtExpire: ''
      },
      defaultAccount: {},
      isEditAccount: false,
      layer_account: false,
      colModels: [
        {prop: 'name', label: '姓名'},
        {prop: 'depName', label: '部门'},
        {prop: 'role', label: '权限角色', slotName: 'roleTmp'},
        {prop: 'mobile', label: '手机号码'},
        {prop: 'imei', label: '手机编码'},
        {prop: 'gmtExpire', label: '失效时间'},
        {label: '操作', slotName: 'handle', width: 200},
        {prop: 'createName', label: '创建人'},
        {prop: 'gmtCreate', label: '创建时间'}
      ],
      url: '/user/managerList',
      method: 'managerList'
    }
  },
  filters: {
    roleStr(val) {
      let str = ''
      roleList.map(v => {
        if (v.value === val) {
          str = v.label
        }
      })
      return str || '未知角色'
    }
  },
  watch: {
    nowOrgObj(val) {
      this.accountForm.depName = val.depName
      this.accountForm.depId = val.id
    }
  },
  methods: {
    getTree(id) {
      queryDepartmentByLogin().then(res => {
        if (res.data && res.data instanceof Array) {
          this.treeData = res.data
          let nowId = id || this.treeData[0].id
          this.getFirstNode(nowId)
        }
      }).catch(rej => {})
    },

    getFirstNode(id) {
      this.$nextTick(() => { // 设置tree的默认选中节点 0是node-key设置的参数对应的值
        this.$refs.trees.setCurrentKey(id)
        const obj = this.$refs.trees.getNode(id)
        this.nowOrgObj = deepClone(obj.data)
        this.formData.depId = this.nowOrgObj.id
        this.$nextTick(() => {
          this.searchParam()
        })
      })
    },
    handleNodeClick(node, data) { // 点击tree节点函数
      this.nowOrgObj = deepClone(data.data)
      this.formData.depId = this.nowOrgObj.id
      this.$nextTick(() => {
        this.searchParam()
      })
    },
    searchParam() { // 查询
      this.$refs.refGridUnit.searchHandler()
    },
    clearForm() { // 清空
      this.formData.nameOrMobile = ''
      this.$refs.refGridUnit.searchHandler()
    },
    handleApply() { // 新增账号
      this.layer_account = true
      this.isEditAccount = false
      this.$nextTick(() => {
        this.$refs.overlayTree.setCurrentKey(this.nowOrgObj.id)
      })
    },
    overlayNodeClick(node, data) { // 弹框tree点击
      this.accountForm.depName = data.data.depName
      this.accountForm.depId = data.data.id
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let param = deepClone(this.accountForm)
          let postFn = createManager
          if (this.isEditAccount) { // 编辑
            postFn = updateManager
          }
          // 删除后台不要的字段 不然他会炸掉
          delete param.depName
          postFn(param).then(req => {
            this.layer_account = false
            this.$message.success(`${this.isEditAccount ? '编辑' : '新增'}账号成功`)
            this.searchParam()
          }).catch(rej => {})
        } else {
          return false
        }
      })
    },
    editAccount(row) { // 编辑账号
      for (var key in this.accountForm) {
        this.accountForm[key] = row[key]
      }
      this.accountForm.id = row.id
      this.layer_account = true
      this.isEditAccount = true
      this.$nextTick(() => {
        this.$refs.overlayTree.setCurrentKey(this.accountForm.depId)
      })
    },
    delAccount(row) { // 删除账号
      this.$confirm(`确定删除账号'${row.name}'吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        dangerouslyUseHTMLString: true
      }).then(() => {
        const param = {
          id: row.id
        }
        deleteManager(param).then(res => {
          this.$message.success('删除账号成功')
          this.searchParam()
        }).catch(rej => {})
      }).catch(() => {})
    },
    closeAccount() { // 账号弹框关闭
      this.$refs['accountForm'].resetFields()
      this.accountForm = deepClone(this.defaultAccount)
    }
  }
}

</script>

<style rel="stylesheet/scss" lang="scss">
  .asideBox {
    border: 1px solid #ddd;
    height: 100%;
  }
  .filter-item {
    margin-left: 10px;
  }
  .pageMain {
    padding: 0 20px;
  }
  .topBanner {
    border: 1px solid #ccc;
    padding: 10px;
    .blue {
      color: #409eff;
      font-weight: 700;
      line-height: 28px;
    }
  }
  .model-search {
    padding: 10px 0;
  }
  .underline {
    text-decoration: underline;
    cursor: pointer;
  }
  .colorRed {
    color: #f56c6c;
  }
  .colorInfo {
    color: #909399;
  }
  .grid-content {
    width: 100%;
    height: 360px;
    border: 1px solid #ccc;
    .topTitle {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      background: #eee;
    }
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
  }
  
</style>
