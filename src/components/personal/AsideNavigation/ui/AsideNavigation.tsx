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
      {auth?.role === 'user' && <AsideNavigationUser onClick={onClick} />}
      {!adminEdit && auth?.role === 'admin' && (
        <AsideNavigationAdmin onClick={onClick} />
      )}
      {adminEdit && auth?.role === 'admin' && (
        <AsideNavigationAdminEdit onClick={onClick} />
      )}
    </nav>
  )
}
