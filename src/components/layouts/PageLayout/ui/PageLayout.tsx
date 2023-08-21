import { FC } from 'react'

import { IPageLayout } from '../model/PageLayout.interface'
import { Header } from '../../Header'

import s from './PageLayout.module.scss'

export const PageLayout: FC<IPageLayout> = (props) => {
  const { children } = props
  return (
    <div className={s.layout}>
      <Header />
      {children}
    </div>
  )
}
