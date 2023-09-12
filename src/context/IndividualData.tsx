/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'

interface ITokensContext {
  userId: number | null
  setUserId: (id: number | null) => void
}

export const IndividualData = createContext<ITokensContext>(
  {} as ITokensContext,
)

export const IndividualDataProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [userId, setUserId] = useState<number | null>(null)

  return (
    <IndividualData.Provider value={{ userId, setUserId }}>
      {children}
    </IndividualData.Provider>
  )
}
