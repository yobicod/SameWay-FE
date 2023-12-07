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
    const result = await axios.post<AxiosResponse<boolean>>(
      "http://localhost:3001/driver",
      test
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log("🚀 ~ file: create-driver.ts:5 ~ createDriver ~ error:", error);
  }
};
