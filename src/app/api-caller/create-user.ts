import { ICreateUser } from './interfaces/interfaces'
import axiosClient from '../lib/axiosClient'

export const createUser = async (userData: ICreateUser) => {
  try {
    const result = await axiosClient.post<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/user/create-user`,
      userData
    )
    return result
  } catch (error) {
    console.log('🚀 ~ file: create-user.ts:10 ~ createUser ~ error:', error)
  }
}
