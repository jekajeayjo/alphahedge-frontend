/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'
import { IActionBalanceResponse } from 'models/response/ActionResponse'

interface IInvestContext {
  data: IActionBalanceResponse | null
  setData: (data: IActionBalanceResponse) => void
}

export const ActionContext = createContext<IInvestContext>({} as IInvestContext)

export const ActionProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IActionBalanceResponse | null>(null)

  return (
    <ActionContext.Provider value={{ data, setData }}>
      {children}
    </ActionContext.Provider>
  )
}
