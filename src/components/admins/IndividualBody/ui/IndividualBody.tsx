import { UserName } from 'components/shared/UserName'

import { AddIncome } from 'components/admins/AddIncome'
import { IncomeTableCarousel } from 'components/personal/IncomeTable'

import s from './IndividualBody.module.scss'

export const IndividualBody = () => (
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
        {/* <IndividualCard price="$ 25,000.00" isOpen status /> */}
      </div>
      <div className={s.right}>
        <AddIncome />
      </div>
    </div>
    <IncomeTableCarousel className={s.carousel} showTotal={false} />
  </div>
)
