import axiosClient from '../lib/axiosClient';
import { ICreateFeedback } from './interfaces/interfaces';

export const createFeedback = async (feedbackData: ICreateFeedback) => {
  try {
    const { data } = await axiosClient.post<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/feedback/create`,
      feedbackData
    );
    return data;
  } catch (error) {
    console.log(
      '🚀 ~ file: create-feedback.ts:5 ~ createFeedback ~ error:',
      error
    );
  }
};
