import axios, { Axios, AxiosResponse } from 'axios'
import { IDriverSearch } from './interfaces/interfaces'

export const createSearch = async (searchInfo: IDriverSearch) => {
  try {
    // const { data } = await axios.post<boolean>(
    //   `${process.env.NEXT_PUBLIC_API_URL}/driver`,
    //   searchInfo
    // )
    return alert('add search')
  } catch (error) {
    console.log('🚀 ~ file: create-driver.ts:5 ~ createDriver ~ error:', error)
  }
}
