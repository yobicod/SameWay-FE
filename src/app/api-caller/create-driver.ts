import axiosClient from '../lib/axiosClient';
import { IDriverInfo } from './interfaces/interfaces';

export const createDriver = async (driverInfo: IDriverInfo) => {
  try {
    const { data } = await axiosClient.post<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/driver/create`,
      driverInfo
    );
    return data;
  } catch (error) {
    console.log('🚀 ~ file: create-driver.ts:5 ~ createDriver ~ error:', error);
  }
};
