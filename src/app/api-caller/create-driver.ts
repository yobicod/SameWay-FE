import axios, { Axios, AxiosResponse } from "axios";

const test = {
  driverFirstName: "ccc",
  driverLastName: "ccc",
  plate: "ccc",
  carType: "ccc",
  sex: "ccc",
  phoneNumber: "ccc",
};

export const createDriver = async () => {
  try {
    const { data } = await axios.post<boolean>(
      "http://localhost:3001/driver",
      test
    );
    return data;
  } catch (error) {
    console.log("🚀 ~ file: create-driver.ts:5 ~ createDriver ~ error:", error);
  }
};
