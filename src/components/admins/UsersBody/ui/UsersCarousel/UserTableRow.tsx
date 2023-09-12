import { floorPrice } from 'helpers/floorPrice'

import { IUser } from 'models/IUser'

import { TableCell, TableRow } from 'components/shared/table'
import { TableNameUser } from 'components/admins/TableNameUser'

import { UserStatusChanger } from './UserStatusChanger'

import s from './UsersCarousel.module.scss'

export const UserTableRow = (props: IUser) => {
  const { email, role, userName, fio, balance, accountId, status } = props

  return (
    <TableRow className={s.row}>
      <TableNameUser
        className={s.fullname}
        userId={accountId}
        name={fio}
        showType="fullName"
      />
      <TableNameUser
        className={s.username}
        userId={accountId}
        name={userName}
        showType="username"
      />
      <TableCell className={s.email}>{email}</TableCell>
      <TableCell className={s.type}>{role}</TableCell>
      <TableCell>${floorPrice(balance)}</TableCell>
      <UserStatusChanger accountId={accountId} status={status} />
    </TableRow>
  )
}
