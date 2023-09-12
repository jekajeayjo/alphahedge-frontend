/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'

interface IAuthInterface {
  actions: null | number
  simple: null | number
  advanced: null | number
}

interface IInvestContext {
  counter: IAuthInterface
  setCounter: (data: IAuthInterface) => void
}

export const InvestContext = createContext<IInvestContext>({} as IInvestContext)

export const InvestProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState<IAuthInterface>({
    actions: null,
    simple: null,
    advanced: null,
  })

  return (
    <InvestContext.Provider value={{ counter, setCounter }}>
      {children}
    </InvestContext.Provider>
  )
}
