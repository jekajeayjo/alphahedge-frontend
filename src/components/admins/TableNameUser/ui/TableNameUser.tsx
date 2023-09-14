import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { TableCell } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'
import useGetMainInfo from 'hooks/useGetMainInfo'

import { ITableNameUser } from '../model/TableNameUser.interface'

import s from './TableNameUser.module.scss'

export const TableNameUser = (props: ITableNameUser) => {
  const { showType, className, name, userId } = props

  const getUser = useGetMainInfo()

  const setUserId = async (id: number) => {
    try {
      await localStorage.setItem('Account-Id', id.toString())
      await localStorage.setItem('editor', '1')
      await getUser()
    } catch (e) {
      console.log('Error fetch user', e)
    }
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
