import { ReactNode } from 'react'

export interface ITable {
  children: ReactNode
  className?: string
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
