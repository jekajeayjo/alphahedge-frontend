import { useAuth } from 'hooks/useAuth'

import { AsideNavigationUser } from './AsideNavigationUser'
import { AsideNavigationAdmin } from './AsideNavigationAdmin'
import { AsideNavigationAdminEdit } from './AsideNavigationAdminEdit'

import { IAsideNavigation } from '../model/AsideNavigation.interface'

import s from './AsideNavigation.module.scss'

export const AsideNavigation = (props: IAsideNavigation) => {
  const { adminEdit, onClick } = props

  const { role } = useAuth()

  return (
    <nav className={s.navigation}>
      {role === 'USER' && <AsideNavigationUser onClick={onClick} />}
      {!adminEdit && role === 'ADMIN' && (
        <AsideNavigationAdmin onClick={onClick} />
      )}
      {adminEdit && role === 'ADMIN' && (
        <AsideNavigationAdminEdit onClick={onClick} />
      )}
    </nav>
  )
}
