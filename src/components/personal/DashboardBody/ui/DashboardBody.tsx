import useDisable from 'hooks/useDisable'

import { AdminBack } from 'components/admins/AdminBack'

import { Balance } from 'components/personal/Balance'
import { ActivePortfolios } from 'components/personal/ActivePortfolios'
import { Referral } from 'components/personal/Referral'
import { ActivePackage } from 'components/personal/ActivePackage'

import { PersonalBlock } from 'components/shared/PersonalBlock'
import { RequestVerification } from 'components/shared/RequestVerification'

import useProfile from 'hooks/context/useProfile'

import s from './DashboardBody.module.scss'

export const DashboardBody = (props: { adminEdit: boolean }) => {
  const { adminEdit } = props

  const { payload } = useProfile()

  const { profile } = payload

  const disable = useDisable()

  const isEdit = localStorage.getItem('editor')

  if (disable) {
    return <RequestVerification />
  }

  return (
    <>
      <AdminBack
        name={`${profile?.fam} ${profile?.im}`}
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
            link={
              isEdit === '1'
                ? `/admin/user/${profile?.accountId}/investments?tab=briefcase`
                : '/personal/investments?tab=briefcase'
            }
            textLink="Все портфели"
          >
            <ActivePortfolios isAdmin={payload?.profile?.role === 'Admin'} />
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
