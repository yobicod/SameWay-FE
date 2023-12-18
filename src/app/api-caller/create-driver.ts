import { IDriverInfo } from './interfaces/interfaces'
import { axiosClient } from '../lib/axiosInstance'

const test = {
  driverFirstName: 'ccc',
  driverLastName: 'ccc',
  plate: 'ccc',
  carType: 'ccc',
  sex: 'ccc',
  phoneNumber: 'ccc',
}

export const createDriver = async (driverInfo: IDriverInfo) => {
  try {
    const { data } = await axiosClient().post<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/driver/create`,
      driverInfo,
      {
        headers: {
          Authorization: 'First sud lhor',
        },
      }
    )
    return alert('register complete')
  } catch (error) {
    console.log('🚀 ~ file: create-driver.ts:5 ~ createDriver ~ error:', error)
  }
}
