import { useState } from 'react'
import cn from 'classnames'

import { PersonalCardIcon, PhoneIcon, SuccessIcon } from 'assets/icons'

import { VerificationStatusEnum } from './Verification.interface'

import s from './ProfileVerification.module.scss'

export const ProfileVerification = () => {
  const [status] = useState<VerificationStatusEnum>(
    VerificationStatusEnum.NOT_STARTED,
  )

  return (
    <div className={s.verification}>
      <div className={s.icons}>
        <div className={cn(s.icon, s.current)}>
          <img src={PersonalCardIcon} alt="not_started" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="22"
          viewBox="0 0 13 22"
          fill="none"
        >
          <path
            d="M1 1.5L11 11L1 20.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div
          className={cn(s.icon, {
            [s.current]:
              status === VerificationStatusEnum.PENDING ||
              status === VerificationStatusEnum.SUCCESS,
          })}
        >
          <img src={PhoneIcon} alt="pending" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="22"
          viewBox="0 0 13 22"
          fill="none"
        >
          <path
            d="M1 1.5L11 11L1 20.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={
              status === VerificationStatusEnum.PENDING ||
              status === VerificationStatusEnum.SUCCESS
                ? 1
                : '0.2'
            }
          />
        </svg>
        <div
          className={cn(s.icon, {
            [s.current]: status === VerificationStatusEnum.SUCCESS,
          })}
        >
          <img src={SuccessIcon} alt="success" />
        </div>
      </div>

      <div className={s.info}>
        <div className={s.info__title}>
          СТАТУС :
          <span>
            {status === VerificationStatusEnum.NOT_STARTED && 'НЕ НАЧАТА'}
            {status === VerificationStatusEnum.PENDING && 'НАЧАТА'}
            {status === VerificationStatusEnum.SUCCESS && 'ЗАВЕРШЕНА'}
          </span>
        </div>
        <div className={s.info__text}>
          Подтвердите свою личность, чтобы получить доступ ко всем возможностям
          платформы !
        </div>
      </div>

      <button className={s.open} type="button">
        Открыть форму верификации
      </button>
    </div>
  )
}
