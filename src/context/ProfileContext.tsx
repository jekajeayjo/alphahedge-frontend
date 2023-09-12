/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'
import { IResponseProfile } from 'models/response/AccountResponse'

interface IProfileInterface {
  isAuth?: boolean
  loading?: boolean
  profile?: IResponseProfile | null
}

interface IAuthContext {
  payload: IProfileInterface
  setPayload: (data: IProfileInterface) => void
}

export const ProfileContext = createContext<IAuthContext>({} as IAuthContext)

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [payload, setPayload] = useState<IProfileInterface>({
    isAuth: false,
    loading: true,
    profile: null,
  })

  return (
    <ProfileContext.Provider value={{ payload, setPayload }}>
      {children}
    </ProfileContext.Provider>
  )
}
