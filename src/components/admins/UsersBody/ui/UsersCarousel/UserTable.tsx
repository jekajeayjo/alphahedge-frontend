import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'components/shared/table'

import { UserTableRow } from './UserTableRow'

import s from './UsersCarousel.module.scss'

export const UserTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ФИО Пользователя</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>E-mail</TableCell>
        <TableCell>Роль</TableCell>
        <TableCell>Баланс</TableCell>
      </TableRow>
    </TableHead>
    <TableBody className={s.tbody}>
      <UserTableRow />
      <UserTableRow />
      <UserTableRow />
      <UserTableRow />
      <UserTableRow />
    </TableBody>
  </Table>
)
