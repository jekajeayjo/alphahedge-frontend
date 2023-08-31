import { useMemo, useState } from 'react'
import cn from 'classnames'

import { WrapperTable } from 'components/admins/WrapperTable'
import { IndividualBody } from 'components/admins/IndividualBody'
import {
  NavigationDrop,
  NavigationTabType,
} from 'components/shared/NavigationDrop'

import { IContext, UserDataContext } from '../context/UserDataContext'

import { ActiveTableBody } from './ActiveTable/ActiveTableBody'
import { CloseTableBody } from './CloseTable/CloseTableBody'

import s from './IndividualsBody.module.scss'

const tabs: NavigationTabType[] = [
  {
    value: 'active',
    label: 'Активные введения',
    count: 18,
  },
  {
    value: 'close',
    label: 'Заявки на закрытие',
    count: 18,
  },
]

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
      <NavigationDrop className={s.dropdown} tabs={tabs} active={tab}>
        <button
          className={s.tab}
          onClick={() => onClickHandler('active')}
          type="button"
        >
          Активные введения
        </button>
        <button
          className={s.tab}
          onClick={() => onClickHandler('close')}
          type="button"
        >
          Заявки на закрытие
        </button>
      </NavigationDrop>
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
      <UserDataContext.Provider value={user}>
        <WrapperTable hideTitle={Boolean(userData)}>
          <div className={s.body}>
            {userData && <IndividualBody />}
            {!userData && tab === 'active' && <ActiveTableBody />}
            {!userData && tab === 'close' && <CloseTableBody />}
          </div>
        </WrapperTable>
      </UserDataContext.Provider>
    </>
  )
}
