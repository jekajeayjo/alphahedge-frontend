import { Link } from 'react-router-dom'
import cn from 'classnames'

import { DropArrow, HeaderLogo, UserIcon } from 'assets/icons'
import { Container } from 'components/shared/Container'

import s from './Header.module.scss'

export const Header = () => (
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
            InvestingPro <img className={s.dropArrow} src={DropArrow} alt="" />
          </Link>
          <Link className={s.link} to="/">
            Тренды
          </Link>
          <Link className={s.link} to="/">
            Контакты
          </Link>
        </nav>
        <div className={s.actions}>
          <button type="button">RU</button>
          <button type="button">
            <img src={UserIcon} alt="user-icon" />
          </button>
        </div>
      </div>
    </Container>
  </header>
)
