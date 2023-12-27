import axiosClient from '../lib/axiosClient';
import { ICreateReport } from './interfaces/interfaces';

export const createReport = async (reportData: ICreateReport) => {
  try {
    const { data } = await axiosClient.post<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/report/create`,
      reportData
    );
    return data;
  } catch (error) {
    console.log('🚀 ~ file: create-report.ts:5 ~ createReport ~ error:', error);
  }
};
