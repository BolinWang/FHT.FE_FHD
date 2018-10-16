/*
 * @Author: ghost 
 * @Date: 2018-10-08 15:07:24 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-16 20:35:39
 */
<template>
   <div class="tablebox" ref="viewBox" :style="listHeight" v-loading='loading'>
     <div class="tab-Item"  
      :key='index'
      @click='chooseManagerId(butlerListItem,index)'
      :class="{'active':chooseIndex === index}"
      v-for='(butlerListItem,index) in butlerList'>
      <el-row class="top" >
        <el-col :span="5" >
          <el-tooltip  :content="butlerListItem.name" placement="top">
            <span class="name">{{butlerListItem.name}}</span>
          </el-tooltip>
        </el-col>
        <el-col :span="10">
          <span class="mobile">{{butlerListItem.mobile}}</span>
        </el-col>
        <el-col :span="5" v-if="butlerListItem.isDelete || butlerListItem.isDelete==0">
          <span class="name">{{butlerListItem.isDelete | deleteFilter }}</span>
        </el-col>
        <el-col :span="4" v-if="butlerListItem.type">
          <span class="mobile">{{butlerListItem.type | typeFilter}}</span>
        </el-col>
        <el-col :span="5" v-if="butlerListItem.status||butlerListItem.status===false">
          <span class="mobile" v-if="butlerListItem.status">工作中</span>
        </el-col>
      </el-row>
      </div>
   </div>
</template>
<script>
export default {
  props: {
    listHeight: {
      type: Object
    },
    butlerList: {
      type: Array
    },
    getBulter: {
      type: Function
    },
    chooseIndex: null
  },
  data() {
    return {
      loading: true
    }
  },
  filters: {
    deleteFilter(val) {
      const valueDelete = [
        {
          value: 0,
          label: '在职'
        }, {
          value: 1,
          label: '离职'
        }, {
          value: 2,
          label: ''
        }
      ]
      return valueDelete[val].label
    },
    typeFilter(val) {
      const InserviceList = [
        {
          value: 0,
          label: '试用'
        }, {
          value: 1,
          label: '正式'
        }, {
          value: 2,
          label: '失效'
        }
      ]
      return InserviceList[val].label
    }
  },
  mounted() {
    this.loading = false
    this.box = this.$refs.viewBox // 监听这个dom的scroll事件
    this.box.addEventListener('scroll', () => {
      if (this.$refs.viewBox.scrollTop + this.$refs.viewBox.clientHeight >= this.$refs.viewBox.scrollHeight) {
        this.loadMore()
      }
    })
  },
  methods: {
    chooseManagerId(item, index) {
      this.$emit('getManagerId', item, index)
    },
    loadMore() {
      if (this.getBulter) {
        this.getBulter()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tablebox{
  overflow: auto;
}
.name{
  width:50px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tab-Item{
  background: rgba(3, 56, 93, 0.4);
  margin-bottom: 15px;
  line-height: 30px;
  cursor:pointer;
  color: #fff;
  .top{
    padding: 0 10px;
  }
}
.active{
  background: #1e97fa;
}
</style>

