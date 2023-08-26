import { PromotionCard } from './PromotionCard/PromotionCard'

import s from './Promotions.module.scss'

export const PromotionsList = () => (
  <div className={s.list}>
    <PromotionCard />
    <PromotionCard />
    <PromotionCard />
    <PromotionCard />
    <PromotionCard />
    <PromotionCard />
    <PromotionCard />
  </div>
)
