/*
 * @Author: chenxing
 * @Date: 2018-06-26 11:01:57
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-19 15:37:23
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
          :indent="8"
          :default-expanded-keys="[nowOrgObj.id]"
          @node-click="handleNodeClick">
        </el-tree>
      </el-aside>
      <el-main class="pageMain">
        <el-row class="topBanner">
          <el-col :span="24">
            <span class="blue">当前选择：{{nowOrgObj.depName}}</span>
            <el-button type="danger" class="right filter-item" v-if="powerButton.delUser" size="mini" @click="delOrg" icon="el-icon-delete" v-show="nowOrgObj.id !== 1">删除</el-button>
            <el-button type="primary" class="right filter-item" v-if="powerButton.editDepartment" size="mini" @click="editOrg" icon="el-icon-edit">编辑</el-button>
            <el-button type="primary" class="right filter-item" size="mini" @click="assignHouse" icon="el-icon-menu" v-show="nowOrgObj.id !== 1">房源分配</el-button>
            <el-button type="primary" class="right filter-item" v-if="powerButton.addDepartment" size="mini" @click="addOrg" icon="el-icon-circle-plus-outline">添加旗下部门</el-button>
          </el-col>
        </el-row>
        <div class="model-search clearfix">
          <el-input size="small" v-model="formData.nameOrMobile" placeholder="姓名/手机号码" style="width:140px;" @keydown.native.enter="searchParam">
          </el-input>
          <el-select size="small" v-model="formData.isDelete" style="width:140px;"  placeholder="在职情况">
            <el-option
              v-for="item in IncumbencyList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select size="small" v-model="formData.type" style="width:140px;"  placeholder="请选择类型">
            <el-option
              v-for="item in InserviceList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" size="small" icon="el-icon-search" @click.native="searchParam" v-waves class="filter-item">查询</el-button>
          <el-button plain size="small" icon="el-icon-remove-outline" @click.native="clearForm">清空</el-button>
          <el-button type="primary" size="small" icon="el-icon-upload" v-if="powerButton.export"  @click.native="exportExcel">导出</el-button>
          <el-button class="right" type="primary" size="small" v-if="powerButton.addUser" icon="el-icon-circle-plus-outline" @click.native="handleApply">新增账号</el-button>
        </div>
        <GridUnit
          ref="refGridUnit"
          :columns="colModels"
          :url="url"
          listField="data.result"
          :autoLoad="false"
          :dataMethod="method"
          :formOptions="formData"
          :height="tableHeight">
          <template slot="handle" slot-scope="scope">
            <div v-if="scope.row.role !== 10">
              <el-button type="primary" icon="el-icon-edit" size="small"
                v-if="powerButton.editUser"
                @click="editAccount(scope.row)">
                编辑
              </el-button>
              <el-button type="warning" icon="el-icon-refresh" size="small"
                v-if="powerButton.repwd"  
                @click="resetPsd(scope.row)">
                密码重置
              </el-button>
                <el-button v-if="scope.row.isDelete===1&&powerButton.blUser" type="success"  size="small"
                  @click="backAccount(scope.row)">
                  复职
                </el-button>
                <el-button v-if="scope.row.isDelete!==1&&powerButton.blUser" type="danger"  size="small"
                  @click="leaveAccount(scope.row)">
                  离职
               </el-button>
             </div>

          </template>
          <template slot="roleTmp" slot-scope="scope">
            {{scope.row.roleName }}
          </template>
          <template slot="accountType" slot-scope="scope">
            <el-tag v-if="scope.row.type == 1">正式</el-tag>
            <div class="underline colorRed" v-else-if="scope.row.type == 0&&powerButton.tryoutUser" @click="changeAccountType(scope.row)">试用中</div>
            <div class="underline colorInfo" @click="changeAccountType(scope.row)" v-else>已失效</div>
          </template>
        </GridUnit>
      </el-main>
    </el-container>

    <!-- 新增/编辑部门 -->
    <div class="dialog-info">
      <el-dialog :title="isEditOrg ? '编辑部门' : '添加部门'" @close="layerClose" :visible.sync="layer_addOrg" width="500px" :close-on-click-modal="false">
        <el-form size="small" :model="orgForm" ref="orgForm" :rules="rules" label-position="left" label-width="80px" style='margin-left:20px;'>
          <el-form-item label="部门名称" prop="depName">
            <el-input v-model="orgForm.depName" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="上级部门">
            <el-input  v-model="superiorName" v-show="!isEditOrg" :disabled='true'></el-input>
            <el-select v-model="superiorName" v-show="isEditOrg"  :disabled="isEditOrg&&nowOrgObj.parentId==0">
              <el-tree
                ref="overlayTree"
                :data="treeData"
                :props="defaultProps"
                node-key="id"
                :highlight-current="true"
                :expand-on-click-node="false"
                :default-expanded-keys="[parentOrg.id]"
                @node-click="editNodeclick">
              </el-tree>
              <el-option style="display:none" value=""></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="layer_addOrg = false" size="small">取消</el-button>
          <el-button type="primary" @click="submitOrg" size="small">确定</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 房源分配管理 -->
    <div class="dialog-info">
      <el-dialog title="房源分配管理" :visible.sync="layer_house" width="700px" @close="houseClose" :close-on-click-modal="false">
        <div style="padding-bottom: 10px">
          给部门 <span class="colorRed">{{nowOrgObj.depName}}</span> 分配房源
        </div>
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="grid-content">
              <div class="topTitle">
                城市
              </div>
              <ul class="contentNav">
                  <li
                    v-for="(item, index) in cityData" :key="index"
                    :class="{current: cityIndex === index}" @click="cityIndex = index">
                    <el-checkbox
                      :indeterminate="item.indeterminate"
                      v-model="item.checked"
                      @change="checkChange(item.checked, item.childrens)">
                    </el-checkbox>
                    <span :class="{ checkblue: item.checked }">{{item.name}}</span>
                  </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <div class="topTitle">
                区域
              </div>
              <ul class="contentNav">
                  <li
                    v-for="(item, index) in (cityData.length > 0 ? cityData[cityIndex].childrens : [])" :key="index"
                    :class="{current: areaIndex === index}" @click="areaIndex = index">

                    <el-checkbox
                      :indeterminate="item.indeterminate"
                      v-model="item.checked"
                      @change="checkChange(item.checked, item.childrens)"
                      ></el-checkbox>
                      <span :class="{ checkblue: item.checked }">{{item.name}}</span>
                  </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <div class="topTitle">
                板块/商圈
              </div>
              <ul class="contentNav">
                  <li
                    v-for="(item, index) in (cityData.length > 0 ? cityData[cityIndex].childrens[areaIndex].childrens : [])" :key="index">
                    <el-checkbox
                      v-model="item.checked"
                      @change="checkChange(item.checked, item.childrens)"
                      ></el-checkbox>
                      <span :class="{ checkblue: item.checked }">{{item.name}}</span>
                  </li>
              </ul>
            </div>
            </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="layer_house = false" size="small">取消</el-button>
          <el-button type="primary" @click="allocateHouse" size="small">确定</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 新增/编辑账号 -->
    <div class="dialog-info">
      <el-dialog :title="isEditAccount ? '编辑账号' : '新增账号'" @close="closeAccount" :visible.sync="layer_account" width="800px" :close-on-click-modal="false">
        <el-form size="small" :model="accountForm" ref="accountForm" :rules="rules" label-position="right" label-width="100px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="手机号码" prop="mobile">
                <el-input v-model="accountForm.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="accountForm.name" maxlength="10" :disabled="editAdd"></el-input>
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
                <el-select v-if="accountForm.type!==0" v-model="accountForm.role" style="width: 100%">
                  <el-option
                    v-for="item in roleOpts"
                    :key="item.roleId"
                    :label="item.roleName"
                    :value="item.roleId">
                  </el-option>
                </el-select>
                <el-select v-else v-model="accountForm.role" style="width: 100%">
                  <el-option
                    v-for="item in roleOptsEdit"
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
              <el-form-item label="失效时间" prop="gmtExpire" v-if="isTry">
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
              <el-form-item label="入职时间" prop="gmtHire" v-else>
                <el-date-picker
                  v-model="accountForm.gmtHire"
                  type="datetime"
                  default-time="00:00:00"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  style="width: 100%"
                  :disabled="isEditAccount"
                  placeholder="选择入职日期">
                </el-date-picker>
              </el-form-item>

            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="身份证号码" prop="idNo">
                <el-input v-model="accountForm.idNo" :disabled="editAdd"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div v-show="!isEditAccount" style="padding-left:27px">温馨提示：默认密码为123456，请提醒用户首次登陆后立即更改密码</div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="layer_account = false" size="small">取消</el-button>
          <el-button type="primary" @click="submitForm('accountForm')" size="small">确定</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 账号类型变更 -->
    <div class="dialog-info">
      <el-dialog title="账号类型" @close="close_accountType" :visible.sync="layer_accountType" width="500px" :close-on-click-modal="false">
        <div>更改账号类型</div>
        <div style="line-height: 50px">
          <el-row>
            <el-radio-group v-model="accoutTypeStatus" style="width: 100%" @change="clearTypeValidate">
              <el-col :span="8"><el-radio :label="1">设为正式账号</el-radio></el-col>
              <el-col :span="8"><el-radio :label="0">设为试用账号</el-radio></el-col>
              <el-col :span="8"><el-radio :label="2">设为失效账号</el-radio></el-col>
            </el-radio-group>
          </el-row>
        </div>
        <el-form size="small" :model="typeForm" ref="typeForm" :rules="rules" label-position="right" label-width="120px" v-show="accoutTypeStatus == 1">
          <el-form-item label="指定手机号码" prop="mobile" >
            <el-input v-model="typeForm.mobile"></el-input>
          </el-form-item>
          <el-form-item label="手机编码" prop="imei">
            <el-input v-model="typeForm.imei"></el-input>
          </el-form-item>
          <el-form-item label="入职时间" prop="gmtHire">
            <el-date-picker
              v-model="typeForm.gmtHire"
              type="datetime"
              style="width: 100%"
              default-time="00:00:00"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择入职时间">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-form size="small" :model="typeForm2" ref="typeForm2" :rules="rules" label-position="right" label-width="80px" v-show="accoutTypeStatus == 0">
          <el-form-item label="失效时间" prop="gmtExpire">
            <el-date-picker
              v-model="typeForm2.gmtExpire"
              type="datetime"
              style="width: 100%"
              default-time="23:59:59"
              value-format="yyyy-MM-dd HH:mm:ss"
              :picker-options="pickerOptions"
              placeholder="选择失效日期">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <div class="colorRed" v-show="accoutTypeStatus == 2">失效后，账号将无法登陆</div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="layer_accountType = false" size="small">取消</el-button>
          <el-button type="primary" @click="accountTypeSub" size="small">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 离职／复职弹窗 -->
    <Incumbency ref="incumbency" v-on:searchStart = "searchParam"></Incumbency>
  </div>
</template>
<script>
import waves from '@/directive/waves' // 水波纹指令
import GridUnit from '@/components/GridUnit/grid'
import { mapGetters } from 'vuex'
import { validateMobile, validateisCard } from '@/utils/validate'
import { deepClone } from '@/utils'
import Incumbency from './commpents/Incumbency'
import { queryDepartmentByLogin, createDepartment, updateDepartment, queryDepAreaPerm, createDepAreaPerm, delDepartment, createManager, updateManager, resetPassword, updateType, deleteManager, roleListApi } from '@/api/organization'
const roleList = [
  {
    value: 1,
    label: '城市内勤'
  }, {
    value: 2,
    label: '城市管家'
  }, {
    value: 3,
    label: '组长'
  }, {
    value: 4,
    label: '站长'
  }, {
    value: 5,
    label: '板块经理'
  }, {
    value: 6,
    label: '区域经理'
  }, {
    value: 7,
    label: '城市总'
  }, {
    value: 8,
    label: '人事'
  }, {
    value: 9,
    label: '运营'
  }, {
    value: 11,
    label: 'BD'
  }
]
export default {
  name: 'framework',
  directives: {
    waves
  },
  components: {
    GridUnit,
    Incumbency
  },
  created() {
    /* 表格高度控制 */
    let temp_height = document.body.clientHeight - 230
    this.tableHeight = temp_height > 300 ? temp_height : 300
    window.onresize = () => {
      return (() => {
        temp_height = document.body.clientHeight - 230
        this.tableHeight = temp_height > 300 ? temp_height : 300
      })()
    }
    this.defaultAccount = deepClone(this.accountForm)
    this.getTree()
    const paramRoute = {
      parentsRouter: this.$route.matched[0].path,
      nowRouter: this.$route.path.split('/')[this.$route.path.split('/').length - 1]
    }
    this.$store.dispatch('ButtonPowerArray', { paramRoute })
    this.getroleOptsList()
  },
  computed: {
    treeHeight() {
      return {
        height: this.tableHeight + 104 + 'px'
      }
    },
    ...mapGetters([
      'powerButton'
    ])
  },
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!validateMobile(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    const isCardNo = (rule, value, callback) => {
      if (!validateisCard(value)) {
        callback(new Error('请输入正确的身份证号码'))
      } else {
        callback()
      }
    }
    return {
      editParentId: null,
      hightOrganList: [],
      nowheightObj: {},
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
      InserviceList: [
        {
          value: 0,
          label: '试用'
        }, {
          value: 1,
          label: '正式'
        }, {
          value: 2,
          label: '已失效'
        }, {
          value: null,
          label: '全部'
        }
      ],
      roleOptsEdit: [{
        value: 2,
        label: '城市管家'
      }, {
        value: 3,
        label: '组长'
      }
      ],
      editAdd: true,
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
          { required: true, message: '请选择入职时间', trigger: 'blur' }
        ],
        idNo: [
          { required: true, trigger: 'blur', validator: isCardNo }
        ]
      },
      defaultProps: {
        children: 'child',
        label: 'depName'
      },
      treeData: [],
      cityIndex: 0,
      areaIndex: 0,
      cityData: [],
      genderOpts: [
        {
          value: 1,
          label: '男'
        }, {
          value: 2,
          label: '女'
        }
      ],
      rowData: {},
      roleOpts: [],
      formData: {
        nameOrMobile: '',
        depId: '',
        key: 'formal',
        type: null,
        isDelete: 0
      },
      nowOrgObj: {
        depName: '',
        id: ''
      },
      parentOrg: {
        depName: '',
        id: ''
      },
      tableHeight: 300,
      layer_addOrg: false,
      layer_house: false,
      layer_accountType: false,
      superiorName: '',
      orgForm: {
        depName: ''
      },
      accountForm: {
        mobile: '',
        name: '',
        sex: 1,
        depId: '',
        depName: '',
        role: '',
        imei: '',
        type: 1,
        gmtHire: '',
        idNo: ''
      },
      isTry: false, // 是否为试用账号
      accoutTypeStatus: 1,
      typeForm: {
        mobile: '',
        imei: '',
        gmtHire: ''
      },
      typeForm2: {
        gmtExpire: ''
      },
      defaultAccount: {},
      isEditOrg: false,
      isEditAccount: false,
      layer_account: false,
      colModels: [
        { prop: 'name', label: '姓名', width: 100 },
        { prop: 'depName', label: '部门' },
        { prop: 'roleName', label: '权限角色', slotName: 'roleTmp', width: 100 },
        { prop: 'mobile', label: '手机号码', width: 100 },
        { prop: 'imei', label: '手机编码' },
        { prop: 'type', label: '类型', slotName: 'accountType', width: 80 },
        { label: '操作', slotName: 'handle', width: 320 },
        { prop: 'gmtCreate', label: '创建时间' }
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
  methods: {
    getroleOptsList() {
      roleListApi().then(res => {
        this.roleOpts = res.data
      })
    },
    exportExcel() {
      const type = this.formData.type !== null ? this.formData.type : ''
      const isDelete = this.formData.isDelete !== null ? this.formData.isDelete : ''
      const href = `${process.env.BASE_API}/user/exportExcel?isDelete=${isDelete}&type=${type}&nameOrMobile=${this.formData.nameOrMobile}&depId=${this.formData.depId}`
      var elink = document.createElement('a')
      elink.style.display = 'none'
      elink.href = encodeURI(href)
      document.body.appendChild(elink)
      elink.click()
      document.body.removeChild(elink)
    },
    backAccount(row) { // 复职
      this.$refs.incumbency.open(row)
    },
    leaveAccount(row) { // 离职
      this.$refs.incumbency.open(row)
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
    },
    dataFomart() { // 遍历数据判断checked（是否全选）和indeterminate（是否部分选中）
      this.cityData.map(cityList => { // 遍历城市
        const areaCheckList = []
        const areaIndeterminate = []
        cityList.childrens.map(areaList => { // 遍历区域
          const zoneCheckList = []
          areaList.childrens.map(zoneList => { // 遍历板块
            if (zoneList.checked) {
              zoneCheckList.push(zoneList)
            }
          })
          if (zoneCheckList.length === areaList.childrens.length) {
            areaList.checked = true
            areaList.indeterminate = false
            areaCheckList.push(areaList)
          } else {
            areaList.checked = false
            areaList.indeterminate = zoneCheckList.length > 0
            if (areaList.indeterminate) { // 将勾选了部分板块的区域的存入数组
              areaIndeterminate.push(areaList)
            }
          }
        })
        if (areaCheckList.length === cityList.childrens.length) {
          cityList.checked = true
          cityList.indeterminate = false
        } else {
          cityList.checked = false
          // 只要某个区域勾选了或者部分勾选了，城市都处于部分选中状态
          cityList.indeterminate = areaCheckList.length > 0 || areaIndeterminate.length > 0
        }
      })
    },
    getFirstNode(id) {
      this.$nextTick(() => { // 设置tree的默认选中节点 0是node-key设置的参数对应的值
        this.$refs.trees.setCurrentKey(id)
        const obj = this.$refs.trees.getNode(id)
        this.nowOrgObj = deepClone(obj.data)
        this.parentOrg = obj.parent.data instanceof Array ? deepClone(obj.parent.data[0]) : deepClone(obj.parent.data)
        this.formData.depId = this.nowOrgObj.id
        this.$nextTick(() => {
          this.searchParam()
        })
      })
    },
    handleNodeClick(node, data) { // 点击tree节点函数
      this.nowOrgObj = deepClone(data.data)
      this.parentOrg = data.parent.data instanceof Array ? deepClone(data.parent.data[0]) : deepClone(data.parent.data)
      this.formData.depId = this.nowOrgObj.id
      this.formData.nameOrMobile = ''
      this.$nextTick(() => {
        this.searchParam()
      })
    },
    assignHouse() { // 房源分配
      const param = {
        depId: this.nowOrgObj.id,
        parentDepId: this.parentOrg.id || 0
      }
      queryDepAreaPerm(param).then(res => {
        if (res.data && res.data instanceof Array) {
          this.cityData = res.data
          this.dataFomart()
          this.layer_house = true
        } else {
          this.$message.error('未查询到可分配的房源')
        }
      }).catch(rej => {})
    },
    houseClose() { // 分配房源弹框关闭 将选中行默认为第一行
      this.cityIndex = 0
      this.areaIndex = 0
    },
    addOrg() { // 新增部门
      this.isEditOrg = false
      this.layer_addOrg = true
      this.superiorName = this.nowOrgObj.depName
    },
    editOrg() { // 编辑部门
      this.isEditOrg = true
      this.superiorName = this.parentOrg.depName
      this.editParentId = this.parentOrg.id
      this.orgForm.depName = this.nowOrgObj.depName
      this.layer_addOrg = true
    },
    editNodeclick(node, data) { // 编辑部门tree点击
      this.parentOrg.depName = data.data.depName
      this.editParentId = data.data.id
      this.superiorName = this.parentOrg.depName
    },
    submitOrg() {
      this.$refs['orgForm'].validate((valid) => {
        if (valid) {
          const param = deepClone(this.orgForm)
          let postFn = createDepartment
          if (this.isEditOrg) { // 编辑
            param.depId = this.nowOrgObj.id
            param.parentId = this.editParentId
            postFn = updateDepartment
            while (param.parentId === param.depId) {
              this.$message({
                message: '请选择除自己之外的其他部门',
                type: 'error'
              })
              return false
            }
          } else { // 新增
            param.parentId = this.nowOrgObj.id
          }
          postFn(param).then(req => {
            this.layer_addOrg = false
            if (this.isEditOrg) {
              this.$message.success('编辑部门成功')
              this.getTree(this.nowOrgObj.id)
            } else {
              this.$confirm('部门创建成功，请为部门分配房源', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'success'
              }).then(() => {
                this.getTree(req.data.id, this.assignHouse)
              }).catch(() => {
                this.getTree(this.nowOrgObj.id)
              })
            }
          }).catch(rej => {})
        } else {
          return false
        }
      })
    },
    delOrg() { // 删除部门
      this.$confirm(`确定删除部门 ‘${this.nowOrgObj.depName}’ 吗? 删除前请先确保部门旗下无员工`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const param = {
          depId: this.nowOrgObj.id
        }
        delDepartment(param).then(res => {
          this.$message.success('删除部门成功')
          this.getTree(this.parentOrg.id)
        }).catch(rej => {})
      }).catch(() => {})
    },
    layerClose() { // 部门弹框关闭
      this.$refs['orgForm'].resetFields()
      this.orgForm.depName = ''
    },
    searchParam() { // 查询
      this.$refs.refGridUnit.searchHandler()
    },
    clearForm() { // 清空
      this.formData.nameOrMobile = ''
      this.$refs.refGridUnit.searchHandler()
    },
    handleApply() { // 新增账号
      this.editAdd = false
      this.layer_account = true
      this.isEditAccount = false
      this.isTry = false
      this.accountForm = deepClone(this.defaultAccount)
      this.accountForm.depId = this.nowOrgObj.id
      this.accountForm.depName = this.nowOrgObj.depName
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
          const param = deepClone(this.accountForm)
          let postFn = createManager
          if (this.isEditAccount) { // 编辑
            postFn = updateManager
            if (this.isTry) { // 如果是试岗账号编辑 修改账号类型
              param.type = 0
            }
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
      this.editAdd = true
      for (var key in this.defaultAccount) {
        this.accountForm[key] = row[key]
      }
      if (row.type === 0) { // 试岗账号编辑时添加失效时间
        this.$set(this.accountForm, 'gmtExpire', row.gmtExpire)
        this.isTry = true
      } else {
        this.isTry = false
      }
      this.accountForm.id = row.id
      this.layer_account = true
      this.isEditAccount = true
      this.$nextTick(() => { // 选中所属部门
        this.$refs.overlayTree.setCurrentKey(this.accountForm.depId)
      })
    },
    resetPsd(row) { // 密码重置
      this.$confirm(`<div>确定将账号'${row.name}'的密码重置为 <span style="color: red">123456</span> 吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        dangerouslyUseHTMLString: true
      }).then(() => {
        const param = {
          id: row.id,
          password: '123456'
        }
        resetPassword(param).then(res => {
          this.$message.success('重置密码成功')
          this.searchParam()
        }).catch(rej => {})
      }).catch(() => {})
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
    },
    changeAccountType(row) { // 账号类型变更
      this.layer_accountType = true
      this.rowData = row
    },
    close_accountType() {
      this.clearTypeValidate()
    },
    accountTypeSub() { // 账号类型提交 0：试用 1：正式 2：失效
      if (this.accoutTypeStatus === 2) { // 失效账号
        const param = {
          type: 2
        }
        this.postType(param)
      } else {
        const nowForm = this.accoutTypeStatus === 1 ? 'typeForm' : 'typeForm2'
        this.$refs[nowForm].validate((valid) => {
          if (valid) {
            const param = this.accoutTypeStatus === 1 ? this.typeForm : this.typeForm2
            param.type = this.accoutTypeStatus
            this.postType(param)
          } else {
            return false
          }
        })
      }
    },
    postType(param) {
      param.id = this.rowData.id
      updateType(param).then(res => {
        this.layer_accountType = false
        this.$message.success('编辑账号类型成功')
        this.searchParam()
      }).catch(rej => {})
    },
    clearTypeValidate() { // 清楚账号类型验证结果
      this.$refs['typeForm'].resetFields()
      this.$refs['typeForm2'].resetFields()
    },
    allocateHouse() { // 房源分配提交
      const paramList = []
      this.cityData.map(cityList => {
        cityList.childrens.map(areaList => {
          areaList.childrens.map(zone => {
            if (zone.checked) {
              paramList.push({
                cityId: cityList.id,
                areaId: areaList.id,
                zoneId: zone.id
              })
            }
          })
        })
      })
      const param = {
        depId: this.nowOrgObj.id,
        depPerms: paramList
      }
      createDepAreaPerm(param).then(res => {
        this.layer_house = false
        this.$message.success('房源分配成功')
      }).catch(rej => {})
    },
    checkChange(checked, data) { // checkbox框切换
      function checkFn(list) {
        list.map(v => {
          v.checked = checked
          if (v.childrens instanceof Array && v.childrens.length > 0) {
            checkFn(v.childrens)
          } else {
            return false
          }
        })
      }
      if (data instanceof Array) {
        checkFn(data)
      }
      this.dataFomart()
    }
  }
}

</script>

<style rel="stylesheet/scss" lang="scss">
.checkblue{
  color: #409eff;
}
.fl-right{
  padding-left: 10px;
  float: right;
}
.layout-container .pageMain{
    padding:0 20px;
  }
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
