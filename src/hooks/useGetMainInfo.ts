import useAuth from 'hooks/useAuth'
import AccountServices from '../services/AccountServices'

const { getProfile, getBalance } = AccountServices

const useGetMainInfo = () => {
  const { setAuth } = useAuth()

  const fetchUserData = async () => {
    try {
      const resProfile = await getProfile()
      const resBalance = await getBalance()
      await setAuth({
        loading: false,
        isAuth: true,
        balance: resBalance.data,
        profile: resProfile.data,
      })
    } catch (e) {
      console.log(e)
      setAuth({ loading: false, isAuth: false })
    }
  }

  return fetchUserData
}

export default useGetMainInfo
