/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'
import { UserType } from 'models/UserType'

interface IAuthInterface {
  isAuth?: boolean
  role?: UserType
}

interface IAuthContext {
  auth: IAuthInterface
  setAuth: (data: IAuthInterface) => void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<IAuthInterface>({})

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
