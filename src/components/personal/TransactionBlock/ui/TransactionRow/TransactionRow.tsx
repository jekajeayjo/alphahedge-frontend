import cn from 'classnames'

import { clearDate } from 'helpers/clearDate'

import { ITransaction } from 'models/response/TransactionResponse'

import { TableCell, TableRow } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import s from './TransactionRow.module.scss'

export const TransactionRow = (props: ITransaction) => {
  const {
    transactionDate,
    transactionStatus,
    currencyToken,
    fio,
    amount,
  } = props

  return (
    <TableRow>
      <TableCell className={s.first}>
        <UserName name={fio} />
        <span className={s.price}>${amount}</span>
      </TableCell>
      <TableCell className={s.type}>
        <span>{currencyToken}</span>
      </TableCell>
      <TableCell className={s.data}>
        <span>{clearDate(transactionDate, true)}</span>
      </TableCell>
      <TableCell>
        <button
          className={cn(s.status, {
            [s.success]: transactionStatus === 'Success',
            [s.cancel]: transactionStatus === 'Cancel',
            [s.pending]: transactionStatus === 'Process',
          })}
          disabled={transactionStatus !== 'Process'}
          type="button"
        >
          {transactionStatus === 'Success' && 'Успешно'}
          {transactionStatus === 'Cancel' && 'Отменен'}
          {transactionStatus === 'Process' && 'В обработке'}
        </button>
      </TableCell>
    </TableRow>
  )
}
