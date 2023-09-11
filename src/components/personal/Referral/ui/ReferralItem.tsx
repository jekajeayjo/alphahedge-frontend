import cn from 'classnames'

import { clearDate } from 'helpers/clearDate'

import { IReferalItem } from 'models/response/ReferalResponse'

import { Price } from 'components/shared/Price'
import { UserName } from 'components/shared/UserName'
import { TableCell, TableRow } from 'components/shared/table'

import s from './Referral.module.scss'

export const ReferralItem = (props: IReferalItem) => {
  const { fio, amount, registeredDate } = props
  return (
    <TableRow className={s.referal}>
      <TableCell className={s.cellName}>
        <UserName name={fio} />
        <div className={s.name}>{fio}</div>
      </TableCell>
      <TableCell>
        <div className={s.data}>{clearDate(registeredDate)}</div>
      </TableCell>
      <TableCell>
        <Price
          className={cn(s.price, { [s.positive]: amount !== 0 })}
          before="+"
          type="xs"
          price={amount}
        />
      </TableCell>
    </TableRow>
  )
}
