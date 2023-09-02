import { Link } from 'react-router-dom'

import useAuth from 'hooks/useAuth'
import { useWindowSize } from 'hooks/useWindowSize'

import { Container } from 'components/shared/Container'
import { ChangeLanguage } from 'components/shared/ChangeLanguage'

import { HeaderLogo, UserIcon } from 'assets/icons'

import { HeaderNav } from './HeaderNav'

import s from './Header.module.scss'

export const Header = () => {
  const { auth } = useAuth()

  const { width } = useWindowSize()

  console.log(width)

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <Link className={s.logo} to="/">
            <img src={HeaderLogo} alt="logo" />
          </Link>
          {width > 900 && <HeaderNav />}
          <div className={s.actions}>
            <ChangeLanguage />
            <Link
              className={s.user}
              to={
                auth?.isAuth
                  ? `/${auth?.role === 'user' ? 'personal' : 'admin'}/dashboard`
                  : '/login'
              }
            >
              <img src={UserIcon} alt="user-icon" />
            </Link>
          </div>
        </div>
        {width <= 900 && <HeaderNav />}
      </Container>
    </header>
  )
}
