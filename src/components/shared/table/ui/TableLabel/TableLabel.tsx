import cn from 'classnames'

import { Price } from 'components/shared/Price'

import { ITableLabel } from '../../model/Table.interface'

import s from './TableLabel.module.scss'

export const TableLabel = (props: ITableLabel) => {
  const { label, value, type, className } = props

  return (
    <div className={cn(s.block, className)}>
      <div className={s.value}>
        {type === 'price' ? <Price type="xs" price={value} /> : value}
      </div>
      <div className={s.label}>{label}</div>
    </div>
  )
}
