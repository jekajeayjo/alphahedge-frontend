import cn from 'classnames'

import {
  NavigationDrop,
  NavigationTabType,
} from 'components/shared/NavigationDrop'

import { LockIcon, UnlockIcon } from 'assets/icons'

import { ITabBodyButtons, tabEnum } from '../model/TabBody.interface'

import s from './TabBody.module.scss'

const DISABLE = false

const tabs: NavigationTabType[] = [
  {
    value: tabEnum.ACTIVE,
    label: 'Акции',
    count: 18,
  },
  {
    value: tabEnum.PACKAGE,
    label: 'портфельные инвестиции',
    count: 18,
  },
  {
    value: tabEnum.INDIVIDUAL,
    label: 'индивидуальные введения',
    count: 18,
  },
]

export const TabBodyButtons = (props: ITabBodyButtons) => {
  const { tab, onClick } = props

  return (
    <>
      <NavigationDrop className={s.dropdown} tabs={tabs} active={tab}>
        <button
          className={s.tab}
          onClick={() => onClick(tabEnum.ACTIVE)}
          type="button"
        >
          Акции
        </button>
        <button
          className={s.tab}
          onClick={() => onClick(tabEnum.PACKAGE)}
          type="button"
        >
          портфельные инвестиции
        </button>
        <button
          className={s.tab}
          onClick={() => onClick(DISABLE ? tab : tabEnum.INDIVIDUAL)}
          disabled={DISABLE}
          type="button"
        >
          <img src={DISABLE ? LockIcon : UnlockIcon} alt="lock" />
          индивидуальные введения
        </button>
      </NavigationDrop>
      <div className={s.tabs}>
        <button
          className={cn(s.tab, s.active, {
            [s.current]: tab === tabEnum.ACTIVE,
          })}
          onClick={() => onClick(tabEnum.ACTIVE)}
          type="button"
        >
          Акции
          <div className={s.count}>18</div>
        </button>
        <button
          className={cn(s.tab, s.package, {
            [s.current]: tab === tabEnum.PACKAGE,
          })}
          onClick={() => onClick(tabEnum.PACKAGE)}
          type="button"
        >
          портфельные инвестиции
          <div className={s.count}>4</div>
        </button>
        <button
          className={cn(s.tab, s.individual, {
            [s.current]: tab === tabEnum.INDIVIDUAL,
          })}
          onClick={() => onClick(DISABLE ? tab : tabEnum.INDIVIDUAL)}
          disabled={DISABLE}
          type="button"
        >
          <img src={DISABLE ? LockIcon : UnlockIcon} alt="lock" />
          индивидуальные введения
          <div className={s.count}>3</div>
        </button>
      </div>
    </>
  )
}
