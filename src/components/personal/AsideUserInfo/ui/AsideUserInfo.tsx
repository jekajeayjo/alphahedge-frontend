import cn from 'classnames'

import { floorPrice } from 'helpers/floorPrice'

import useProfile from 'hooks/context/useProfile'
import useBalance from 'hooks/context/useBalance'

import { UserName } from 'components/shared/UserName'
import { Price } from 'components/shared/Price'

import s from './AsideUserInfo.module.scss'

export const AsideUserInfo = ({ isSplit }: { isSplit: boolean }) => {
  const { payload } = useProfile()
  const { cash } = useBalance()

  return (
    <div className={cn(s.info, { [s.isSplit]: isSplit })}>
      {payload.profile && cash.balance && (
        <>
          <UserName name={cash.balance.fio} />
          <div className={s.content}>
            <Price
              className={s.price}
              price={floorPrice(cash.balance.activeBalance)}
              type="xs"
            />
            <div className={s.account}>
              {payload.profile.role === 'User'
                ? 'Buisness account'
                : 'Admin account'}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
