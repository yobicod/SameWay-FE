import { AxiosResponse } from 'axios'
import axiosServer from '../lib/axiosServer'
import { IEnumGender } from './interfaces/interfaces'
export const getGender = async (): Promise<IEnumGender[] | undefined> => {
  try {
    const result = await axiosServer.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/enum-genders`
    )
    return result.data
  } catch (error) {
    console.log('🚀 ~ file: get-gender.ts:9 ~ getGender ~ error:', error)
  }
}
