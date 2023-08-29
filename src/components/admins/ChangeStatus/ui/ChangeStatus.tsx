import { useRef, useState } from 'react'
import cn from 'classnames'

import { useOnOutsideClick } from 'hooks/useOnOutsideClick'

import { IChangeStatus } from '../model/ChangeStatus.interface'

import s from './ChangeStatus.module.scss'

export const ChangeStatus = (props: IChangeStatus) => {
  const { status } = props

  const [isOpen, setOpen] = useState(false)

  const ref = useRef<any>(null)

  useOnOutsideClick(ref, () => setOpen(false))

  const toggleDropdown = () => {
    if (status === 'В обработке') {
      setOpen((prevState) => !prevState)
    }
  }

  return (
    <div className={s.status} ref={ref}>
      <button
        className={cn(
          s.button,
          { [s.pending]: status === 'В обработке' },
          { [s.success]: status === 'Успешно' },
          { [s.cancel]: status === 'Отменен' },
        )}
        type="button"
        onClick={() => toggleDropdown()}
      >
        {status}

        {status === 'В обработке' && (
          <svg
            className={cn(s.arrow, { [s.active]: isOpen })}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
          >
            <path
              d="M1 1.25L7.5 7.75L14 1.25"
              stroke="#DEBB00"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>

      <div className={cn(s.list, { [s.open]: isOpen })}>
        <button className={s.success} type="button">
          Успешно
        </button>
        <button className={s.cancel} type="button">
          Отменен
        </button>
      </div>
    </div>
  )
}
