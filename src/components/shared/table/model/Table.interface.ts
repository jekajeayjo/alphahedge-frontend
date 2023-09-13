import { ReactNode } from 'react'

export interface ITable {
  children: ReactNode
  className?: string
  colspan?: number
}

export interface ITablePrice {
  price: string
  type: 'up' | 'down'
  showPercent?: boolean
}

export interface ITableLabel {
  label: string
  value: string
  type: 'price' | 'num'
  className?: string
}

type TableType = {
  title: string
  sortField?: string
}

export interface ITableComponent<T> {
  tableTitles: TableType[]
  total: number
  currentPage: number

  tables: T[]
  renderComponent: (item: T) => ReactNode

  classNameWrapper?: string
  classNameInner?: string
  className?: string
  classNameHeader?: string
  classNameBody?: string
  classNamePagination?: string

  fetchPrev?: () => void
  fetchNext?: () => void
}
