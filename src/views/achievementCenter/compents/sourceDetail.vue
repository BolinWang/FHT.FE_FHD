/*
 * @Author: ghost 
 * @Date: 2018-10-09 10:39:52 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-18 17:09:05
 */
<template>
  <div class="container">
     <el-dialog title="客源详情" width="700px" :visible.sync="dialogFormVisible" >
       <div>
          <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
            <div class="text-right">客源号</div>
          </el-col>
          <el-col :span="19">
            <span class="pad-ri">{{orderDetail.id}}</span>
            <el-button size="mini" type="primary" v-show='orderDetail.status === 2'>已签约</el-button>
            <el-button size="mini" type="danger" v-show='orderDetail.status === 1'>未签约</el-button>
            <el-button size="mini" type="primary" @click="goDeaLease(orderDetail.orderNo)" v-show='orderDetail.status === 2'>查看订单租约</el-button>
          </el-col>
        </el-row>
         <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
            <div class="text-right">创建时间</div>
          </el-col>
          <el-col :span="19">{{orderDetail.createTime}}</el-col>
        </el-row>
         <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
            <div class="text-right"> 创建人</div>
          </el-col>
          <el-col :span="19">{{orderDetail.createName}}</el-col>
        </el-row>
         <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
            <div class="text-right">租客姓名</div>
          </el-col>
          <el-col :span="19">{{orderDetail.name}}</el-col>
        </el-row>
         <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
            <div class="text-right">手机号码</div>
          </el-col>
          <el-col :span="19">{{orderDetail.mobile}}</el-col>
        </el-row>
         <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
              <div class="text-right">客源渠道</div>
          </el-col>
          <el-col :span="19">{{orderDetail.sourceName}}~{{orderDetail.sourceTypeName}}</el-col>
        </el-row>
         <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
            <div class="text-right">租客要求</div>
          </el-col>
          <el-col :span="19">
            <el-button  type="primary" size="mini" plain>{{orderDetail.rentFeeName}}</el-button>
            <el-button type="primary" size="mini" plain v-if="orderDetail.houseType">{{orderDetail.houseType | houseTypeFilter}}</el-button> 
            <el-button type="primary" size="mini" plain  v-if="orderDetail.roomType">{{orderDetail.roomType | roomTypeFilter}}</el-button>
            <el-button type="primary" size="mini" plain  v-if="orderDetail.houseDirection">{{orderDetail.houseDirection | houseDirectionFilter}}</el-button>
            <el-button type="primary" size="mini" plain  
            v-if="orderDetail.houseFeatureList"
            :key = 'index'
              v-for='(house,index) in houseFeature'>
              {{house}}
            </el-button>
          </el-col>
        </el-row>
        <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
            <div class="text-right">意向板块</div>
          </el-col>
          <el-col :span="19">
            <el-button type="primary" size="mini" plain  
            v-if="orderDetail.customerAreas"
            v-for='(customerAreasItem,index) in orderDetail.customerAreas'
            :key = 'index'>
              {{customerAreasItem.name}}
            </el-button>
          </el-col>
        </el-row>
         <el-row  :gutter="20" class="pad-t">
          <el-col :span="5">
            <div class="text-right">备注</div>
          </el-col>
          <el-col :span="19">{{orderDetail.remark}}</el-col>
        </el-row>
       </div>
       <div slot="footer" class="dialog-footer">
         <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
       </div>
     </el-dialog>
     
  </div>
</template>
<script>
import {
  getBackCustomerInfoApi
} from '@/api/achievementCenter'

export default {
  data() {
    return {
      orderDetail: {},
      houseFeature: [],
      dialogFormVisible: false
    }
  },
  filters: {
    houseDirectionFilter(val) {
      const houseDirection = [
        {
          value: 1,
          label: '朝南'
        }, {
          value: 2,
          label: '朝北'
        }, {
          value: 3,
          label: '朝东'
        }, {
          value: 4,
          label: '朝西'
        }
      ]
      return houseDirection.filter(item => {
        return item.value === val
      })[0].label
    },
    houseTypeFilter(val) {
      const houseType = [
        {
          value: 1,
          label: '合租'
        }, {
          value: 2,
          label: '整租'
        }, {
          value: 3,
          label: '公寓'
        }
      ]
      return houseType.filter(item => {
        return item.value === val
      })[0].label
    },
    roomTypeFilter(val) {
      const roomType = [
        {
          value: 1,
          label: '1室'
        }, {
          value: 2,
          label: '2室'
        }, {
          value: 3,
          label: '3室'
        }, {
          value: 4,
          label: '4室'
        }, {
          value: 5,
          label: '4室以上'
        }
      ]
      return roomType.filter(item => {
        return item.value === val
      })[0].label
    }
  },
  methods: {
    goDeaLease(orderNo) {
      this.$emit('showdeal', orderNo)

      // this.$router.push({ path: '/achievementCenter/dealLease', query: { orderNo: orderNo }})
    },
    getOrderDetil(id) {
      this.dialogFormVisible = true
      this.houseFeature = []
      getBackCustomerInfoApi({ customerId: id }).then(res => {
        this.orderDetail = res.data
        this.orderDetail.houseFeatureList && this.houseFeatureFilter(this.orderDetail.houseFeatureList)
      })
    },
    houseFeatureFilter(val) {
      const houseFeatureAll = [
        {
          value: '1',
          label: '独立卫生间'
        }, {
          value: '2',
          label: '独立阳台'
        }, {
          value: '3',
          label: '独立厨房'
        }, {
          value: '4',
          label: '飘窗'
        }
      ]
      val.map(item => {
        houseFeatureAll.forEach(v => {
          if (v.value === item) {
            this.houseFeature.push(v.label)
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .text-right{
    text-align:right;
  }
  .pad-t{
    padding-top:10px;
  }
</style>


