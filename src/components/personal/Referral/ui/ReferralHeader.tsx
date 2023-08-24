import cn from 'classnames'

import { Price } from 'components/shared/Price'

import { CopyIcon } from 'assets/icons'

import s from './Referral.module.scss'

const copyHandler = (text: string) => {
  navigator.clipboard.writeText(text)
}

export const ReferralHeader = () => (
  <div className={s.header}>
    <div className={s.col}>
      <div className={s.value}>
        <Price type="xs" price="9860.00" />
      </div>
      <div className={s.label}>Общий Доход</div>
    </div>
    <div className={s.col}>
      <div className={s.value}>18</div>
      <div className={s.label}>Кол-во рефералов</div>
    </div>
    <div className={cn(s.col, s.ref)}>
      <div className={s.value}>
        <span>https://alphahedge-holdings.io/22552565edf</span>
        <button
          onClick={() =>
            copyHandler('https://alphahedge-holdings.io/22552565edf')
          }
          type="button"
        >
          <img src={CopyIcon} alt="copy" />
        </button>
      </div>
      <div className={s.label}>Реферальная ссылка</div>
    </div>
  </div>
)
