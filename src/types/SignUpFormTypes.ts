export interface SignUpErrorType {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  phone?: string;
}

export interface SignUpFormValuesType {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  role: string;
}
