import cn from 'classnames'
import { Link } from 'react-router-dom'

import { DropArrow } from 'assets/icons'

import s from './Header.module.scss'

export const HeaderNav = () => (
  <nav className={s.navigation}>
    <Link className={cn(s.link, s.current)} to="/">
      Главная
    </Link>
    <Link className={s.link} to="/">
      InvestingPro
      <img className={s.dropArrow} src={DropArrow} alt="" />
    </Link>
    <Link className={s.link} to="/">
      Тренды
    </Link>
    <Link className={s.link} to="/">
      Контакты
    </Link>
  </nav>
)
