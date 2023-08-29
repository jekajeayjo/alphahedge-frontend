import { createContext } from 'react'

export interface IContext {
  user: null | boolean
  setUserData: (user: null | boolean) => void
}

export const UserDataContext = createContext<IContext>({
  user: null,
  setUserData: () => {},
})
