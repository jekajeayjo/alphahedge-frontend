import { UserName } from 'components/shared/UserName'
import { Price } from 'components/shared/Price'

import s from './AsideUserInfo.module.scss'

export const AsideUserInfo = () => (
  <div className={s.info}>
    <UserName name="gn" />
    <div className={s.content}>
      <Price className={s.price} price="985,563.00" type="xs" />
      <div className={s.account}>Buisness account</div>
    </div>
  </div>
)
