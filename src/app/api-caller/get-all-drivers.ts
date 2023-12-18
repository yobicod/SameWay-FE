import axiosServer from '../lib/axiosServer'
import { IDriverInfo } from './interfaces/interfaces'

export const getAllDrivers = async () => {
  try {
    const result: IDriverInfo = await axiosServer.get(
      `${process.env.NEXT_PUBLIC_API_URL}/driver`
    )
    return result
  } catch (error) {
    console.log(
      '🚀 ~ file: get-all-drivers.ts:9 ~ getAllDrivers ~ error:',
      error
    )
  }
}
