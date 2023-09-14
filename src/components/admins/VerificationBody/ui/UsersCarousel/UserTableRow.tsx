import { IVerification } from 'models/response/AdminResponse'

import { clearDate } from 'helpers/clearDate'

import { TableCell, TableRow } from 'components/shared/table'
import { TableNameUser } from 'components/admins/TableNameUser'

import s from './UsersCarousel.module.scss'

export const UserTableRow = (props: IVerification) => {
  const {
    status,
    fio,
    verifiedStatus,
    balance,
    role,
    userName,
    email,
    registeredDate,
    idNumber,
    accountId,
  } = props

  return (
    <TableRow className={s.row}>
      <TableNameUser
        className={s.fullName}
        userId={1}
        name={fio}
        showType="fullName"
      />
      <TableNameUser
        className={s.username}
        userId={1}
        name={userName}
        showType="username"
      />
      <TableCell className={s.photo}>
        <a href="/" target="_blank">
          Ссылка
        </a>
      </TableCell>
      <TableCell className={s.date}>{clearDate(registeredDate)}</TableCell>
      <TableCell className={s.status}>
        {/* <ChangeStatus status="В обработке" /> */}
      </TableCell>
    </TableRow>
  )
}
