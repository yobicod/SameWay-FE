export interface IDriverInfo {
  // id: number;
  driverFirstName: string
  driverLastName: string
  plate: string
  lastName: string
  sex: string
  phoneNumber: string
}
export interface IEnumGender {
  value: string
  description?: string
}
export interface IDriverSearch {
  nowLocation: string
  destination: string
  notes: string
}
export interface IUpdateUser {
  fullName?: string
  email: string
  role?: string
}
export interface ICreateUser {
  fullName: string
  email: string
  role: string
}
