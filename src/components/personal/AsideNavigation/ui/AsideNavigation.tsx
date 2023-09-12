import useProfile from 'hooks/context/useProfile'

import { AsideNavigationUser } from './AsideNavigationUser'
import { AsideNavigationAdmin } from './AsideNavigationAdmin'
import { AsideNavigationAdminEdit } from './AsideNavigationAdminEdit'

import { IAsideNavigation } from '../model/AsideNavigation.interface'

import s from './AsideNavigation.module.scss'

export const AsideNavigation = (props: IAsideNavigation) => {
  const { adminEdit, onClick } = props

  const { payload } = useProfile()

  return (
    <nav className={s.navigation}>
      {payload?.profile?.role === 'User' && (
        <AsideNavigationUser onClick={onClick} />
      )}
      {!adminEdit && payload?.profile?.role === 'Admin' && (
        <AsideNavigationAdmin onClick={onClick} />
      )}
      {adminEdit && payload?.profile?.role === 'Admin' && (
        <AsideNavigationAdminEdit onClick={onClick} />
      )}
    </nav>
  )
}
