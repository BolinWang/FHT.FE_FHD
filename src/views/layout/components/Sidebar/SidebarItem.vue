/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:11:36
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-25 18:45:24
 */

<template>
  <div>
    <div v-for="(item, itemIndex) in routes" :key="itemIndex">
      <template>
        <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
          <el-menu-item :index="item.path+'/'+item.children[0].path">
            <i class="iconfont" :class="[item.icon]"></i>{{item.children[0].name}}
          </el-menu-item>
        </router-link>
        <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
          <template slot="title">
            <i class="iconfont" :class="[item.icon]"></i> {{item.name}}
          </template>
          <div v-for="(child, childIndex) in item.children" v-if='!child.hidden' :key="childIndex">
            <template>
              <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
              <router-link v-else class="menu-indent" :to="item.path+'/'+child.path">
                <el-menu-item :index="item.path+'/'+child.path">
                  {{child.name}}
                </el-menu-item>
              </router-link>
            </template>
          </div>
        </el-submenu>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  },
  mounted() {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.svg-icon {
  margin-right: 10px;
}

.hideSidebar .menu-indent {
  display: block;
  text-indent: 10px;
}

.el-submenu .el-menu-item {
  padding: 0;
  min-width: inherit;
}
</style>
