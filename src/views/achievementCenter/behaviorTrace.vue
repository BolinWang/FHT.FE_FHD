/*
 * @Author: ghost 
 * @Date: 2018-09-30 01:24:32 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-11 16:31:39
 */

<template>
  <div class='container'>
    <el-tabs type="border-card" v-model="type" >
      <el-tab-pane label="实时位置" :name="'1'">
        <nowBehaviorPosition 
        v-if="type==='1'"></nowBehaviorPosition>
      </el-tab-pane>
      <el-tab-pane label="工作轨迹" :name="'0'">
        <WorkTrailRecord v-if="type==='0'"></WorkTrailRecord>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import NowBehaviorPosition from './compents/nowBehaviorPosition'
import WorkTrailRecord from './compents/workTrailRecord'
export default {
  components: {
    NowBehaviorPosition,
    WorkTrailRecord
  },
  data() {
    return {
      type: '1'
    }
  },
  mounted() {

  },
  created() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
   .container{
     padding: 20px;
   }
    .el-form-item{
      margin-bottom: 0px;
    }
</style>

