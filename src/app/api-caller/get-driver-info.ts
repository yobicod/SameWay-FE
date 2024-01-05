import axiosClient from '../lib/axiosClient';
import { IDriverInfo } from './interfaces/interfaces';

export const getDriverInfo = async (
  email: string
): Promise<IDriverInfo | undefined> => {
  try {
    const result = await axiosClient.get(
      `${process.env.NEXT_PUBLIC_API_URL}/driver/get-driver-info-by-user-email/${email}`
    );
    if (result) {
      return result.data;
    }
  } catch (_) {
    // console.log(error);
  }
};
