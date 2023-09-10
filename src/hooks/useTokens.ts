import { useContext } from 'react'
import { TokensContext } from 'context/TokensProvider'

const useTokens = () => useContext(TokensContext)

export default useTokens
