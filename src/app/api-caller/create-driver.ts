import axios, { Axios, AxiosResponse } from "axios";
import { IDriverInfo } from "./interfaces/interfaces";

const test = {
  driverFirstName: "ccc",
  driverLastName: "ccc",
  plate: "ccc",
  carType: "ccc",
  sex: "ccc",
  phoneNumber: "ccc",
};

export const createDriver = async (driverInfo: IDriverInfo) => {
  try {
    const { data } = await axios.post<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/driver/create`,
      driverInfo,
      {
        headers: {
          Authorization: "First sud lhor",
        },
      }
    );
    return alert("register complete");
  } catch (error) {
    console.log("🚀 ~ file: create-driver.ts:5 ~ createDriver ~ error:", error);
  }
};
