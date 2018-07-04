# FHT.FE_fhd_system

飞虎队后台

## 开发
```bash
	# 克隆项目
	git clone http://116.62.130.63:3000/FHT.FE/FHT.FE_fhd_system.git

	# 安装依赖
	npm install
	   
	# 建议不要用cnpm安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
	npm install --registry=https://registry.npm.taobao.org

	# 启动服务
	npm run dev
```
浏览器访问 http://localhost:8888

## 发布
```bash
  # 构建开发环境
	npm run build:dev

	# 构建测试环境
	npm run build:sit

	# 构建生成环境
	npm run build:prod
```



## License

MIT