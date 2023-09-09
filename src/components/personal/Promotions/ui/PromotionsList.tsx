import useDisable from 'hooks/useDisable'

import { PromotionCard } from './PromotionCard/PromotionCard'

import s from './Promotions.module.scss'

export const PromotionsList = () => {
  const disableAction = useDisable()

  return (
    <div className={s.list}>
      <PromotionCard disable={disableAction} />
      <PromotionCard disable={disableAction} />
      <PromotionCard disable={disableAction} />
      <PromotionCard disable={disableAction} />
      <PromotionCard disable={disableAction} />
      <PromotionCard disable={disableAction} />
      <PromotionCard disable={disableAction} />
    </div>
  )
}
