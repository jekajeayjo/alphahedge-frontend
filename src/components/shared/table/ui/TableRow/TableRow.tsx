import cn from 'classnames'

import { ITable } from '../../model/Table.interface'

import s from './TableRow.module.scss'

export const TableRow = (props: ITable) => {
  const { children, className } = props
  return <tr className={cn(s.row, className)}>{children}</tr>
}
