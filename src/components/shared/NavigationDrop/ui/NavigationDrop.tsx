import { useRef, useState } from 'react'
import cn from 'classnames'
import AnimateHeight from 'react-animate-height'

import { useOnOutsideClick } from 'hooks/useOnOutsideClick'

import { DropArrowBlackIcon } from 'assets/icons'

import { INavigationDrop } from '../model/NavigationDrop.interface'

import s from './NavigationDrop.module.scss'

export const NavigationDrop = (props: INavigationDrop) => {
  const { children, className, tabs, active } = props

  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<any>()

  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState)
  }

  useOnOutsideClick(ref, () => setIsOpen(false))

  const current = tabs.find((tab) => tab.value === active)

  return (
    <div className={cn(s.wrapper, className)}>
      <button
        className={s.header}
        type="button"
        onClick={toggleHandler}
        ref={ref}
      >
        <span className={s.current}>{current?.label}</span>
        {current?.count && <span className={s.counter}>{current.count}</span>}
        <img
          className={cn(s.arrow, { [s.rotate]: isOpen })}
          src={DropArrowBlackIcon}
          alt=""
        />
      </button>
      <AnimateHeight className={s.inner} height={isOpen ? 'auto' : 0}>
        <div className={s.content}>{children}</div>
      </AnimateHeight>
    </div>
  )
}
