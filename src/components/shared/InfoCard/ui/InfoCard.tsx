import cn from 'classnames'

import { Price } from 'components/shared/Price'

import { IInfoCard } from '../model/InfoCard.interface'

import { InfoCardContent } from './InfoCardContent'
import { InfoCardStat } from './InfoCardStat'
import { InfoCardActive } from './InfoCardActive'
import { InfoCardForm } from './InfoCardForm'

import s from './InfoCard.module.scss'

const IS_ACTIVE = true

export const InfoCard = (props: IInfoCard) => {
  const { className } = props

  return (
    <div className={cn(s.card, className)}>
      <InfoCardContent isActive={IS_ACTIVE} />
      {IS_ACTIVE && (
        <div className={s.actives}>
          <InfoCardActive label="Инвестированно">
            <Price type="xs" price="350" />
          </InfoCardActive>
          <InfoCardActive label="Ежедневный доход">
            <Price type="xs" price="1.225" />
          </InfoCardActive>
          <InfoCardActive label="Осталось дней">
            <span className={s.days}>59</span>дней
          </InfoCardActive>
        </div>
      )}
      {!IS_ACTIVE && <InfoCardForm />}
      <div className={s.stats}>
        <InfoCardStat label="Минимальный депозит" value="$ 250" />
        <InfoCardStat label="Ежедневный доход" value="0.35 %" />
        <InfoCardStat label="Период блокировки" value="60 дней" />
      </div>
    </div>
  )
}
