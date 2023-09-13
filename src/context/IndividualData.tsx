/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'

export interface IndividualState {
  userId?: number | null
  briefId?: number | null
}

interface ITokensContext extends IndividualState {
  advancedCard: IndividualState
  setAdvancedCard: (value: IndividualState) => void
}

export const IndividualData = createContext<ITokensContext>(
  {} as ITokensContext,
)

export const IndividualDataProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [advancedCard, setAdvancedCard] = useState<IndividualState>({
    briefId: null,
    userId: null,
  })

  return (
    <IndividualData.Provider value={{ advancedCard, setAdvancedCard }}>
      {children}
    </IndividualData.Provider>
  )
}
