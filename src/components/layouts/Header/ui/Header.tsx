import { Link, useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { Container } from 'components/shared/Container'
import { ChangeLanguage } from 'components/shared/ChangeLanguage'

import { DropArrow, HeaderLogo, UserIcon } from 'assets/icons'

import s from './Header.module.scss'

export const Header = () => {
  const navigate = useNavigate()

  const login = () => {
    localStorage.setItem('user', JSON.stringify({ role: 'USER' }))
    navigate('/personal/dashboard')
  }

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <Link className={s.logo} to="/">
            <img src={HeaderLogo} alt="logo" />
          </Link>
          <nav className={s.navigation}>
            <Link className={cn(s.link, s.current)} to="/">
              Главная
            </Link>
            <Link className={s.link} to="/">
              InvestingPro{' '}
              <img className={s.dropArrow} src={DropArrow} alt="" />
            </Link>
            <Link className={s.link} to="/">
              Тренды
            </Link>
            <Link className={s.link} to="/">
              Контакты
            </Link>
          </nav>
          <div className={s.actions}>
            <ChangeLanguage />
            <button className={s.user} type="button" onClick={login}>
              <img src={UserIcon} alt="user-icon" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
