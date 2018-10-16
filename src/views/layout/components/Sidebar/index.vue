/*
 * @Author: FT.FE.Bolin 
 * @Date: 2018-04-11 17:11:31 
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-16 14:01:32
 */

<template>
  <el-menu mode="vertical" :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <sidebar-item :routes='permission_routers'>
    </sidebar-item>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers'
    ])
  },
  mounted() {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  min-height: 100%;
  -moz-user-select:none;
  -webkit-user-select:none;
  user-select:none;  
}
</style>
