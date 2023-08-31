import cn from 'classnames'

import { ITable } from '../../model/Table.interface'

import s from './TableHead.module.scss'

export const TableHead = (props: ITable) => {
  const { children, className } = props
  return <thead className={cn(s.header, className)}>{children}</thead>
}
