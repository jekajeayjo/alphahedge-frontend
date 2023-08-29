import { Link } from 'react-router-dom'

import { ArrowBackIcon } from 'assets/icons'

import { IAdminBack } from '../model/AdminBack.interface'

import s from './AdminBack.module.scss'

export const AdminBack = (props: IAdminBack) => {
  const { name, url, adminEdit } = props

  if (adminEdit) {
    return (
      <Link className={s.back} to={url}>
        <img src={ArrowBackIcon} alt="back" />
        {name}
      </Link>
    )
  }

  return null
}
