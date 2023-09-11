import cn from 'classnames'

import { TableCell, TableRow } from 'components/shared/table'
import { UserName } from 'components/shared/UserName'
import { ChangeStatus } from 'components/admins/ChangeStatus'

import s from './CloseTable.module.scss'

interface ICloseTableRow {
  onClick: (type: boolean) => void
}

export const CloseTableRow = ({ onClick }: ICloseTableRow) => (
  <TableRow>
    <TableCell className={cn(s.name, s.th)}>
      <button type="button" onClick={() => onClick(true)}>
        <UserName name="GN AN" />
        <span>Golovnea Natalia</span>
      </button>
    </TableCell>
    <TableCell className={cn(s.th, s.username)}>
      <button type="button" onClick={() => onClick(true)}>
        Golna
      </button>
    </TableCell>
    <TableCell className={s.th}>21.08.2023</TableCell>
    <TableCell className={s.price}>$ 25,000.00</TableCell>
    <TableCell className={cn(s.th, s.change)}>
      <ChangeStatus status="В обработке" />
    </TableCell>
  </TableRow>
)
