import axios from 'axios'
import { ICreateDriver } from './interfaces/interfaces'
import { log } from 'console'

export const createDrivers = async (data: ICreateDriver) => {
  try {
    const result = await axios.post('http://localhost:3001/driver', data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}
