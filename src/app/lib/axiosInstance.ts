import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL
const isServer = typeof window === 'undefined'
// let token = ''
// if (isServer) {
// const token = cookies().get('next-auth.session-token')?.value || ''
// let token = ''
// if (!isServer) token = document.cookie
// const token = document.cookie
// console.log('token', token, 'isServer', isServer)

export const axiosClient = () => {
  const axiosIns = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'token',
    },
  })
  return axiosIns
}

// api.interceptors.request.use(async (config) => {
if (isServer) {
  // const token = cookies().get('next-auth.session-token')?.value || ''
  console.log('token', 'as')
  // if (token) {
  // config.headers['Authorization'] = token
  // }
} else {
  const token = document.cookie

  if (token) {
    // config.headers['Authorization'] = token
  }
}

// return config
// })
