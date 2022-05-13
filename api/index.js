import http from '../utils/http'
const apiUrl = {
  uploadExcel: ''
}
const api = {
  uploadExcel: (data, headers) => {
    return http.post(apiUrl.uploadExcel, data, headers)
  }
}
export default api
