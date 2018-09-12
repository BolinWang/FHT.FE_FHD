/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:11:36
 * @Last Modified by: 
 * @Last Modified time: 2018-09-06 21:34:18
 */

<template>
  <div>
    <div v-for="(item, itemIndex) in routes" :key="itemIndex">
      <template>
        <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.children[0].path">
          <el-menu-item :index="item.path">
            <i class="iconfont" :class="[item.icon]"></i>{{item.children[0].menuName}}
          </el-menu-item>
        </router-link>
        <el-submenu :index="item.menuName" v-if="!item.noDropdown&&!item.hidden">
          <template slot="title">
             <i class="iconfont" :class="[item.icon]"></i>{{item.menuName}}
          </template>
          <div v-for="(child, childIndex) in item.children" v-if='!child.hidden' :key="childIndex">
            <template>
              <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
              <router-link v-else class="menu-indent" :to="child.path">
                <el-menu-item :index="child.path">
                  {{child.menuName}}
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
import { getInfo } from '@/api/login'
import { roleMenusListApi } from '@/api/organization'
import { getSessionId } from '@/utils/auth'
export default {
  name: 'SidebarItem',
  data() {
    return {
      roleId: '',
      routes: []
    }
  },
  // props: {
  //   routes: {
  //     type: Array
  //   }
  // },
  mounted() {
    getInfo(getSessionId()).then(res => {
      this.roleId = res.data.roleId
      roleMenusListApi({roleId: this.roleId}).then(res => {
        console.log(res)
        this.routes = res.data
      })
    })
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.iconfont {
  margin-right: 11px;
  position: relative;
  top: -2px;
  color: #fff;
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
