import { useContext } from 'react'
import { InvestContext } from 'context/InvestCaounter'

const useInvestCounter = () => useContext(InvestContext)

export default useInvestCounter
