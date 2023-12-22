import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_API_URL
const isServer = typeof window === 'undefined'

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(async (config) => {
  if (!isServer) {
    const token = document.cookie.split('=')[1]

    if (token) {
      config.headers['Authorization'] = token
    }
  }

  return config
})
export default axiosClient
