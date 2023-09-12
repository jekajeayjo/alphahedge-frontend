import { ReactNode } from 'react'

export interface INavigationDrop {
  active: string
  children: ReactNode
  tabs: NavigationTabType[]
  className?: string
}

export type NavigationTabType = {
  value: string
  label: string
  count?: number | null
}
