import cn from 'classnames'

import { ITitleSection } from '../model/TitleSection.interface'

import s from './TitleSection.module.scss'

export const TitleSection = (props: ITitleSection) => {
  const { className, children } = props

  return <h2 className={cn(s.title, className)}>{children}</h2>
}
