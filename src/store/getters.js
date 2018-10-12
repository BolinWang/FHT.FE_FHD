/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:08:35
 * @Last Modified by: ghost
 * @Last Modified time: 2018-10-12 14:12:12
 */
const getters = {
  sidebar: state => state.app.sidebar,
  sessionId: state => state.user.sessionId,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  depId: state => state.user.depId,
  roles: state => state.user.roles,
  powerButton: state => state.permission.powerButton, // 按钮权限
  permission_routers: state => state.permission.routers, // 现有路由
  addRouters: state => state.permission.addRouters, // 添加路由
  visitedViews: state => state.tagsView.visitedViews
}
export default getters
