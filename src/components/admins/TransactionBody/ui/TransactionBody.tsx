import { useEffect, useState } from 'react'
import cn from 'classnames'
import { useSearchParams } from 'react-router-dom'
import queryString from 'query-string'

import AdminService from 'services/AdminService'
import { ITransactionHistory } from 'models/response/TransactionResponse'

import { WrapperTable } from 'components/admins/WrapperTable'
import { SearchForm } from 'components/admins/TransactionBody/ui/SearchForm/SearchForm'
import { Loader } from 'components/shared/Loader'

import {
  NavigationDrop,
  NavigationTabType,
} from 'components/shared/NavigationDrop'

import { UsersCarousel } from './UsersCarousel/UsersCarousel'

import s from './TransactionBody.module.scss'

const tabs: NavigationTabType[] = [
  {
    value: 'In',
    label: 'Пополнения',
    count: 18,
  },
  {
    value: 'Out',
    label: 'Вывод',
    count: 18,
  },
]

const { getTransactionHistory } = AdminService

export const TransactionBody = () => {
  const [tab, setTab] = useState<'In' | 'Out'>('In')

  const [data, setData] = useState<ITransactionHistory>()

  const [searchParams, setSearchParams] = useSearchParams()

  const onClickHandler = (type: 'In' | 'Out') => {
    setTab(type)
    setSearchParams(undefined)
  }

  useEffect(() => {
    fetchData(tab)
  }, [tab, searchParams])

  const fetchData = async (_tab: string) => {
    const qs = queryString.parse(searchParams.toString())
    const page = searchParams.get('page')
    const date = searchParams.get('transactionDate')

    delete qs.page
    delete qs.transactionDate

    const criteria: { key: string; value: string }[] = Object.keys(qs).map(
      (key) => ({
        key,
        value: qs[key] as string,
      }),
    )

    try {
      const response = await getTransactionHistory({
        page: page ? Number(page) : 0,
        sortField: 'transactionDate',
        sortDir: date ?? 'DESC',
        size: 7,
        criteria: [...criteria, { key: 'transactionType', value: _tab }],
      })
      setData(response.data)
    } catch (e) {
      console.log(`Error fetch data`, e)
    }
  }

  const fetchNext = async () => {
    if (data && !data.last) {
      try {
        searchParams.set('page', `${data.number + 1}`)
        setSearchParams(searchParams)
      } catch (e) {
        console.log('Error fetch users', e)
      }
    }
  }

  const fetchPrev = async () => {
    if (data && !data.first) {
      try {
        searchParams.set('page', `${data.number - 1}`)
        setSearchParams(searchParams)
      } catch (e) {
        console.log('Error fetch users', e)
      }
    }
  }

  return (
    <>
      <NavigationDrop className={s.dropdown} tabs={tabs} active={tab}>
        <button
          className={cn(s.tab, s.active, { [s.current]: tab === 'In' })}
          onClick={() => onClickHandler('In')}
          type="button"
        >
          Пополнения
          <div className={s.count}>18</div>
        </button>
        <button
          className={cn(s.tab, s.close, {
            [s.current]: tab === 'Out',
          })}
          onClick={() => onClickHandler('Out')}
          type="button"
        >
          Вывод
          <div className={s.count}>4</div>
        </button>
      </NavigationDrop>
      <div className={s.tabs}>
        <button
          className={cn(s.tab, s.active, { [s.current]: tab === 'In' })}
          onClick={() => onClickHandler('In')}
          type="button"
        >
          Пополнения
          <div className={s.count}>18</div>
        </button>
        <button
          className={cn(s.tab, s.close, {
            [s.current]: tab === 'Out',
          })}
          onClick={() => onClickHandler('Out')}
          type="button"
        >
          Вывод
          <div className={s.count}>4</div>
        </button>
      </div>
      <WrapperTable>
        <div className={s.body}>
          <SearchForm />
          {!data ? (
            <div className={s.loader}>
              <Loader />
            </div>
          ) : (
            <UsersCarousel
              updateData={() => fetchData(tab)}
              fetchNext={fetchNext}
              fetchPrev={fetchPrev}
              {...data}
            />
          )}
        </div>
      </WrapperTable>
    </>
  )
}
