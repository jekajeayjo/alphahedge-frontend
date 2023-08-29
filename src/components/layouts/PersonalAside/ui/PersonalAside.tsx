import { AsideUserInfo } from 'components/personal/AsideUserInfo'
import { AsideNavigation } from 'components/personal/AsideNavigation'
import { AsideBottom } from 'components/personal/AsideBottom'

import { LogoBlue } from 'assets/icons'

import { IPersonalAside } from '../model/PersonalAside.interface'

import s from './PersonalAside.module.scss'

export const PersonalAside = ({ adminEdit }: IPersonalAside) => (
  <aside className={s.aside}>
    <div className={s.logo}>
      <img src={LogoBlue} alt="logo" />
    </div>
    <AsideUserInfo />
    <AsideNavigation adminEdit={adminEdit} />
    <AsideBottom />
  </aside>
)
