import { useEffect, useState } from 'react'
import { VerificationEnum } from 'models/VerificationEnum'
import useProfile from 'hooks/context/useProfile'

const useDisable = () => {
  const [disable, setDisable] = useState(true)

  const { payload } = useProfile()

  useEffect(() => {
    if (
      payload.profile?.role === 'User' &&
      payload.profile.verifiedStatus !== VerificationEnum.SUCCESS
    ) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }, [])

  return disable
}

export default useDisable
