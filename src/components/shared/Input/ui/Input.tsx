import { useFormContext } from 'react-hook-form'
import cn from 'classnames'

import { IAuthInput } from '../model/Input.interface'

import s from './Input.module.scss'

export const Input = (props: IAuthInput) => {
  const { className, name, type, placeholder } = props

  const { register } = useFormContext()

  return (
    <input
      className={cn(s.input, className)}
      {...register(name)}
      type={type}
      placeholder={placeholder}
    />
  )
}
