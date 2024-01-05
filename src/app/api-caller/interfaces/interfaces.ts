export interface ICreateDriverInfo {
  fullName: string;
  // dob: string;
  dob: Date;
  plate: string;
  carType: string;
  model: string;
  gender: string;
  phoneNumber: string;
  userEmail: string;
}
export interface IEnum {
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

export interface ICreateFeedback {
  driverEmail: string;
  userEmail: string;
  ratingScore: number;
  description: string;
}

export interface ICreateReport {
  problemType: string;
  description: string;
  userEmail: string;
  driverEmail: string;
}

export interface IUserLocation {
  city?: string;
  zip?: string;
}

export interface IDriverInfo {
  id: string;
  dob: string;
  createdAt?: Date;
  updatedAt?: Date;
  plate: string;
  carType: string;
  model: string;
  phoneNumber: string;
  userEmail: string;
  fullName: string;
  gender: string;
}
