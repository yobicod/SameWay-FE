import axios, { AxiosResponse } from "axios";
import { IDriverInfo } from "./interfaces/interfaces";

export const getAllDrivers = async () => {
  try {
    const result: IDriverInfo = await axios.get("http://localhost:3001/driver");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
