export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
  lastLogin?: Date;
}

export interface AuthError {
  message: string;
 code: string;
}