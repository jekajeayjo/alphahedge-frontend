import { IUserName } from '../model/UserName.interface'

import s from './UserName.module.scss'

export const UserName = (props: IUserName) => {
  const { name } = props
  return <div className={s.name}>{name}</div>
}
