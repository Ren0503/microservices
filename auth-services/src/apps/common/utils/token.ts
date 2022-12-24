import * as jwt from 'jsonwebtoken'
import { UserAttributes } from '../models/userModel'

export interface IToken extends UserAttributes {
  iat: number
  exp: number
  refreshToken?: string
}

export const generateToken = (payload: any, isRefresh: boolean) => {
  const iat = Math.round(new Date().getTime() / 1000)
  const exp = isRefresh ? iat + 31536000 : iat + 3600
  const token = jwt.sign({
    ...payload,
    iat,
    exp,
  }, `${process.env.JWT_SECRET}`)

  return token
}

export const refreshAccessToken = (refreshToken: string)  => {
  const { iat, exp, ...user } = verifyToken(refreshToken)

  const accessToken = generateToken({ user, refreshToken }, false)
  return accessToken
}

export const verifyToken = (token: string) => {
  const decode = jwt.verify(token, `${process.env.JWT_SECRET}`) as unknown as IToken
  const { exp = 0 } = decode || {}
  
  if (exp < Math.round(new Date().getTime())) {
    throw new Error("Jwt is expired")
  }
  return decode
}

