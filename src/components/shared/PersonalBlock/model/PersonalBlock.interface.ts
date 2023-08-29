import { ReactNode } from 'react'

export interface IPersonalBlock {
  label: string
  children: ReactNode
  className?: string
  link?: string
  textLink?: string
}
