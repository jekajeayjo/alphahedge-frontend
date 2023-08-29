import cn from 'classnames'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import { ChangeStatus } from 'components/admins/ChangeStatus'

import s from './CloseTable.module.scss'

interface ICloseTable {
  onClick: (type: boolean) => void
}

export const CloseTable = ({ onClick }: ICloseTable) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ФИО Пользователя</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Дата открытия</TableCell>
        <TableCell>Сумма вложений</TableCell>
        <TableCell>Статус</TableCell>
      </TableRow>
    </TableHead>
    <TableBody className={s.tbody}>
      <TableRow>
        <TableCell className={cn(s.name, s.th)}>
          <button type="button" onClick={() => onClick(true)}>
            <UserName name="GN" />
            <span>Golovnea Natalia</span>
          </button>
        </TableCell>
        <TableCell className={s.th}>
          <button type="button" onClick={() => onClick(true)}>
            Golna
          </button>
        </TableCell>
        <TableCell className={s.th}>21.08.2023</TableCell>
        <TableCell className={s.price}>$ 25,000.00</TableCell>
        <TableCell className={s.th}>
          <ChangeStatus status="В обработке" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={cn(s.name, s.th)}>
          <button type="button" onClick={() => onClick(true)}>
            <UserName name="GN" />
            <span>Golovnea Natalia</span>
          </button>
        </TableCell>
        <TableCell className={s.th}>
          <button type="button" onClick={() => onClick(true)}>
            Golna
          </button>
        </TableCell>
        <TableCell className={s.th}>21.08.2023</TableCell>
        <TableCell className={s.price}>$ 25,000.00</TableCell>
        <TableCell className={s.th}>
          <ChangeStatus status="Отменен" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={cn(s.name, s.th)}>
          <button type="button" onClick={() => onClick(true)}>
            <UserName name="GN" />
            <span>Golovnea Natalia</span>
          </button>
        </TableCell>
        <TableCell className={s.th}>
          <button type="button" onClick={() => onClick(true)}>
            Golna
          </button>
        </TableCell>
        <TableCell className={s.th}>21.08.2023</TableCell>
        <TableCell className={s.price}>$ 25,000.00</TableCell>
        <TableCell className={s.th}>
          <ChangeStatus status="В обработке" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
