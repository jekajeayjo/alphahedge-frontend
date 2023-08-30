import cn from 'classnames'

import { TableCell, TableRow } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import s from './ActiveTable.module.scss'

interface IActiveTable {
  onClick: (type: boolean) => void
}

export const ActiveRow = ({ onClick }: IActiveTable) => (
  <TableRow>
    <TableCell className={cn(s.name, s.th)}>
      <button type="button" onClick={() => onClick(true)}>
        <UserName name="GN" />
        <span>Golovnea Natalia</span>
      </button>
    </TableCell>
    <TableCell className={s.username}>
      <button type="button" onClick={() => onClick(true)}>
        Golna
      </button>
    </TableCell>
    <TableCell className={cn(s.th, s.date)}>21.08.2023</TableCell>
    <TableCell className={s.price}>$ 25,000.00</TableCell>
  </TableRow>
)
