import cn from 'classnames'

import { ITable } from '../../model/Table.interface'

import s from './TableCell.module.scss'

export const TableCell = (props: ITable) => {
  const { children, className, colspan = 1 } = props
  return (
    <th className={cn(s.cell, className)} colSpan={colspan}>
      {children}
    </th>
  )
}
