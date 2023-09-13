import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import queryString from 'query-string'

import { IAdvancedResponse } from 'models/response/AdminResponse'

import useAdvanceCounter from 'hooks/useAdvanceCounter'
import useIndividualContext from 'hooks/useIndividualContext'

import { TableComponent } from 'components/shared/table'
import { Loader } from 'components/shared/Loader'

import AdminService from 'services/AdminService'

import { ActiveTableForm } from './ActiveTableForm'
import { ActiveRow } from './ActiveRow'

import s from './ActiveTable.module.scss'

const SIZE = 7

const { getAdvanced } = AdminService

export const ActiveTableBody = () => {
  const { setAdvancedCard } = useIndividualContext()

  const { setCounter } = useAdvanceCounter()

  const [searchParams, setSearchParams] = useSearchParams()

  const [users, setUsers] = useState<IAdvancedResponse>()

  useEffect(() => {
    fetchUsers(searchParams)
  }, [searchParams])

  const fetchUsers = async (params: URLSearchParams) => {
    const qs = queryString.parse(params.toString())
    const page = params.get('page')
    const createddate = params.get('createddate')

    delete qs.page
    delete qs.createddate

    const criteria: { key: string; value: string }[] = Object.keys(qs).map(
      (key) => ({
        key,
        value: qs[key] as string,
      }),
    )

    try {
      const response = await getAdvanced({
        size: SIZE,
        sortField: 'createddate',
        sortDir: createddate ?? 'DESC',
        page: page ? Number(page) : 0,
        criteria: [
          { key: 'briefcaseCode', value: 'ADVANCED' },
          { key: 'briefcaseAccountStatus', value: 'Active' },
          ...criteria,
        ],
      })
      setUsers(response.data)
      setCounter({ active: response.data.totalElements, close: null })
    } catch (e) {
      console.log('Error fetch users', e)
    }
  }

  const fetchNext = async () => {
    if (users && !users.last) {
      try {
        searchParams.set('page', `${users.number + 1}`)
        setSearchParams(searchParams)
      } catch (e) {
        console.log('Error fetch users', e)
      }
    }
  }

  const fetchPrev = async () => {
    if (users && !users.first) {
      try {
        searchParams.set('page', `${users.number - 1}`)
        setSearchParams(searchParams)
      } catch (e) {
        console.log('Error fetch users', e)
      }
    }
  }

  return (
    <>
      <ActiveTableForm />
      {!users ? (
        <div className={s.loader}>
          <Loader />
        </div>
      ) : (
        <TableComponent
          classNameWrapper={s.wrapper}
          classNameInner={s.inner}
          classNameHeader={s.head}
          className={s.table}
          classNameBody={s.tbody}
          tables={users.content}
          currentPage={users.number}
          total={users.totalPages}
          fetchNext={fetchNext}
          fetchPrev={fetchPrev}
          renderComponent={(item) => (
            <ActiveRow
              {...item}
              key={`${item.briefcaseId}_${item.createddate}`}
              onClick={(value, briefId) =>
                setAdvancedCard({ userId: value, briefId })
              }
            />
          )}
          tableTitles={[
            { title: 'ФИО Пользователя' },
            { title: 'Username' },
            { title: 'Дата открытия', sortField: 'createddate' },
            { title: 'Сумма вложений' },
          ]}
        />
      )}
    </>
  )
}
