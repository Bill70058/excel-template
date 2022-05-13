# excel-template
vue2.x的excel导入导出操作模板代码
导入：
src -> component -> uploadExcel.vue
注意：
导入的时候需要将axios的请求头的responseType设置为blob
导出：
src -> component -> downExcel.vue
                 -> vendor -> export2excel.js

## 下载依赖
```
npm install
```

### 运行
```
npm run serve
```

### 构建
```
npm run build
```
参考文档：https://juejin.cn/post/7012189702849560590