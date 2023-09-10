import cn from 'classnames'
import useAuth from 'hooks/useAuth'

import { floorPrice } from 'helpers/floorPrice'

import { UserName } from 'components/shared/UserName'
import { Price } from 'components/shared/Price'

import s from './AsideUserInfo.module.scss'

export const AsideUserInfo = ({ isSplit }: { isSplit: boolean }) => {
  const { auth } = useAuth()

  const { profile, balance } = auth

  return (
    <div className={cn(s.info, { [s.isSplit]: isSplit })}>
      {profile && balance && (
        <>
          <UserName name={balance.fio} />
          <div className={s.content}>
            <Price
              className={s.price}
              price={floorPrice(balance.activeBalance)}
              type="xs"
            />
            <div className={s.account}>
              {profile.role === 'User' ? 'Buisness account' : 'Admin account'}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
