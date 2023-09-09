import { AdminBack } from 'components/admins/AdminBack'

import { RequestVerification } from 'components/shared/RequestVerification'

import { Balance } from 'components/personal/Balance'
import { TransactionBlock } from 'components/personal/TransactionBlock'
import { IncomeTableCarousel } from 'components/personal/IncomeTable'
import useDisable from 'hooks/useDisable'

import { PersonalBlock } from 'components/shared/PersonalBlock'

import s from './FinanceBody.module.scss'

export const FinanceBody = (props: { adminEdit: boolean }) => {
  const { adminEdit } = props

  const disable = useDisable()

  if (disable) {
    return <RequestVerification />
  }

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
          <PersonalBlock className={s.block} label="Пополнение">
            <TransactionBlock
              classNameForm={s.form}
              perPage={4}
              type="replenishment"
            />
          </PersonalBlock>
        </div>
        <PersonalBlock label="Вывод">
          <TransactionBlock
            classNameForm={s.derivation}
            perPage={6}
            type="derivation"
          />
        </PersonalBlock>
      </div>
      <IncomeTableCarousel />
    </>
  )
}
