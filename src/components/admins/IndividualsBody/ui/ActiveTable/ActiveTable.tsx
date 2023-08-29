import cn from 'classnames'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'components/shared/table'
import { UserName } from 'components/shared/UserName'

import s from './ActiveTable.module.scss'

interface IActiveTable {
  onClick: (type: boolean) => void
}

export const ActiveTable = ({ onClick }: IActiveTable) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ФИО Пользователя</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Дата открытия</TableCell>
        <TableCell>Сумма вложений</TableCell>
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
      </TableRow>
    </TableBody>
  </Table>
)
