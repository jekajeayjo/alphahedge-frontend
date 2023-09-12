import { useContext } from 'react'
import { InvestContext } from 'context/InvestCounter'

const useInvestCounter = () => useContext(InvestContext)

export default useInvestCounter
