import cn from 'classnames'

import { Price } from 'components/shared/Price'
import { UserName } from 'components/shared/UserName'

import { IReferralItem } from '../model/Referral.interface'

import s from './Referral.module.scss'

export const ReferralItem = (props: IReferralItem) => {
  const { name, price, data } = props
  return (
    <div className={s.referal}>
      <UserName name="ME" />
      <div className={s.name}>{name}</div>
      <div className={s.data}>{data}</div>
      <Price
        className={cn(s.price, { [s.positive]: price !== '0' })}
        before="+"
        type="xs"
        price={price}
      />
    </div>
  )
}
