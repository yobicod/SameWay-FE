import axios from 'axios'
import { ICreateDriver } from './interfaces/interfaces'
import { log } from 'console'

export const createDrivers = async (data: ICreateDriver) => {
  try {
    console.log(data)
    const result = await axios.post('http://localhost:3001/driver', data)
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}
