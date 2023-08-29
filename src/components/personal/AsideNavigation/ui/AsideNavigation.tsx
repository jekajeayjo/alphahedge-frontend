import { useAuth } from 'hooks/useAuth'

import { AsideNavigationUser } from './AsideNavigationUser'
import { AsideNavigationAdmin } from './AsideNavigationAdmin'
import { AsideNavigationAdminEdit } from './AsideNavigationAdminEdit'

import { IAsideNavigation } from '../model/AsideNavigation.interface'

import s from './AsideNavigation.module.scss'

export const AsideNavigation = ({ adminEdit }: IAsideNavigation) => {
  const { role } = useAuth()

  return (
    <nav className={s.navigation}>
      {role === 'USER' && <AsideNavigationUser />}
      {!adminEdit && role === 'ADMIN' && <AsideNavigationAdmin />}
      {adminEdit && role === 'ADMIN' && <AsideNavigationAdminEdit />}
    </nav>
  )
}
