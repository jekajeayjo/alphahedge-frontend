import { useEffect, useState } from 'react'
import cn from 'classnames'

import { LogoBlue } from 'assets/icons'

import { AsideNavigation } from 'components/personal/AsideNavigation'
import { AsideUserInfo } from 'components/personal/AsideUserInfo'

import s from './MobileMenu.module.scss'

export const MobileMenu = (props: { adminEdit: boolean }) => {
  const { adminEdit } = props

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (isOpen) {
        const body = document.body
        body.classList.remove('fixed')
        setIsOpen(false)
      }
    })
  }, [isOpen])

  const toggleOpenHandler = (open: boolean) => {
    const body = document.body
    if (!open) {
      body.classList.add('fixed')
    } else {
      body.classList.remove('fixed')
    }
    setIsOpen(!open)
  }

  return (
    <>
      <div className={cn(s.menu, { [s.open]: isOpen })}>
        <div className={s.logo}>
          <img src={LogoBlue} alt="logo" />
        </div>
        <AsideUserInfo isSplit={false} />
        <AsideNavigation adminEdit={adminEdit} />
      </div>
      <div className={s.header}>
        <button
          className={cn(s.button, { [s.active]: isOpen })}
          type="button"
          onClick={() => toggleOpenHandler(isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </>
  )
}
