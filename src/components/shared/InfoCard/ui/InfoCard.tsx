import cn from 'classnames'

import { Price } from 'components/shared/Price'
import useDisable from 'hooks/useDisable'
import { IBriefcaseActive } from 'models/response/BriefcaseResponse'

import { getNoun } from 'helpers/getNoun'
import { floorPrice } from 'helpers/floorPrice'
import { getRemainDays } from 'helpers/getRemainDays'

import { InfoCardContent } from './InfoCardContent'
import { InfoCardStat } from './InfoCardStat'
import { InfoCardActive } from './InfoCardActive'
import { InfoCardForm } from './InfoCardForm'

import s from './InfoCard.module.scss'

interface IProps {
  isAdmin?: boolean
  className?: string
  fetch?: () => Promise<void>
}

export const InfoCard = (props: IBriefcaseActive & IProps) => {
  const {
    isAdmin = false,
    remainDays,
    amount,
    gainAmount,
    className,
    briefcaseAccountStatus,
    ranges,
    briefcaseName,
    amountMin,
    percents,
    briefcaseId,
    createddate,
    fetch = () => null,
    briefcaseInvestStatus,
  } = props

  const isActive = briefcaseAccountStatus === 'Active'

  const disableAction = useDisable()

  return (
    <div className={cn(s.card, className)}>
      <InfoCardContent
        name={briefcaseName}
        isActive={isActive}
        isAdmin={isAdmin}
      />
      {isActive && (
        <div className={s.actives}>
          <InfoCardActive label="Инвестированно">
            <Price type="xs" price={amount ?? 0} />
          </InfoCardActive>
          <InfoCardActive label="Ежедневный доход">
            <Price type="xs" price={gainAmount ? floorPrice(gainAmount) : 0} />
          </InfoCardActive>
          <InfoCardActive label="Осталось дней">
            <span className={s.days}>
              {ranges - getRemainDays(createddate)}
            </span>
            {getNoun({
              number: remainDays ?? 0,
              five: 'дней',
              two: 'дня',
              one: 'день',
            })}
          </InfoCardActive>
        </div>
      )}
      {!isActive && !disableAction && (
        <InfoCardForm
          briefcaseId={briefcaseId}
          fetch={fetch}
          minValue={amountMin}
          briefcaseInvestStatus={briefcaseInvestStatus}
        />
      )}
      <div className={s.stats}>
        <InfoCardStat label="Минимальный депозит" value={`$ ${amountMin}`} />
        <InfoCardStat label="Ежедневный доход" value={`${percents} %`} />
        <InfoCardStat label="Период блокировки" value={`${ranges} дней`} />
      </div>
    </div>
  )
}
