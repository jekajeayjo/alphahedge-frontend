import useAuth from 'hooks/useAuth'

import { AsideNavigationUser } from './AsideNavigationUser'
import { AsideNavigationAdmin } from './AsideNavigationAdmin'
import { AsideNavigationAdminEdit } from './AsideNavigationAdminEdit'

import { IAsideNavigation } from '../model/AsideNavigation.interface'

import s from './AsideNavigation.module.scss'

export const AsideNavigation = (props: IAsideNavigation) => {
  const { adminEdit, onClick } = props

  const { auth } = useAuth()

  return (
    <nav className={s.navigation}>
      {auth?.profile?.role === 'User' && (
        <AsideNavigationUser onClick={onClick} />
      )}
      {!adminEdit && auth?.profile?.role === 'Admin' && (
        <AsideNavigationAdmin onClick={onClick} />
      )}
      {adminEdit && auth?.profile?.role === 'Admin' && (
        <AsideNavigationAdminEdit onClick={onClick} />
      )}
    </nav>
  )
}
