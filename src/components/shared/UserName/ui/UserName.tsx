import cn from 'classnames'

import { IUserName } from '../model/UserName.interface'

import s from './UserName.module.scss'

export const UserName = (props: IUserName) => {
  const { className, name } = props

  const splitName = name.split(' ')

  return (
    <div className={cn(s.name, className)}>
      {splitName[0].slice(0, 1)}
      {splitName[1].slice(0, 1)}
    </div>
  )
}
