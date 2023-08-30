import cn from 'classnames'

import { ITable } from 'components/shared/table/model/Table.interface'

import s from './Table.module.scss'

export const Table = (props: ITable) => {
  const { children, className } = props
  return <table className={cn(s.table, className)}>{children}</table>
}
