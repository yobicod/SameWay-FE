import axiosClient from '../lib/axiosClient';
export const checkDriver = async (email: string) => {
  try {
    const { data } = await axiosClient.get<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/driver/is-driver-in-system/${email}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
