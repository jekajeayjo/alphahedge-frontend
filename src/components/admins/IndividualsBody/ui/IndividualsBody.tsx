import { useMemo, useState } from 'react'
import cn from 'classnames'

import { WrapperTable } from 'components/admins/WrapperTable'
import { IndividualBody } from 'components/admins/IndividualBody'

import { ActiveTableBody } from './ActiveTable/ActiveTableBody'

import { IContext, UserDataContext } from '../context/UserDataContext'

import { CloseTableBody } from './CloseTable/CloseTableBody'

import s from './IndividualsBody.module.scss'

export const IndividualsBody = () => {
  const [tab, setTab] = useState<'active' | 'close'>('active')
  const [userData, setUserData] = useState<null | boolean>(null)

  const user = useMemo<IContext>(
    () => ({ user: userData, setUserData }),
    [userData, setUserData],
  )

  const onClickHandler = (type: 'active' | 'close') => {
    setTab(type)
    setUserData(null)
  }

  return (
    <>
      <div className={s.tabs}>
        <button
          className={cn(s.tab, s.active, { [s.current]: tab === 'active' })}
          onClick={() => onClickHandler('active')}
          type="button"
        >
          Активные введения
          <div className={s.count}>18</div>
        </button>
        <button
          className={cn(s.tab, s.close, {
            [s.current]: tab === 'close',
          })}
          onClick={() => onClickHandler('close')}
          type="button"
        >
          Заявки на закрытие
          <div className={s.count}>4</div>
        </button>
      </div>
      <WrapperTable>
        <div className={s.body}>
          <UserDataContext.Provider value={user}>
            {userData && <IndividualBody />}
            {!userData && tab === 'active' && <ActiveTableBody />}
            {!userData && tab === 'close' && <CloseTableBody />}
          </UserDataContext.Provider>
        </div>
      </WrapperTable>
    </>
  )
}
