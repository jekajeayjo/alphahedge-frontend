import { LogoBlack } from 'assets/icons'

import s from './Uniqueness.module.scss'
import { IUniquenessCard } from './Uniqueness.interface'

export const UniquenessCard = (props: IUniquenessCard) => {
  const { title, text } = props
  return (
    <div className={s.card}>
      <img className={s.logo} src={LogoBlack} alt="logo" />
      <h3 className={s.name}>{title}</h3>
      <p className={s.text}>{text}</p>
    </div>
  )
}
