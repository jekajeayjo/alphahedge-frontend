import { ITable } from '../../model/Table.interface'

import s from './TableRow.module.scss'

export const TableRow = (props: ITable) => {
  const { children } = props
  return <tr className={s.row}>{children}</tr>
}
