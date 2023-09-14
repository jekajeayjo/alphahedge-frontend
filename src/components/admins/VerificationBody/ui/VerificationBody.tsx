import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import queryString from 'query-string'

import { WrapperTable } from 'components/admins/WrapperTable'
import s from 'components/admins/UsersBody/ui/UsersBody.module.scss'
import { Loader } from 'components/shared/Loader'

import { VerificationList } from 'models/response/AdminResponse'
import AdminService from 'services/AdminService'

import { SearchForm } from './SearchForm/SearchForm'
import { UsersCarousel } from './UsersCarousel/UsersCarousel'

const { getVerificationList } = AdminService

const SIZE = 2

export const VerificationBody = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState<VerificationList>()

  useEffect(() => {
    fetchUsers(searchParams)
  }, [searchParams])

  const fetchUsers = async (params: URLSearchParams) => {
    const qs = queryString.parse(params.toString())
    const page = params.get('page')
    const balance = params.get('balance')

    delete qs.page
    delete qs.balance

    const criteria: { key: string; value: string }[] = Object.keys(qs).map(
      (key) => ({
        key,
        value: qs[key] as string,
      }),
    )

    try {
      const response = await getVerificationList({
        size: SIZE,
        sortField: 'balance',
        sortDir: balance ?? 'DESC',
        page: page ? Number(page) : 0,
        criteria,
      })
      setData(response.data)
    } catch (e) {
      console.log('Error fetch users', e)
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
    <WrapperTable>
      <SearchForm />
      {!data ? (
        <div className={s.loader}>
          <Loader />
        </div>
      ) : (
        <UsersCarousel
          fetchNext={fetchNext}
          fetchPrev={fetchPrev}
          number={data.number}
          content={data.content}
          totalPages={data.totalPages}
        />
      )}
    </WrapperTable>
  )
}
