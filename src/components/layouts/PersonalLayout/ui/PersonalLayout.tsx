import { PersonalAside } from 'components/layouts/PersonalAside'
import { BodyHeader } from 'components/personal/BodyHeader'
import { MobileMenu } from 'components/layouts/MobileMenu'

import { useWindowSize } from 'hooks/useWindowSize'

import { IPersonalLayout } from '../model/PersonalLayout.interface'

import s from './PersonalLayout.module.scss'

export const PersonalLayout = ({ children, adminEdit }: IPersonalLayout) => {
  const { width } = useWindowSize()

  return (
    <div className={s.layout}>
      {width > 900 ? (
        <>
          <PersonalAside adminEdit={adminEdit} />
          <div className={s.overlay} />
        </>
      ) : (
        <MobileMenu adminEdit={adminEdit} />
      )}
      <div className={s.body}>
        <BodyHeader />
        {children}
      </div>
    </div>
  )
}
