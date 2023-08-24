import { ReactNode } from 'react'

import s from './InfoCard.module.scss'

interface IProp {
  label: string
  children: ReactNode
}

export const InfoCardActive = (props: IProp) => {
  const { children, label } = props
  return (
    <div className={s.active}>
      <div className={s.label}>{label}</div>
      <div className={s.value}>{children}</div>
    </div>
  )
}
