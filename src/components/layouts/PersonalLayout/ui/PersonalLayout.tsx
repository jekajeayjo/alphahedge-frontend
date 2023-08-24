import { PersonalAside } from 'components/layouts/PersonalAside'
import { BodyHeader } from 'components/personal/BodyHeader'

import { IPersonalLayout } from '../model/PageLayout.interface'

import s from './PersonalLayout.module.scss'

export const PersonalLayout = (props: IPersonalLayout) => {
  const { children } = props

  return (
    <div className={s.layout}>
      <PersonalAside />
      <div className={s.overlay} />
      <div className={s.body}>
        <BodyHeader />
        {children}
      </div>
    </div>
  )
}
