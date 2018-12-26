import axios from 'axios'
import store from '../store'

export default {
  install (Vue) {

    Vue.prototype.$http = axios
    Vue.prototype.$http.defaults.baseURL = 'http://localhost:9172/'
    // Vue.prototype.$http.defaults.baseURL = process.env.axiosDefaults.baseUrl.replace(/(crm|www)\.usinternet\.com/i, window.location.hostname)
    Vue.prototype.$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    Vue.prototype.$http.interceptors.response.use((response) => response, (error) => {
      if (error.response) {
        if ([401, 403].includes(error.response.status)) {
          store.commit('clearAuth')
        }

        if (error.response.data && error.response.data.errors) {
          console.error(error.response.data.errors.join('<br/>'))
        } else {
          console.error(error.response.data || error.message)
        }
      } else if (error.request) {
        console.error('Error: no response received')
      } else {
        console.error('Error: ' + error.message)
      }

      return Promise.reject(error)
    })
    Vue.prototype.$http.interceptors.request.use((config) => {
      let token = store.getters.authToken
      if (token !== false) {
        config.headers['Authorization'] = 'Bearer ' + token
      }
      return config
    }, (error) => Promise.reject(error))
  }
}
