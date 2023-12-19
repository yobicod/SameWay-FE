import { IUpdateUser } from './interfaces/interfaces'
import axiosClient from '../lib/axiosClient'

export const updateDriver = async (newUserInfo: IUpdateUser) => {
  try {
    const result = await axiosClient.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update-user`,
      newUserInfo
    )
    return result
  } catch (error) {
    console.log('🚀 ~ file: update-user.ts:12 ~ updateDriver ~ error:', error)
  }
}
