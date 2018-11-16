<template>
  <div class="conatiner">
    <el-dialog title="订单租约详情" width="600px" :visible.sync="dialogFormVisible" >
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">订单</div>
          </el-col>
          <el-col :span="19">
            <span class="pad-ri">{{orderDetail.orderNo}}</span>
            <el-button size="mini" type="primary" v-show='orderDetail.status === 3'>生效</el-button>
            <el-button size="mini" type="danger" v-show='orderDetail.status === 99'>搬离</el-button>
            <el-button size="mini" type="primary" @click="goSourceDetail(orderDetail.customerId)" v-show='orderDetail.customerId'>查看关联客源</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">出单时间</div>
          </el-col>
          <el-col :span="19">{{orderDetail.createTime}}</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">出单人</div>
          </el-col>
          <el-col :span="19">{{orderDetail.gmtCreateName}}</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">房间</div>
          </el-col>
          <el-col :span="19">{{orderDetail.roomName}}</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">房东</div>
          </el-col>
          <el-col :span="19">{{orderDetail.orgAdminName}} {{orderDetail.orgAdminMobile}}</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
              <div class="text-left">签约人</div>
          </el-col>
          <el-col :span="19">{{orderDetail.contactName}} {{orderDetail.contactGender===1?'男':'女'}} {{orderDetail.contactMobile}}</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">交租方式</div>
          </el-col>
          <el-col :span="19">{{orderDetail.rentTypeName}}</el-col>
        </el-row>
        <el-row  :gutter="20">
          <el-col :span="5">
            <div class="text-left">租期</div>
          </el-col>
          <el-col :span="19">{{orderDetail.monthNum}}个月</el-col>
        </el-row>
        <el-row  :gutter="20">
          <el-col :span="5">
            <div class="text-left">租约起止日</div>
          </el-col>
          <el-col :span="19">{{orderDetail.startTime}}～{{orderDetail.endTime}}</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">房价</div>
          </el-col>
          <el-col :span="19">{{orderDetail.rentFee}}元</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">押金</div>
          </el-col>
          <el-col :span="19">{{orderDetail.depositFee}}元</el-col>
        </el-row>

        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">每期固定费用</div>
          </el-col>
          <el-col :span="19">{{orderDetail.serviceChargePrice}}元</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">一次性费用</div>
          </el-col>
          <el-col :span="19">{{orderDetail.onceFee}}元</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">出房费率</div>
          </el-col>
          <el-col :span="19">{{orderDetail.splitFee}}%</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">出房收入</div>
          </el-col>
          <el-col :span="19">{{orderDetail.splitMoney}}元</el-col>
        </el-row>
        <el-row :gutter="20"  class='pad-bot'>
          <el-col :span="5">
            <div class="text-left">租房合同</div>
          </el-col>
          <el-col :span="19">
            <el-button size="mini" @click="lookcontract(orderDetail.contractUrl)"   v-if='orderDetail.uploadFlag===1'>查看合同</el-button>
            <el-button size="mini"  type="primary" plain v-else>未上传</el-button>

          </el-col>
        </el-row>
        <el-row :gutter="20" v-show='orderDetail.status === 99'>
          <el-col :span="5">
            <div class="text-left">退房时间</div>
          </el-col>
          <el-col :span="19">{{orderDetail.outDate}}</el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
        </div>
      </el-dialog>
      <SourceDetail ref='sourceDetail'></SourceDetail>
  </div>
</template>
<script>
import {
  getbackOrderInfoApi } from '@/api/achievementCenter'
import SourceDetail from './sourceDetail'
export default {
  data() {
    return {
      dialogFormVisible: false,
      orderDetail: {}
    }
  },
  components: {
    SourceDetail
  },
  methods: {
    goSourceDetail(id) {
      this.$refs.sourceDetail.getOrderDetil(id)
      // this.$router.push({ path: '/achievementCenter/intentionalSource', query: { customerId: id }})
    },
    lookcontract(url) {
      window.open(url)
    },
    getOrderDetilShow(id) {
      const params = {
        orderNo: id
      }
      this.dialogFormVisible = true
      getbackOrderInfoApi(params).then(res => {
        this.orderDetail = res.data
      })
    }
  }
}
</script>
<style scoped>
   .pad-bot{
     padding-bottom: 10px;
     padding-top:10px;
   }
</style>

