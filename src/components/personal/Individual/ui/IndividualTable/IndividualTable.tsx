import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePrice,
  TableRow,
} from 'components/shared/table'

import s from './IndividualTable.module.scss'

export const IndividualTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Объем инвестиций</TableCell>
        <TableCell>Дата</TableCell>
        <TableCell>Сумма дохода</TableCell>
      </TableRow>
    </TableHead>
    <TableBody className={s.tbody}>
      <TableRow>
        <TableCell className={s.price}>
          <span>$ 25,000.00</span>
        </TableCell>
        <TableCell className={s.data}>21.08.2023</TableCell>
        <TableCell className={s.total}>
          <TablePrice price="18,530. 00" type="up" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={s.price}>
          <span>$ 25,000.00</span>
        </TableCell>
        <TableCell className={s.data}>21.08.2023</TableCell>
        <TableCell className={s.total}>
          <TablePrice price="18,530. 00" type="up" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={s.price}>
          <span>$ 25,000.00</span>
        </TableCell>
        <TableCell className={s.data}>21.08.2023</TableCell>
        <TableCell className={s.total}>
          <TablePrice price="18,530. 00" type="up" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={s.price}>
          <span>$ 25,000.00</span>
        </TableCell>
        <TableCell className={s.data}>21.08.2023</TableCell>
        <TableCell className={s.total}>
          <TablePrice price="18,530. 00" type="up" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={s.price}>
          <span>$ 25,000.00</span>
        </TableCell>
        <TableCell className={s.data}>21.08.2023</TableCell>
        <TableCell className={s.total}>
          <TablePrice price="18,530. 00" type="up" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={s.price}>
          <span>$ 25,000.00</span>
        </TableCell>
        <TableCell className={s.data}>21.08.2023</TableCell>
        <TableCell className={s.total}>
          <TablePrice price="18,530. 00" type="up" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
