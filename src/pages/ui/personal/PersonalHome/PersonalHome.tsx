import { ProfileBody } from 'components/personal/ProfileBody'

export const PersonalHome = (props: { adminEdit?: boolean }) => {
  const { adminEdit = false } = props

  return <ProfileBody adminEdit={adminEdit} />
}
