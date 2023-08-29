import { useState } from 'react'
import cn from 'classnames'

import { BigLockIcon, BigUnlockIcon } from 'assets/icons'

import { Button } from 'components/shared/Button'

import { IIndividualCard } from '../model/Individual.interface'

import s from './IndividualCard.module.scss'

export const IndividualCard = (props: IIndividualCard) => {
  const { status = false, price, isOpen = false } = props

  const [open, setOpen] = useState(isOpen)

  return (
    <div className={s.card}>
      <div className={s.header}>
        <img src={open ? BigUnlockIcon : BigLockIcon} alt="" />
        <div className={s.day}>0 дней назад</div>
      </div>
      <div className={s.row}>
        <div className={s.cell}>
          <div className={s.label}>Объем инвестиций</div>
          <div className={s.price}>{price}</div>
        </div>
        <div className={s.cell}>
          <div className={s.label}>Статус</div>
          <div className={s.status}>
            <div className={cn(s.icon, { [s.active]: status })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
              >
                <path d="M1 4L5 8L12 1" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <div className={s.statusText}>
              {status ? 'активный' : 'Не активный'}
            </div>
          </div>
        </div>
        <Button
          className={s.button}
          disabled={!status && !isOpen}
          type="button"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          {open ? 'закрыть' : 'открыть'}
        </Button>
      </div>
    </div>
  )
}
