import { NavLink, useNavigate } from 'react-router-dom'

import { ExitIcon, HelpIcon } from 'assets/icons'
import useAuth from 'hooks/useAuth'

import s from './AsideBottom.module.scss'

export const AsideBottom = () => {
  const navigator = useNavigate()

  const { setAuth } = useAuth()

  const logoutHandler = () => {
    localStorage.removeItem('token')
    navigator('/')
    setAuth({ isAuth: false, loading: true })
  }

  return (
    <div className={s.bottom}>
      <NavLink to="/">
        <div className={s.icon}>
          <img src={HelpIcon} alt="помощь" />
        </div>
        <span>Помощь</span>
      </NavLink>
      <button type="button" onClick={logoutHandler}>
        <div className={s.icon}>
          <img src={ExitIcon} alt="выход" />
        </div>
        <span>Выход</span>
      </button>
    </div>
  )
}
