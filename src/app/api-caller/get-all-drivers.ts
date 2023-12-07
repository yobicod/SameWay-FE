import axios, { AxiosResponse } from "axios";
import { IDriverInfo } from "./interfaces/interfaces";

export const getAllDrivers = async () => {
  try {
    const result: IDriverInfo = await axios.get("http://localhost:3001/driver");
    return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: get-all-drivers.ts:9 ~ getAllDrivers ~ error:",
      error
    );
  }
};
