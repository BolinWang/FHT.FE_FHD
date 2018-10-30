/*
 * @Author: ghost
 * @Date: 2018-10-30 11:19:54
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-30 14:42:12
 */
export function remoteLoad() {
  /**
   * 创建script
   * @param url
   * @returns {Promise}
   */
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//webapi.amap.com/maps?v=1.4.8&key=${process.env.AMAP_KEY}` // 高德地图
  document.body.appendChild(script)
}
