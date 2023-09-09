import { ReactNode } from 'react'

export interface IModal {
  className?: string
  classNameButton?: string
  textButton: string
  children: ReactNode
}
