/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'
import {
  IResponseBalance,
  IResponseProfile,
} from 'models/response/AccountResponse'

interface IAuthInterface {
  isAuth?: boolean
  loading?: boolean
  profile?: IResponseProfile
  balance?: IResponseBalance
}

interface IAuthContext {
  auth: IAuthInterface
  setAuth: (data: IAuthInterface) => void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<IAuthInterface>({
    isAuth: false,
    loading: true,
  })

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
