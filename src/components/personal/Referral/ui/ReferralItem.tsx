import cn from 'classnames'

import { Price } from 'components/shared/Price'
import { UserName } from 'components/shared/UserName'
import { TableCell, TableRow } from 'components/shared/table'

import { IReferralItem } from '../model/Referral.interface'

import s from './Referral.module.scss'

export const ReferralItem = (props: IReferralItem) => {
  const { name, price, data } = props
  return (
    <TableRow className={s.referal}>
      <TableCell className={s.cellName}>
        <UserName name="ME" />
        <div className={s.name}>{name}</div>
      </TableCell>
      <TableCell>
        <div className={s.data}>{data}</div>
      </TableCell>
      <TableCell>
        <Price
          className={cn(s.price, { [s.positive]: price !== '0' })}
          before="+"
          type="xs"
          price={price}
        />
      </TableCell>
    </TableRow>
  )
}
