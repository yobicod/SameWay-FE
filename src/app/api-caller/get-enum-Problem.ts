import axiosServer from '../lib/axiosServer';
import { IEnum } from './interfaces/interfaces';

export const getEnumProblem = async (): Promise<IEnum[] | undefined> => {
  try {
    const result = await axiosServer.get(
      `${process.env.NEXT_PUBLIC_API_URL}/feedback/enum-problems`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log('🚀 ~ file: get-gender.ts:9 ~ getGender ~ error:', error);
  }
};
