/*
 * @Author: FT.FE.Bolin 
 * @Date: 2018-04-11 16:31:28 
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-07-02 17:32:58
 */

let path = require('path')
/* 本地联调后端IP地址 */
let proxyIPs = {
  HOUTAI: 'http://192.168.5.243:8080/'
}
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: proxyIPs.HOUTAI,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    host: 'localhost',
    port: 8888,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false,
    devtool: 'eval-source-map',
    cacheBusting: true,
    cssSourceMap: false,
    useEslint: true,
    showEslintErrorsInOverlay: false
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}