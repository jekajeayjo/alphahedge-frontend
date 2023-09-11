import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { LightningText } from 'components/shared/LightningText'
import { Button } from 'components/shared/Button'

import { ButtonAccordionIcon, RocketIcon } from 'assets/icons'

import { IInfoCardContent } from '../model/InfoCard.interface'

import s from './InfoCard.module.scss'

export const InfoCardContent = (props: IInfoCardContent) => {
  const [t] = useTranslation(`simpleCard`)
  const [c] = useTranslation(`common`)

  const {
    isActive,
    isAdmin,
    name,
    description,
    titleList,
    actionList,
    technologies,
  } = props

  const [open, setOpen] = useState(false)

  const onToggle = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <>
      <div className={s.header}>
        <div className={s.title}>
          <div className={s.icon}>
            <img src={RocketIcon} alt="rocket" />
          </div>
          <span>{name}</span>
          {isAdmin && isActive && (
            <Button className={s.close} type="button">
              {c('closeBtn')}
            </Button>
          )}
        </div>
        <button
          className={cn(s.toggler, { [s.rotate]: open })}
          type="button"
          onClick={onToggle}
        >
          {c('moreBtn')}
          <img src={ButtonAccordionIcon} alt="arrow" />
        </button>
      </div>
      <p className={cn(s.text, { [s.split]: !open })}>{description}</p>
      {isAdmin && isActive && (
        <Button className={s.mobClose} type="button">
          {c('closeBtn')}
        </Button>
      )}
      <AnimateHeight
        className={cn(s.accordion, { [s.haveActive]: isActive })}
        height={open ? 'auto' : 0}
      >
        <div className={s.content}>
          <p className={s.content__text}>{titleList}</p>
          <ul className={s.content__list}>
            {technologies.map((text, idx) => (
              <LightningText key={idx} text={text} />
            ))}
          </ul>
          <div className={s.content__packages}>
            <div className={s.content__packages_label}>{t('actionTitle')}</div>
            <div className={s.content__packages_list}>
              {actionList.map((action, idx) => (
                <div className={s.content__package} key={idx}>
                  {action}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateHeight>
    </>
  )
}
