import cn from 'classnames'

import { Price } from 'components/shared/Price'

import { ITablePrice } from '../../model/Table.interface'

import s from './TablePrice.module.scss'

export const TablePrice = (props: ITablePrice) => {
  const { price, type, showPercent } = props

  return (
    <div
      className={cn(s.wrapper, {
        [s.showPercent]: showPercent,
        [s.up]: type === 'up',
        [s.down]: type === 'down',
      })}
    >
      <Price type="xs" price={price} />
      {type === 'up' ? (
        <svg
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.89711 0.125L7.79423 6.875H0L3.89711 0.125Z"
            fill="#04C100"
          />
        </svg>
      ) : (
        <svg
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.89732 6.875L0.000206107 0.124999L7.79443 0.125L3.89732 6.875Z"
            fill="#C10000"
          />
        </svg>
      )}
      {showPercent && <div className={s.percent}>+14%</div>}
    </div>
  )
}
