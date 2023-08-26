import cn from 'classnames'

import { LockIcon, UnlockIcon } from 'assets/icons'

import { ITabBodyButtons, tabEnum } from '../model/TabBody.interface'

import s from './TabBody.module.scss'

const DISABLE = false

export const TabBodyButtons = (props: ITabBodyButtons) => {
  const { tab, onClick } = props

  return (
    <div className={s.tabs}>
      <button
        className={cn(s.tab, s.active, { [s.current]: tab === tabEnum.ACTIVE })}
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
  )
}
