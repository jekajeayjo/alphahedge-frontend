import useAuth from 'hooks/useAuth'
import { useEffect, useState } from 'react'
import { VerificationEnum } from 'models/VerificationEnum'

const useDisable = () => {
  const [disable, setDisable] = useState(true)

  const { auth } = useAuth()

  useEffect(() => {
    if (
      auth.profile?.role === 'User' &&
      auth.profile.verifiedStatus !== VerificationEnum.SUCCESS
    ) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }, [])

  return disable
}

export default useDisable
