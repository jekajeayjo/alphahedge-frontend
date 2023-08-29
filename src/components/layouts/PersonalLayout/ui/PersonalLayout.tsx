import { PersonalAside } from 'components/layouts/PersonalAside'
import { BodyHeader } from 'components/personal/BodyHeader'

import { IPersonalLayout } from '../model/PersonalLayout.interface'

import s from './PersonalLayout.module.scss'

export const PersonalLayout = ({ children, adminEdit }: IPersonalLayout) => (
  <div className={s.layout}>
    <PersonalAside adminEdit={adminEdit} />
    <div className={s.overlay} />
    <div className={s.body}>
      <BodyHeader />
      {children}
    </div>
  </div>
)
