import useProfile from 'hooks/context/useProfile'
import useBalance from 'hooks/context/useBalance'

import AccountServices from '../services/AccountServices'

const { getProfile, getBalance } = AccountServices

const useGetMainInfo = () => {
  const { setPayload } = useProfile()
  const { setCash } = useBalance()

  const fetchUserData = async () => {
    try {
      const resProfile = await getProfile()
      const resBalance = await getBalance()
      setPayload({
        loading: false,
        isAuth: true,
        profile: resProfile.data,
      })
      setCash({ balance: resBalance.data })
    } catch (e) {
      console.log(e)
      setPayload({ loading: false, isAuth: false })
    }
  }

  return fetchUserData
}

export default useGetMainInfo
