import { useContext } from 'react'
import { AdvancedContext } from 'context/AdvancedCounter'

const useAdvanceCounter = () => useContext(AdvancedContext)

export default useAdvanceCounter
