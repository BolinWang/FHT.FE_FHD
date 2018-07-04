/*
 * @Author: chenxing 
 * @Date: 2018-06-26 11:01:57 
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-07-04 10:47:23
 */
<template>
  <el-tree 
    ref="trees"
    :props="defaultProps" 
    lazy
    node-key="id"
    :load="loadNode"
    :highlight-current="true"
    :expand-on-click-node="false"
    :default-expanded-keys="[nowOrgObj.id]"
    @node-click="handleNodeClick">
  </el-tree>
</template>
<script>

export default {
  name: 'org-tree',
  
  created() {
    
  },


}

</script>

<style rel="stylesheet/scss" lang="scss">
  
</style>
