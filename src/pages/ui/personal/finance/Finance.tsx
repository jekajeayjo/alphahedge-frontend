import { PersonalLayout } from 'components/layouts/PersonalLayout'

import { IncomeTableCarousel } from 'components/personal/IncomeTable'
import { Balance } from 'components/personal/Balance'
import { TransactionBlock } from 'components/personal/TransactionBlock'

import { PersonalBlock } from 'components/shared/PersonalBlock'

import s from './Finance.module.scss'

export const Finance = () => (
  <PersonalLayout>
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
  </PersonalLayout>
)
