import { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import { ArrowAccordionIcon } from 'assets/icons'

import s from './ProfileAccordion.module.scss'

export const ProfileAccordion = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={s.item}>
      <button className={s.header} type="button" onClick={onToggle}>
        Как моя информация будет использоваться и храниться?
        <img
          className={isOpen ? s.active : ''}
          src={ArrowAccordionIcon}
          alt="arrow"
        />
      </button>
      <AnimateHeight height={isOpen ? 'auto' : 0}>
        <p className={s.content}>
          KYC — это процесс, используемый инвестиционными платформами и многими
          другими компаниями для проверки личности и финансовой информации
          клиентов. Основная цель — оценить потенциальный риск, предотвратить
          участие несовершеннолетних лиц и пресечь финансовые преступления,
          такие как мошенничество, коррупция, взяточничество и отмывание денег.
        </p>
      </AnimateHeight>
    </div>
  )
}
