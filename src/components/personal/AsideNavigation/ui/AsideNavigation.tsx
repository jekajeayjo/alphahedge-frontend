import { NavLink } from 'react-router-dom'

import {
  AccountIcon,
  DashboardIcon,
  FinanceIcon,
  InvestmentsIcon,
} from 'assets/icons'

import s from './AsideNavigation.module.scss'

export const AsideNavigation = () => (
  <nav className={s.navigation}>
    <NavLink
      end
      className={({ isActive }) => (isActive ? s.current : '')}
      to="/personal"
    >
      <div className={s.icon}>
        <img src={DashboardIcon} alt="dashboard" />
      </div>
      <span>Dashboard</span>
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? s.current : '')}
      to="/personal/investments"
    >
      <div className={s.icon}>
        <img src={InvestmentsIcon} alt="инвестиции" />
      </div>
      <span className={s.investments}>Инвестиции</span>
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? s.current : '')}
      to="/personal/finance"
    >
      <div className={s.icon}>
        <img src={FinanceIcon} alt="финансы" />
      </div>
      <span className={s.finance}>Финансы</span>
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? s.current : '')}
      to="/personal/account"
    >
      <div className={s.icon}>
        <img src={AccountIcon} alt="аккаунт" />
      </div>
      <span className={s.account}>Аккаунт</span>
    </NavLink>
  </nav>
)
