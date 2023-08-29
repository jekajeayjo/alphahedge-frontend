import { TabBody } from 'components/personal/TabBody'

export const InvestmentsPage = (props: { adminEdit?: boolean }) => {
  const { adminEdit = false } = props

  return <TabBody adminEdit={adminEdit} />
}
