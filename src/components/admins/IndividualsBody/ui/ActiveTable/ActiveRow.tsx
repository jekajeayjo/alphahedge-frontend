import cn from 'classnames'

import { TableCell, TableRow } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import { clearDate } from 'helpers/clearDate'

import { IAdvance } from 'models/response/AdminResponse'

import s from './ActiveTable.module.scss'

interface IActiveTable extends IAdvance {
  onClick: (id: number, briefId: number) => void
}

export const ActiveRow = (props: IActiveTable) => {
  const {
    onClick,
    amount,
    accountId,
    accountUsername,
    briefcaseAccountId,
    accountFio,
    createddate,
  } = props

  return (
    <TableRow>
      <TableCell className={cn(s.name, s.th)}>
        <button
          type="button"
          onClick={() => onClick(accountId, briefcaseAccountId)}
        >
          <UserName name={accountFio} />
          <span>{accountFio}</span>
        </button>
      </TableCell>
      <TableCell className={s.username}>
        <button
          type="button"
          onClick={() => onClick(accountId, briefcaseAccountId)}
        >
          {accountUsername}
        </button>
      </TableCell>
      <TableCell className={cn(s.th, s.date)}>
        {clearDate(createddate)}
      </TableCell>
      <TableCell className={s.price}>$ {amount}</TableCell>
    </TableRow>
  )
}
