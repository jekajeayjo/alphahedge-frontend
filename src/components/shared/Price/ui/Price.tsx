import cn from 'classnames'

import { IPrice } from '../model/IPrice.interface'

import s from './Price.module.scss'

export const Price = (props: IPrice) => {
  const { price, type, className, before } = props
  return (
    <div className={cn(s.price, s[type], className)}>
      {before && <span>{before}</span>}
      <span>$</span>
      {price}
    </div>
  )
}
