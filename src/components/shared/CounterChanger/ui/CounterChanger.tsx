import cn from 'classnames'

import { ICounterChanger } from '../model/CounterChanger.interface'

import s from './CounterChanger.module.scss'

export const CounterChanger = (props: ICounterChanger) => {
  const { decrement, value, increment, className } = props
  return (
    <div className={cn(s.inputs, className)}>
      <button type="button" onClick={decrement}>
        -
      </button>
      <span className={s.count}>{value}</span>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  )
}
