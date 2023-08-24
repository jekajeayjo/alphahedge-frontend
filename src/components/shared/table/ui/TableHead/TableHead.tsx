import { ITable } from '../../model/Table.interface'

import s from './TableHead.module.scss'

export const TableHead = (props: ITable) => {
  const { children } = props
  return <thead className={s.header}>{children}</thead>
}
