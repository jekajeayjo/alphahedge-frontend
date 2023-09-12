import { useEffect } from 'react'

import { UserName } from 'components/shared/UserName'

import { AddIncome } from 'components/admins/AddIncome'
import { IncomeTable } from 'components/personal/IncomeTable'

import s from './IndividualBody.module.scss'

interface IIndividualBody {
  userId: number
}

export const IndividualBody = ({ userId }: IIndividualBody) => {
  useEffect(() => {
    if (userId) {
      localStorage.setItem('Account-Id', userId.toString())
    }

    return () => {
      localStorage.removeItem('Account-Id')
    }
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.left}>
          <div className={s.userInfo}>
            <UserName className={s.circle} name="GN AN" />
            <div className={s.info}>
              <div className={s.name}>Golovnea Natalia</div>
              <div className={s.username}>Golna</div>
            </div>
          </div>
          {userId}
          {/* <IndividualCard price="$ 25,000.00" isOpen status /> */}
        </div>
        <div className={s.right}>
          <AddIncome />
        </div>
      </div>
      <IncomeTable className={s.carousel} showTotal={false} />
    </div>
  )
}
