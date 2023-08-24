import { PersonalLayout } from 'components/layouts/PersonalLayout'

import { Balance } from 'components/personal/Balance'
import { Referral } from 'components/personal/Referral'
import { ActivePortfolios } from 'components/personal/ActivePortfolios'
import { ActivePackage } from 'components/personal/ActivePackage'

import { PersonalBlock } from 'components/shared/PersonalBlock'

import s from './Dashboard.module.scss'

export const Dashboard = () => (
  <PersonalLayout>
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
          <ActivePortfolios />
        </PersonalBlock>
      </div>
      <PersonalBlock label="Реферальная система">
        <Referral />
      </PersonalBlock>
    </div>
    <PersonalBlock label="ПАКЕТ АКЦИЙ">
      <ActivePackage />
    </PersonalBlock>
  </PersonalLayout>
)
