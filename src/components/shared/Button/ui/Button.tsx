import cn from 'classnames'

import { IButton } from '../model/Button.interface'

import s from './Button.module.scss'

export const Button = (props: IButton) => {
  const { className, children, type, onClick, ...otherProps } = props

  return (
    /* eslint-disable react/button-has-type */
    <button
      className={cn(s.button, className)}
      type={type}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}
