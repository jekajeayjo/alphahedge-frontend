import { Link } from 'react-router-dom'

import useGetMainInfo from 'hooks/useGetMainInfo'
import { ArrowBackIcon } from 'assets/icons'

import { IAdminBack } from '../model/AdminBack.interface'

import s from './AdminBack.module.scss'

export const AdminBack = (props: IAdminBack) => {
  const { name, url, adminEdit } = props

  const getUser = useGetMainInfo()

  const deleteUserId = async () => {
    try {
      await localStorage.removeItem('Account-Id')
      await localStorage.removeItem('editor')
      await getUser()
    } catch (e) {
      console.log('Error fetch user', e)
    }
  }

  if (adminEdit) {
    return (
      <Link className={s.back} to={url} onClick={deleteUserId}>
        <img src={ArrowBackIcon} alt="back" />
        {name}
      </Link>
    )
  }

  return null
}
