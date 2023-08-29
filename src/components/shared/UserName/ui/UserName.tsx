import cn from 'classnames'

import { IUserName } from '../model/UserName.interface'

import s from './UserName.module.scss'

export const UserName = (props: IUserName) => {
  const { className, name } = props
  return <div className={cn(s.name, className)}>{name}</div>
}
