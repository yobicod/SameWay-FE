import axios, { Axios, AxiosResponse } from 'axios'
import { IDriverInfo } from './interfaces/interfaces'

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
    const { data } = await axios.post<boolean>(
      'http://localhost:3001/driver',
      driverInfo
    )
    return alert('register complete')
  } catch (error) {
    console.log('🚀 ~ file: create-driver.ts:5 ~ createDriver ~ error:', error)
  }
}
