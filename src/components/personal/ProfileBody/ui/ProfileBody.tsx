import { ProfileEditor } from './ProfileEditor/ProfileEditor'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

import s from './ProfileBody.module.scss'

export const ProfileBody = () => (
  <div className={s.wrapper}>
    <ProfileEditor />
    <ProfileInfo />
  </div>
)
