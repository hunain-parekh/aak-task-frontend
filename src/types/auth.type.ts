export interface SignupPayload {
  name: string;
  username: string;
  password: string;
  email: string;
  phone: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface MeResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
