import { useState } from 'react'
import cn from 'classnames'

import { WrapperTable } from 'components/admins/WrapperTable'
import { SearchForm } from 'components/admins/TransactionBody/ui/SearchForm/SearchForm'
import {
  NavigationDrop,
  NavigationTabType,
} from 'components/shared/NavigationDrop'

import { UsersCarousel } from './UsersCarousel/UsersCarousel'

import s from './TransactionBody.module.scss'

const tabs: NavigationTabType[] = [
  {
    value: 'refills',
    label: 'Пополнения',
    count: 18,
  },
  {
    value: 'сonclusion',
    label: 'Вывод',
    count: 18,
  },
]

export const TransactionBody = () => {
  const [tab, setTab] = useState<'refills' | 'сonclusion'>('refills')

  const onClickHandler = (type: 'refills' | 'сonclusion') => {
    setTab(type)
  }

  return (
    <>
      <NavigationDrop className={s.dropdown} tabs={tabs} active={tab}>
        <button
          className={cn(s.tab, s.active, { [s.current]: tab === 'refills' })}
          onClick={() => onClickHandler('refills')}
          type="button"
        >
          Пополнения
          <div className={s.count}>18</div>
        </button>
        <button
          className={cn(s.tab, s.close, {
            [s.current]: tab === 'сonclusion',
          })}
          onClick={() => onClickHandler('сonclusion')}
          type="button"
        >
          Вывод
          <div className={s.count}>4</div>
        </button>
      </NavigationDrop>
      <div className={s.tabs}>
        <button
          className={cn(s.tab, s.active, { [s.current]: tab === 'refills' })}
          onClick={() => onClickHandler('refills')}
          type="button"
        >
          Пополнения
          <div className={s.count}>18</div>
        </button>
        <button
          className={cn(s.tab, s.close, {
            [s.current]: tab === 'сonclusion',
          })}
          onClick={() => onClickHandler('сonclusion')}
          type="button"
        >
          Вывод
          <div className={s.count}>4</div>
        </button>
      </div>
      <WrapperTable>
        <div className={s.body}>
          <SearchForm />
          <UsersCarousel />
        </div>
      </WrapperTable>
    </>
  )
}
