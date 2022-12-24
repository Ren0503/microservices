export interface ISignUp {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  phone: string
  role?: string
  gender: string
  birth: Date
}

export interface ILogin {
  usernameOrEmail: string
  password: string
}