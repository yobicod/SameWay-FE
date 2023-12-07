export interface IDriverInfo {
  id: number;
  driverFirstName: string;
  driverLastName: string;
  plate: string;
  carType: string;
  sex: string;
  phoneNumber: string;
}
export interface ICreateDriver {
  driverFirstName: string;
  driverLastName: string;
  plate: string;
  carType: string;
  sex: string;
  phoneNumber: string;
}
