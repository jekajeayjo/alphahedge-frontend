import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { TableCell } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import { ITableNameUser } from '../model/TableNameUser.interface'

import s from './TableNameUser.module.scss'

export const TableNameUser = (props: ITableNameUser) => {
  const { showType, className, name, userId } = props

  const setUserId = (id: number) => {
    localStorage.setItem('Account-Id', id.toString())
    localStorage.setItem('editor', '1')
  }

  if (showType === 'fullName') {
    return (
      <TableCell className={cn(s.name, className)}>
        <NavLink
          to={`/admin/user/${userId}/dashboard`}
          onClick={() => setUserId(userId)}
        >
          <UserName name={name} />
          <span>{name}</span>
        </NavLink>
      </TableCell>
    )
  }

  return (
    <TableCell className={cn(s.th, className)}>
      <NavLink
        to={`/admin/user/${userId}/dashboard`}
        onClick={() => setUserId(userId)}
      >
        {name}
      </NavLink>
    </TableCell>
  )
}
