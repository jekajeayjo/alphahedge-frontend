import { PromotionsList } from './PromotionsList'

import s from './Promotions.module.scss'

export const Promotions = () => (
  <div className={s.body}>
    <h2 className={s.title}>Доступные акции</h2>
    <PromotionsList />
  </div>
)
