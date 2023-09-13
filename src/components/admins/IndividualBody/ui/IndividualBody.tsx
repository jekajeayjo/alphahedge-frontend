import { useEffect, useRef, useState } from 'react'

import BriefcaseServices from 'services/BriefcaseServices'
import { IBriefcaseActive } from 'models/response/BriefcaseResponse'
import AccountServices from 'services/AccountServices'
import { IResponseProfile } from 'models/response/AccountResponse'
import { IndividualState } from 'context/IndividualData'

import { UserName } from 'components/shared/UserName'
import { IndividualCard } from 'components/shared/IndividualCard'
import { AddIncome } from 'components/admins/AddIncome'
import { IncomeTable } from 'components/personal/IncomeTable'
import { Loader } from 'components/shared/Loader'

import s from './IndividualBody.module.scss'

const { getMyBriefcaseActive } = BriefcaseServices
const { getProfile } = AccountServices

export const IndividualBody = ({ userId, briefId }: IndividualState) => {
  const [data, setData] = useState<IBriefcaseActive[] | null>()
  const [user, setUser] = useState<IResponseProfile | null>(null)

  const ref = useRef<any>()

  const getUser = async () => {
    try {
      const response = await getProfile()
      setUser(response.data)
    } catch (e) {
      console.log('Error fetch user', e)
    }
  }

  const getList = async () => {
    if (userId && briefId) {
      try {
        const response = await getMyBriefcaseActive({
          page: 0,
          size: 20,
          criteria: [
            { key: 'briefcaseCode', value: 'ADVANCED' },
            { key: 'briefcaseAccountId', value: briefId.toString() },
          ],
        })
        setData(response.data)
      } catch (e) {
        console.log('error individualList', e)
      }
    }
  }

  const refreshDataTable = async () => {
    await ref.current()
  }

  useEffect(() => {
    if (userId) {
      localStorage.setItem('Account-Id', userId.toString())
      localStorage.setItem('editor', '1')
      getList()
      getUser()
    }

    return () => {
      localStorage.removeItem('Account-Id')
      localStorage.removeItem('editor')
      setData(null)
      setUser(null)
    }
  }, [])

  return (
    <div className={s.wrapper}>
      {!user || !data ? (
        <div className={s.loader}>
          <Loader />
        </div>
      ) : (
        <div className={s.header}>
          <div className={s.left}>
            <div className={s.userInfo}>
              <UserName className={s.circle} name={`${user.fam} ${user.im}`} />
              <div className={s.info}>
                <div className={s.name}>{`${user.fam} ${user.im}`}</div>
                <div className={s.username}>{user.userName}</div>
              </div>
            </div>
            {data?.map((card) => (
              <IndividualCard
                {...card}
                fetch={getList}
                key={card.briefcaseAccountId}
              />
            ))}
          </div>
          <div className={s.right}>
            <AddIncome update={refreshDataTable} briefcaseAccountId={briefId} />
          </div>
        </div>
      )}
      <IncomeTable
        className={s.carousel}
        ref={ref}
        briefId={briefId}
        showTotal={false}
      />
    </div>
  )
}
