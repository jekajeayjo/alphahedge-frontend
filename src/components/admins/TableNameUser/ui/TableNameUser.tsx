import { NavLink } from 'react-router-dom'

import { TableCell } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import { ITableNameUser } from '../model/TableNameUser.interface'

import s from './TableNameUser.module.scss'

export const TableNameUser = (props: ITableNameUser) => {
  const { showType } = props

  if (showType === 'fullName') {
    return (
      <TableCell className={s.name}>
        <NavLink to="/admin/user/1/dashboard">
          <UserName name="GN" />
          <span>Golovnea Natalia</span>
        </NavLink>
      </TableCell>
    )
  }

  return (
    <TableCell className={s.th}>
      <NavLink to="/admin/user/1/dashboard">Golna</NavLink>
    </TableCell>
  )
}
