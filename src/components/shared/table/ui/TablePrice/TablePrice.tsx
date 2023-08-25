import cn from 'classnames'

import { Price } from 'components/shared/Price'

import { DownIcon, UpIcon } from 'assets/icons'

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
        <img src={UpIcon} alt="up" />
      ) : (
        <img src={DownIcon} alt="down" />
      )}
      {showPercent && <div className={s.percent}>+14%</div>}
    </div>
  )
}
