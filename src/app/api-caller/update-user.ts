import axios from 'axios'
import { IUpdateUser } from './interfaces/interfaces'

export const updateDriver = async (newUserInfo: IUpdateUser) => {
  try {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update-user`,
      newUserInfo
    )
    return console.log('update user success')
  } catch (error) {
    console.log('🚀 ~ file: update-user.ts:12 ~ updateDriver ~ error:', error)
  }
}
