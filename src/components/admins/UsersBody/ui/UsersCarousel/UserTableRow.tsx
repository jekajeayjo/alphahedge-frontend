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
    <TableRow>
      <TableNameUser showType="fullName" />
      <TableNameUser showType="username" />
      <TableCell>golovneanatalia@yahoo.com</TableCell>
      <TableCell>user</TableCell>
      <TableCell>$25,000</TableCell>
      <TableCell>
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
