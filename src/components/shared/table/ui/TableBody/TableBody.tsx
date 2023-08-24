import cn from 'classnames'

import { ITable } from '../../model/Table.interface'

import s from './TableBody.module.scss'

export const TableBody = (props: ITable) => {
  const { children, className } = props
  return <tbody className={cn(s.body, className)}>{children}</tbody>
}
