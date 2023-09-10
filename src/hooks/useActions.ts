import { useContext } from 'react'

import { ActionContext } from 'context/ActionProvider'

const useActions = () => useContext(ActionContext)

export default useActions
