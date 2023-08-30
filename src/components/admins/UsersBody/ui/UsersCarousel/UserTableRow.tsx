import { useState } from 'react'
import cn from 'classnames'

import { TableCell, TableRow } from 'components/shared/table'
import { TableNameUser } from 'components/admins/TableNameUser'

import s from './UsersCarousel.module.scss'

export const UserTableRow = () => {
  const [isActive, setIsActive] = useState(true)

  const toggleHandler = () => {
    setIsActive((prevState) => !prevState)
  }

  return (
    <TableRow className={s.row}>
      <TableNameUser className={s.fullname} showType="fullName" />
      <TableNameUser className={s.username} showType="username" />
      <TableCell className={s.email}>golovneanatalia@yahoo.com</TableCell>
      <TableCell className={s.type}>user</TableCell>
      <TableCell>$25,000</TableCell>
      <TableCell className={s.switch}>
        <button
          className={cn(s.toggle, { [s.active]: isActive })}
          type="button"
          onClick={toggleHandler}
        >
          <div className={s.overlay} />
        </button>
      </TableCell>
    </TableRow>
  )
}
