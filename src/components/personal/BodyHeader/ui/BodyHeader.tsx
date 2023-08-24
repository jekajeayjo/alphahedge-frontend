import { ChangeLanguage } from 'components/shared/ChangeLanguage'

import { WelcomeHeader } from './WelcomeHeader'

import s from './BodyHeader.module.scss'

export const BodyHeader = () => (
  <header className={s.header}>
    <WelcomeHeader />
    <div className={s.lang}>
      <ChangeLanguage />
    </div>
  </header>
)
