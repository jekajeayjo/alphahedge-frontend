import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import cn from 'classnames'

import { IAuthInput } from '../model/Input.interface'

import s from './Input.module.scss'

export const Input = (props: IAuthInput) => {
  const { className, name, type, placeholder } = props

  const [showPass, setShowPass] = useState(false)

  const { register } = useFormContext()

  return (
    <div className={s.wrapper}>
      <input
        className={cn(s.input, className)}
        {...register(name)}
        type={showPass ? 'text' : type}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <button
          className={cn(s.show, { [s.active]: showPass })}
          type="button"
          onClick={() => setShowPass((prevState) => !prevState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 0C3.36316 0 0 4.18421 0 4.18421C0 4.18421 3.36316 8.36842 7.5 8.36842C11.6368 8.36842 15 4.18421 15 4.18421C15 4.18421 11.6368 0 7.5 0ZM7.5 7.12105C5.87368 7.12105 4.56316 5.81053 4.56316 4.18421C4.56316 2.55789 5.87368 1.24737 7.5 1.24737C9.12632 1.24737 10.4368 2.55789 10.4368 4.18421C10.4368 5.81053 9.12632 7.12105 7.5 7.12105Z"
              fill="black"
              fillOpacity="0.75"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.26823 4.18416C9.26823 5.16088 8.47656 5.95256 7.49984 5.95256C6.52312 5.95256 5.73145 5.16088 5.73145 4.18416C5.73145 3.20744 6.52312 2.41577 7.49984 2.41577C8.47656 2.41577 9.26823 3.20744 9.26823 4.18416Z"
              fill="black"
              fillOpacity="0.75"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
