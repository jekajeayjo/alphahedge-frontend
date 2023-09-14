/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'

interface IAdvanced {
  active: null | number
  close: null | number
}

interface IAdvanceContext {
  counter: IAdvanced
  setCounter: (data: IAdvanced) => void
}

export const AdvancedContext = createContext<IAdvanceContext>(
  {} as IAdvanceContext,
)

export const AdvancedProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState<IAdvanced>({
    active: null,
    close: null,
  })

  return (
    <AdvancedContext.Provider value={{ counter, setCounter }}>
      {children}
    </AdvancedContext.Provider>
  )
}
