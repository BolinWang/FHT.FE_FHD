/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 16:31:28
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-15 14:58:14
 */

let path = require('path')
/* 本地联调后端IP地址 */
let proxyIPs = {
  // HOUTAI: 'http://192.168.5.115:8080/back'
    ChenSheng: 'http://192.168.0.145:8080/back'
}
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/back': {
        target: proxyIPs.ChenSheng,
        changeOrigin: true,
        pathRewrite: {
          '^/back': ''
        }
      }
    },
    host: 'localhost',
    // host: '0.0.0.0',
    port: 9528,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false,
    devtool: 'eval-source-map',
    cacheBusting: true,
    cssSourceMap: false,
    useEslint: false,
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
