import { TableCell, TableRow } from 'components/shared/table'
import { TableNameUser } from 'components/admins/TableNameUser'

import s from './UsersCarousel.module.scss'

export const UserTableRow = () => (
  <TableRow className={s.row}>
    <TableNameUser
      className={s.fullName}
      userId={1}
      name="test"
      showType="fullName"
    />
    <TableNameUser
      className={s.username}
      userId={1}
      name="test"
      showType="username"
    />
    <TableCell className={s.photo}>
      <a href="/" target="_blank">
        Ссылка
      </a>
    </TableCell>
    <TableCell className={s.date}>21.08.2023</TableCell>
    <TableCell className={s.status}>
      {/* <ChangeStatus status="В обработке" /> */}
    </TableCell>
  </TableRow>
)
