import { AdminBack } from 'components/admins/AdminBack'

import { Balance } from 'components/personal/Balance'
import { TransactionBlock } from 'components/personal/TransactionBlock'
import { IncomeTableCarousel } from 'components/personal/IncomeTable'

import { PersonalBlock } from 'components/shared/PersonalBlock'

import s from './FinanceBody.module.scss'

export const FinanceBody = (props: { adminEdit: boolean }) => {
  const { adminEdit } = props

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
          <PersonalBlock label="Пополнение">
            <TransactionBlock
              classNameForm={s.form}
              classNameCarousel={s.carousel}
              type="replenishment"
            />
          </PersonalBlock>
        </div>
        <PersonalBlock label="Вывод">
          <TransactionBlock classNameForm={s.derivation} type="derivation" />
        </PersonalBlock>
      </div>
      <IncomeTableCarousel />
    </>
  )
}
