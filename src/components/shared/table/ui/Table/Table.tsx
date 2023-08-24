import { ITable } from 'components/shared/table/model/Table.interface'

import s from './Table.module.scss'

export const Table = (props: ITable) => {
  const { children } = props
  return <table className={s.table}>{children}</table>
}
