import axios from 'axios'
import qs from 'qs'
// import cookie from '../utils/cookie'
axios.defaults.baseURL = baseUrl

axios.interceptors.request.use(
  function (config) {
    // 请求拦截器

    return config
  },
  function (err) {
    showErrToast(err)
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  function (res) {
    // 响应拦截器
    return res.data
  },
  function (err) {
    showErrToast(err)
    Promise.reject(err)
  }
)

function showErrToast(e) {
  if (e) {
    alert(e)
  }
}

function getPromise(url, data, method, header) {
  let params = null
  if (method == 'get') {
    params = {
      params: data
    }
  }
  let headers = {
    'content-type': 'application/json'
  }
  if (header == 'formdata') {
    headers = {
      'content-type': 'application/x-www-form-urlencoded'
    }
    data = qs.stringify(data)
  }
  return new Promise((resolve, reject) => {
    axios
      .request({
        url: url,
        data: data,
        headers,
        ...params,
        method: method
      })
      .then((res) => {
        resolve(res)
      })
      .catch((e) => {
        reject(e)
      })
  }).catch((e) => {
    showErrToast(e)
  })
}

const http = {
  get: (url, data) => {
    return getPromise(url, data, 'get')
  },
  post: (url, data, header) => {
    return getPromise(url, data, 'post', header)
  },
  put: (url, data) => {
    return getPromise(url, data, 'put')
  },
  delete: (url, data) => {
    return getPromise(url, data, 'delete')
  }
}

export default http
