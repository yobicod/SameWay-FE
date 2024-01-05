import axiosServer from '../lib/axiosServer';
import { IEnum } from './interfaces/interfaces';

export const getEnumCarTypes = async (): Promise<IEnum[] | undefined> => {
  try {
    const result = await axiosServer.get(
      `${process.env.NEXT_PUBLIC_API_URL}/driver/enum-car-types`
    );
    return result.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: get-enum-car-types.ts:11 ~ getEnumCarTypes ~ error:',
      error
    );
  }
};
