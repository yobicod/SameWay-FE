import axios from 'axios'
import { ICreateUser } from './interfaces/interfaces'

export const createUser = async (userData: ICreateUser) => {
  const header = {
    'Content-Type': 'application/json',
    Authorization: 'JWT fefege...',
  }
  const config = {
    headers: {
      user_token: 'Bearer ksdjfglksgflksgsjdhglaslfkhgasf',
      Accept: 'application/json',
    },
  }
  try {
    const result = await axios.post<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/user/create-user`,
      userData,
      config
    )
    return result
  } catch (error) {
    console.log('🚀 ~ file: create-user.ts:10 ~ createUser ~ error:', error)
  }
}
