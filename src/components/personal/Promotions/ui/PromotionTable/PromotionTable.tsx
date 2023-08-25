import { TableLabel } from 'components/shared/table'

import { PromotionTableCarousel } from './PromotionTableCarousel'

import s from './PromotionTable.module.scss'

export const PromotionTable = () => (
  <div className={s.wrapper}>
    <div className={s.header}>
      <div className={s.left}>Пакет приобретенных акций</div>
      <div className={s.right}>
        <TableLabel
          label=" общая стоимость Пакета"
          value="199,860. 00"
          type="price"
        />
        <TableLabel label="Общее кол-во Акций" value="18" type="num" />
      </div>
    </div>
    <PromotionTableCarousel />
  </div>
)
