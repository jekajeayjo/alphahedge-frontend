import { AdminBack } from 'components/admins/AdminBack'

import { ProfileEditor } from './ProfileEditor/ProfileEditor'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

import s from './ProfileBody.module.scss'

export const ProfileBody = (props: { adminEdit: boolean }) => {
  const { adminEdit } = props

  return (
    <>
      <AdminBack
        name="Golovnea Natalia"
        adminEdit={adminEdit}
        url="/admin/users"
      />
      <div className={s.wrapper}>
        <ProfileEditor />
        <ProfileInfo />
      </div>
    </>
  )
}
