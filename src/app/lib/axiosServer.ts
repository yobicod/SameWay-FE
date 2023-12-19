import axios from 'axios'
import { cookies } from 'next/headers'
const baseURL = process.env.NEXT_PUBLIC_API_URL
const isServer = typeof window === 'undefined'

const axiosServer = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosServer.interceptors.request.use(async (config) => {
  if (isServer) {
    const token = cookies().get('next-auth.session-token')?.value || ''
    if (token) {
      config.headers['Authorization'] = token
    }
  }
  return config
})
export default axiosServer
