import axiosClient from '../lib/axiosClient';

export const getUserHistory = async (email: string) => {
  try {
    const result = await axiosClient.get(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/get-booking-by-user-email/${email}`
    );
    return result.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: get-user-history.ts:10 ~ getUserHistory ~ error:',
      error
    );
  }
};
