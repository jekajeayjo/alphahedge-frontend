import cn from 'classnames'

import { Lightning } from 'assets/icons'

import { ILightningText } from '../model/LightningText.interface'

import s from './LightningText.module.scss'

export const LightningText = (props: ILightningText) => {
  const { text, className } = props
  return (
    <li className={cn(s.li, className)}>
      <img src={Lightning} alt="" />
      {text}
    </li>
  )
}
