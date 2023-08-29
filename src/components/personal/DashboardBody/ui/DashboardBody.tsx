import { useAuth } from 'hooks/useAuth'

import { AdminBack } from 'components/admins/AdminBack'

import { Balance } from 'components/personal/Balance'
import { ActivePortfolios } from 'components/personal/ActivePortfolios'
import { Referral } from 'components/personal/Referral'
import { ActivePackage } from 'components/personal/ActivePackage'

import { PersonalBlock } from 'components/shared/PersonalBlock'

import s from './DashboardBody.module.scss'

export const DashboardBody = (props: { adminEdit: boolean }) => {
  const { adminEdit } = props

  const { role } = useAuth()

  return (
    <>
      <AdminBack
        name="Golovnea Natalia"
        adminEdit={adminEdit}
        url="/admin/users"
      />
      <div className={s.grid}>
        <div className={s.col}>
          <PersonalBlock label="Общий Баланс">
            <Balance />
          </PersonalBlock>
          <PersonalBlock
            label="Активные портфели"
            link="/"
            textLink="Все портфели"
          >
            <ActivePortfolios isAdmin={role === 'ADMIN'} />
          </PersonalBlock>
        </div>
        <PersonalBlock label="Реферальная система">
          <Referral />
        </PersonalBlock>
      </div>
      <PersonalBlock label="ПАКЕТ АКЦИЙ">
        <ActivePackage />
      </PersonalBlock>
    </>
  )
}
