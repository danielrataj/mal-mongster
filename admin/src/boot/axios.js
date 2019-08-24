import axios from 'axios'

const baseUrl = `${window.location.protocol}//${window.location.hostname}:1337`

export default ({ Vue }) => {
  let client = axios.create({
    baseURL: baseUrl,
    timeout: 30000
  })

  Vue.prototype.$axios = client
}
