import { NavLink } from 'react-router-dom'

import { ExitIcon, HelpIcon } from 'assets/icons'

import s from './AsideBottom.module.scss'

export const AsideBottom = () => (
  <div className={s.bottom}>
    <NavLink to="/">
      <div className={s.icon}>
        <img src={HelpIcon} alt="помощь" />
      </div>
      <span>Помощь</span>
    </NavLink>
    <button type="button">
      <div className={s.icon}>
        <img src={ExitIcon} alt="выход" />
      </div>
      <span>Выход</span>
    </button>
  </div>
)
