import { HTMLProps, ReactNode } from 'react'

export interface IButton extends HTMLProps<HTMLButtonElement> {
  className?: string
  type: 'submit' | 'reset' | 'button' | undefined
  children?: ReactNode
}
