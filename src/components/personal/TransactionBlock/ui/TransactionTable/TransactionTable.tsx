import cn from 'classnames'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import s from './TransactionTable.module.scss'

export const TransactionTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell className={s.head} colspan={2}>
          История Пополнений
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody className={s.tbody}>
      <TableRow>
        <TableCell className={s.first}>
          <UserName name="W" />
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
      <TableRow>
        <TableCell className={s.first}>
          <UserName name="W" />
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
              [s.success]: false,
              [s.cancel]: true,
              [s.pending]: false,
            })}
          >
            Отменен
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={s.first}>
          <UserName name="W" />
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
      <TableRow>
        <TableCell className={s.first}>
          <UserName name="W" />
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
              [s.success]: false,
              [s.cancel]: false,
              [s.pending]: true,
            })}
          >
            В обработке
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
