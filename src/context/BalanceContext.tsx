/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'
import { IResponseBalance } from 'models/response/AccountResponse'

interface IBalance {
  balance?: IResponseBalance | null
}

interface IBalanceContext {
  cash: IBalance
  setCash: (data: IBalance) => void
}

export const BalanceContext = createContext<IBalanceContext>(
  {} as IBalanceContext,
)

export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const [cash, setCash] = useState<IBalance>({
    balance: null,
  })

  return (
    <BalanceContext.Provider value={{ cash, setCash }}>
      {children}
    </BalanceContext.Provider>
  )
}
