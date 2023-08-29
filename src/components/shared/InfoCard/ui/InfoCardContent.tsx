import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import cn from 'classnames'

import { LightningText } from 'components/shared/LightningText'
import { Button } from 'components/shared/Button'

import { ButtonAccordionIcon, RocketIcon } from 'assets/icons'

import { IInfoCardContent } from '../model/InfoCard.interface'

import s from './InfoCard.module.scss'

export const InfoCardContent = (props: IInfoCardContent) => {
  const { isActive, isAdmin } = props

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
          <span>прорывные инновации</span>
          {isAdmin && (
            <Button className={s.close} type="button">
              ЗАКРЫТЬ
            </Button>
          )}
        </div>
        <button
          className={cn(s.toggler, { [s.rotate]: open })}
          type="button"
          onClick={onToggle}
        >
          Подробнее
          <img src={ButtonAccordionIcon} alt="arrow" />
        </button>
      </div>
      <p className={s.text}>
        Фонд определяет «подрывную инновацию» как внедрение технологически
        нового продукта или услуги, которые потенциально могут изменить то, как
        работает мир.
      </p>
      <AnimateHeight
        className={cn(s.accordion, { [s.haveActive]: isActive })}
        height={open ? 'auto' : 0}
      >
        <div className={s.content}>
          <p className={s.content__text}>
            Фонд определяет «подрывную инновацию» как внедрение технологически
            нового продукта или услуги, которые потенциально могут изменить то,
            как работает мир. Фонд определяет «подрывную инновацию» как
            внедрение технологически нового продукта или услуги, которые
            потенциально могут изменить то, как работает мир.
          </p>
          <ul className={s.content__list}>
            <LightningText text="ДНК-технологии и «геномная революция»" />
            <LightningText text="Автоматизация, робототехника и хранение энергии" />
            <LightningText text="Искусственный интеллект и «Интернет следующего поколения»" />
            <LightningText text="Финтех инновации" />
          </ul>
          <div className={s.content__packages}>
            <div className={s.content__packages_label}>
              Акции, входящие в данные пакет :
            </div>
            <div className={s.content__packages_list}>
              <div className={s.content__package}>TESLA INC</div>
              <div className={s.content__package}>COINBASE GLOBAL INC</div>
              <div className={s.content__package}>BLOCK INC</div>
              <div className={s.content__package}>UNITY SOFTWARE INC</div>
              <div className={s.content__package}>UIPATH INC</div>
              <div className={s.content__package}>veracyte INC</div>
              <div className={s.content__package}>EXACT SCIENCES CORP</div>
            </div>
          </div>
        </div>
      </AnimateHeight>
    </>
  )
}
