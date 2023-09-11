/* eslint-disable */
import axios from 'axios'

export const API_URL = 'http://185.215.187.179:8080/api/v1'

const $api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status === 403 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.put<any>(`${API_URL}/auth/token`)
        localStorage.setItem('token', response.data.acceptToken)
        return $api.request(originalRequest)
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН')
      }
    }
    throw error
  },
)

export default $api
