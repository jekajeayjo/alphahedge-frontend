import { DashboardBody } from 'components/personal/DashboardBody'

export const DashboardPage = (props: { adminEdit?: boolean }) => {
  const { adminEdit = false } = props

  return <DashboardBody adminEdit={adminEdit} />
}
