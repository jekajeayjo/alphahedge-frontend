import { ITable } from '../../model/Table.interface'

import s from './TableCell.module.scss'

export const TableCell = (props: ITable) => {
  const { children } = props
  return <th className={s.cell}>{children}</th>
}
