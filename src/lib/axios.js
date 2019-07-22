import axios from 'axios'
import config from '../../config'
let url
if (process.env.NODE_ENV === 'development') {
  url = config.dev.serviceUrl
} else if (process.env.NODE_ENV === 'staging') {
  url = config.staging.serviceUrl
} else {
  url = config.build.serviceUrl
}

const api = axios.create({
  baseURL: url,
  timeout: 7000,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
