import { useState } from 'react'
import cn from 'classnames'

import { WrapperTable } from 'components/admins/WrapperTable'
import { SearchForm } from 'components/admins/TransactionBody/ui/SearchForm/SearchForm'

import { UsersCarousel } from './UsersCarousel/UsersCarousel'

import s from './TransactionBody.module.scss'

export const TransactionBody = () => {
  const [tab, setTab] = useState<'refills' | 'сonclusion'>('refills')

  const onClickHandler = (type: 'refills' | 'сonclusion') => {
    setTab(type)
  }

  return (
    <>
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
