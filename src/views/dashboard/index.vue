/*
 * @Author: FT.FE.Bolin 
 * @Date: 2018-04-11 17:11:02 
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-07-11 16:17:05
 */

<template>
  <div class="dashboard-container">
    <p style="margin-top: 0;">{{roles | rolesFilter}}{{name}}</p>
    <div class="img-banner"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import bannerPic from '@/assets/banner1.jpg'
export default {
  name: 'dashboard',
  filters: {
    rolesFilter(value) {
      const valueMap = {
        'citySecretary': '【城市内勤】',
        'citySteward': '【城市管家】',
        'headman': '【组长】',
        'webmaster': '【站长】',
        'plateManage': '【板块经理】',
        'areaManage': '【区域经理】',
        'cityDirector': '【城市总】',
        'personnel': '【人事】',
        'operation': '【运营】',
        'admin': '【系统管理员】'
      }
      return valueMap[value] || '【未知用户】'
    }
  },
  data() {
    return {
      bannerPic: bannerPic
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {

  }
}

</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard {
  &-container {
    padding: 20px;
    .img-banner {
      height: 50vh;
      border-radius: 10px;
      background-color: #2d3a4b;
      background-image: url(../../assets/banner1.jpg);
      background-size: cover;
      background-position: center center;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
