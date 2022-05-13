<template>
  <div>
    <el-upload ref="uploadfiles"
               action="#"
               :http-request="Upload"
               :multiple="false"
               :show-file-list="false"
               class="upload-btn"
               accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
      <el-button size="small"
                 type="primary">导入门店模板明细</el-button>
    </el-upload>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data () {
    return {}
  },
  methods: {
    Upload (params) {
      const file = params.file
      // 根据后台需求数据格式
      const form = new FormData()
      // 文件对象
      form.append('file', file)
      // 上传excel时，将请求头的responseType设置为blob类型
      api.uploadExcel(form, { responseType: 'blob' }).then(res => {
        if (res.code === 0) {
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
  }
}
</script>
