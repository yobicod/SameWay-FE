export interface IDriverInfo {
  fullName: string;
  plate: string;
  carType: string;
  sex: string;
  phoneNumber: string;
  userEmail: string;
}
export interface IEnumGender {
  value: string;
  description?: string;
}
export interface IDriverSearch {
  nowLocation: string;
  destination: string;
  notes: string;
}
export interface IUpdateUser {
  fullName?: string;
  email: string;
  role?: string;
}
export interface ICreateUser {
  fullName: string;
  email: string;
  role: string;
}
