<template>
  <div class="app-container">
    <div class="dataWrap" v-for="data in dataList" :key="data.title">
      <el-card class="box-card">
        <div slot="header">
          <span>{{data.title}}</span>
        </div>
        <el-button-group>
          <el-button type="primary"
            v-for="item in data.btnList" :key="item.name"
            :disabled="!item.link"
            @click="routerToBI(item.link)">
            {{item.name}}
          </el-button>
        </el-button-group>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'dataFromBI',
  data() {
    return {
      dataList: [
        {
          title: '基础数据',
          btnList: [
            {name: '个人·每天', link: 'https://bi.maguanjia.com/fh/ReportServer?reportlet=fh%2FPivot%2F%5B4e2a%5D%5B4eba%5D-%5B6bcf%5D%5B5929%5D.cpt'},
            {name: '部门·每天', link: 'https://bi.maguanjia.com/fh/ReportServer?reportlet=fh%2FPivot%2F%5B90e8%5D%5B95e8%5D-%5B6bcf%5D%5B5929%5D.cpt'},
            {name: '个人·时间区间', link: 'https://bi.maguanjia.com/fh/ReportServer?reportlet=fh%2FPivot%2F%5B4e2a%5D%5B4eba%5D-%5B65f6%5D%5B95f4%5D%5B533a%5D%5B95f4%5D.cpt'},
            {name: '部门·时间区间', link: 'https://bi.maguanjia.com/fh/ReportServer?reportlet=fh%2FPivot%2F%5B90e8%5D%5B95e8%5D-%5B65f6%5D%5B95f4%5D%5B533a%5D%5B95f4%5D.cpt'},
            {name: '客源基础数据', link: 'https://bi.maguanjia.com/fh/ReportServer?reportlet=fh%2FftData%2F%5B5ba2%5D%5B6e90%5D%5B57fa%5D%5B7840%5D%5B6570%5D%5B636e%5D.cpt'},
            {name: '订单基础数据', link: 'https://bi.maguanjia.com/fh/ReportServer?reportlet=fh%2FftData%2F%5B98de%5D%5B864e%5D%5B961f%5D%5B6240%5D%5B6709%5D%5B8ba2%5D%5B5355%5D%5B72b6%5D%5B6001%5D.cpt'},
            {name: '出房收入基础数据', link: ''}
          ]
        },
        {
          title: '统计数据',
          btnList: [
            {name: '业务统计数据', link: 'https://bi.maguanjia.com/fh/ReportServer?reportlet=fh%2FftData%2F%5B98de%5D%5B864e%5D%5B961f%5D%5B4e1a%5D%5B7ee9%5D%5B6570%5D%5B636e%5D%5B7edf%5D%5B8ba1%5D--%5B6309%5D%5B6708%5D%5B7ef4%5D%5B5ea6%5D.cpt'}
          ]
        }
      ]
    }
  },
  methods: {
    routerToBI(url) {
      if (!url) {
        this.$message.error('BI链接无效')
        return false
      }
      let userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
      if (!userInfo.mobile || !userInfo.password) {
        this.$message.error('用户信息丢失，请重新登录后重试')
        return false
      }
      let newPage = window.open()
      newPage.document.title = 'BI权限识别中...'
      axios.get(window.location.protocol + '//bi.mdguanjia.com/fh/ReportServer?op=fs_load&cmd=sso', {
        withCredentials: true,
        params: {
          fr_username: userInfo.mobile,
          fr_password: userInfo.password
        }
      }).then((response) => {
        console.log(response)
        if (response.data.includes('fail')) {
          this.$message.error('该账号无权查看，请联系管理员')
          newPage.document.write('该账号无权查看，请联系管理员')
        } else {
          newPage.location.href = url
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('请求BI失败，请联系管理员')
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" scoped>
  .dataWrap {
    margin-bottom: 20px;
  }
</style>


