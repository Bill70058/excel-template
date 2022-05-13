<template>
  <div>
    <el-button type="primary"
               size="small"
               @click="handleDownloadBtn">下载excel模板</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        orderNum: '1',
        uploadtimes: '2021.12.7',
        custername: 'admin'
      }]
    }
  },
  methods: {
    handleDownloadBtn () {
      import('./vendor/Export2Excel').then(excel => {
        const tHeader = ['门店号', '门店名称', '大区', '办事处', '主管', '主管工号', '责任人', '责任人工号', '门店信息', '报备'] // 对应的label
        const filterVal = [] // 对应的prop
        const list = this.list
        // 格式化数据源
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '模板'
        })
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
  }
}
</script>