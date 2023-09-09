import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { TableCell } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import { ITableNameUser } from '../model/TableNameUser.interface'

import s from './TableNameUser.module.scss'

export const TableNameUser = (props: ITableNameUser) => {
  const { showType, className } = props

  if (showType === 'fullName') {
    return (
      <TableCell className={cn(s.name, className)}>
        <NavLink to="/admin/user/1/dashboard">
          <UserName name="GN AN" />
          <span>Golovnea Natalia</span>
        </NavLink>
      </TableCell>
    )
  }

  return (
    <TableCell className={cn(s.th, className)}>
      <NavLink to="/admin/user/1/dashboard">Golna</NavLink>
    </TableCell>
  )
}
