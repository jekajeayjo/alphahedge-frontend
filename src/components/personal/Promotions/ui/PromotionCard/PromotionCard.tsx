import cn from 'classnames'

import { ApplyIcon, DiagramaIcon, DownIcon, UpIcon } from 'assets/icons'

import { PromotionCardActions } from './PromotionCardActions'

import s from './PromotionCard.module.scss'

const IS_UP = true

export const PromotionCard = ({ disable }: { disable: boolean }) => (
  <div className={s.card}>
    <div className={s.header}>
      <div className={s.icon}>
        <img src={ApplyIcon} alt="apple" />
      </div>
      <div className={s.content}>
        <div className={s.name}>AAPL</div>
        <div className={s.company}>Apple</div>
      </div>
    </div>
    <div className={s.change}>
      <div className={s.label}>CHANGED (1D)</div>
      <div className={cn(s.percent, { [s.down]: !IS_UP })}>
        <img src={IS_UP ? UpIcon : DownIcon} alt={IS_UP ? 'up' : 'down'} />
        +14,8 %
      </div>
    </div>
    <div className={s.diagramma}>
      <img src={DiagramaIcon} alt="" />
    </div>
    {!disable && <PromotionCardActions />}
  </div>
)
