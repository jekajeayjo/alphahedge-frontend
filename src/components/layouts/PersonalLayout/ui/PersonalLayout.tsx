import { PersonalAside } from 'components/layouts/PersonalAside'

import { IPersonalLayout } from '../model/PageLayout.interface'

import s from './PersonalLayout.module.scss'

export const PersonalLayout = (props: IPersonalLayout) => {
  const { children } = props

  return (
    <div className={s.layout}>
      <PersonalAside />
      <div className={s.body}>{children}</div>
    </div>
  )
}
