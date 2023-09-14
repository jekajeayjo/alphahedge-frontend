import { useContext } from 'react'
import { IndividualData } from 'context/IndividualData'

const useIndividualContext = () => useContext(IndividualData)

export default useIndividualContext
