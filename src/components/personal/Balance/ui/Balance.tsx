import { Price } from 'components/shared/Price'

import s from './Balance.module.scss'

const TOTAL = 985563000

const items = [
  {
    label: 'Активный баланс',
    price: 285563000,
    color: '#5350F2',
  },
  {
    label: 'Инвестированно в портфели',
    price: 100000000,
    color: '#B050F2',
  },
  {
    label: 'Инвестированно в акции',
    price: 600000000,
    color: '#F29100',
  },
]

const getWidthLine = (total: number, price: number) => {
  const result = (price / total) * 100
  return `${result}%`
}

export const Balance = () => (
  <div className={s.block}>
    <Price className={s.total} price="985,563.00" type="lg" />
    <div className={s.bar}>
      {items.map((line, idx) => (
        <div
          className={s.line}
          style={{
            width: getWidthLine(TOTAL, line.price),
            background: line.color,
          }}
          key={idx}
        />
      ))}
    </div>
    <div className={s.cards}>
      {items.map((line, idx) => (
        <div className={s.card} key={idx}>
          <div className={s.name}>
            <div className={s.circle} style={{ background: line.color }} />
            {line.label}
          </div>
          <Price className={s.price} type="xs" price={line.price.toString()} />
        </div>
      ))}
    </div>
  </div>
)
