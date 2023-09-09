import cn from 'classnames'

import { TableCell, TableRow } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import s from './TransactionRow.module.scss'

export const TransactionRow = () => (
  <TableRow>
    <TableCell className={s.first}>
      <UserName name="GN AN" />
      <span className={s.price}>$1500</span>
    </TableCell>
    <TableCell className={s.type}>
      <span>TRC20</span>
    </TableCell>
    <TableCell className={s.data}>
      <span>18.08.2023</span>
    </TableCell>
    <TableCell>
      <div
        className={cn(s.status, {
          [s.success]: true,
          [s.cancel]: false,
          [s.pending]: false,
        })}
      >
        Успешно
      </div>
    </TableCell>
  </TableRow>
)
