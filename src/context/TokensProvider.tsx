/* eslint-disable */
import { createContext, ReactNode, useState } from 'react'
import { IToken } from 'models/IToken'

interface ITokensContext {
  tokens: IToken[] | null
  setTokens: (data: IToken[]) => void
}

export const TokensContext = createContext<ITokensContext>({} as ITokensContext)

export const TokensProvider = ({ children }: { children: ReactNode }) => {
  const [tokens, setTokens] = useState<IToken[] | null>(null)

  return (
    <TokensContext.Provider value={{ tokens, setTokens }}>
      {children}
    </TokensContext.Provider>
  )
}
