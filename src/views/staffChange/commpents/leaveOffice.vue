<template>
  <div class="container-box">
    <div class="table-box" >
       <el-table
        size="small"
        :data="staffDataList"
        :max-height="tableHeight"
        style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
           v-for='(item, index) in columns'
          :key="index"
          :prop="item.prop"
          :label='item.label'>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    staffDataList: Array,
    columns: {
      type: Array,
      label: {
        type: String
      },
      prop: {
        type: String
      }
    }
  },
  data() {
    return {
      tableHeight: null
    };
  },
  mounted() {
    /* 表格高度控制 */
    let tempHeight = document.body.clientHeight - 280;
    this.tableHeight = tempHeight > 400 ? tempHeight : 400;
    window.onresize = () => {
      return (() => {
        tempHeight = document.body.clientHeight - 280;
        this.tableHeight = tempHeight > 400 ? tempHeight : 400;
      })();
    };
  },
  computed: {
    tableStyle: function () {
      return {
        width: '100%',
        height: this.tableHeight + 'px'
      };
    }
  },
  methods: {

  }
};
</script>
<style scoped>
  .table-box{
    padding-top:20px;
  }
</style>
