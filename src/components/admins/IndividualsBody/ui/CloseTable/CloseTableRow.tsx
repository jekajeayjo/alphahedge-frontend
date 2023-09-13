import cn from 'classnames'

import { TableCell, TableRow } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'
import { ChangeStatus } from 'components/admins/ChangeStatus'

import { IAdvance } from 'models/response/AdminResponse'
import AdminService from 'services/AdminService'

import { clearDate } from 'helpers/clearDate'

import s from './CloseTable.module.scss'

interface ICloseTableRow extends IAdvance {
  onClick: (id: number, briefId: number) => void
  updateData: () => Promise<void>
}

const { updateBriefcaseOrder } = AdminService

export const CloseTableRow = (props: ICloseTableRow) => {
  const {
    onClick,
    amount,
    briefcaseAccountId,
    briefcaseAccountOrderToCloseStatus,
    accountFio,
    accountId,
    accountUsername,
    createddate,
    updateData,
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
      <TableCell className={cn(s.th, s.username)}>
        <button
          type="button"
          onClick={() => onClick(accountId, briefcaseAccountId)}
        >
          {accountUsername}
        </button>
      </TableCell>
      <TableCell className={s.th}>{clearDate(createddate)}</TableCell>
      <TableCell className={s.price}>$ {amount}</TableCell>
      <TableCell className={cn(s.th, s.change)}>
        <ChangeStatus
          id={briefcaseAccountId}
          updateData={updateData}
          changeStatus={updateBriefcaseOrder}
          processKey="Process"
          successKey="Approved"
          cancelKey="Canceled"
          status={briefcaseAccountOrderToCloseStatus}
        />
      </TableCell>
    </TableRow>
  )
}
