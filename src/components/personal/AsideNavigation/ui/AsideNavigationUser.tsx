import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import {
  AccountIcon,
  DashboardIcon,
  FinanceIcon,
  InvestmentsIcon,
} from 'assets/icons'

import s from './AsideNavigation.module.scss'

interface IProps {
  onClick(type: boolean): void
}

export const AsideNavigationUser = ({ onClick }: IProps) => (
  <>
    <NavLink
      end
      className={({ isActive }) => (isActive ? s.current : '')}
      to="/personal/dashboard"
      onClick={() => onClick(true)}
    >
      <div className={s.icon}>
        <img src={DashboardIcon} alt="dashboard" />
      </div>
      <span>Dashboard</span>
    </NavLink>

    <NavLink
      className={({ isActive }) => (isActive ? s.current : '')}
      to="/personal/investments"
      onClick={() => onClick(true)}
    >
      <div className={s.icon}>
        <img src={InvestmentsIcon} alt="инвестиции" />
      </div>
      <span className={s.investments}>Инвестиции</span>
    </NavLink>

    <NavLink
      className={({ isActive }) => (isActive ? s.current : '')}
      to="/personal/finance"
      end
      onClick={() => onClick(true)}
    >
      <div className={cn(s.icon, s.financeIcon)}>
        <img src={FinanceIcon} alt="финансы" />
      </div>
      <span className={s.finance}>Финансы</span>
    </NavLink>

    <NavLink
      className={({ isActive }) => (isActive ? s.current : '')}
      to="/personal"
      end
      onClick={() => onClick(true)}
    >
      <div className={s.icon}>
        <img src={AccountIcon} alt="аккаунт" />
      </div>
      <span className={s.account}>Аккаунт</span>
    </NavLink>
  </>
)
