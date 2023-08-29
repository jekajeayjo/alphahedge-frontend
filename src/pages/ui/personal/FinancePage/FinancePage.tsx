import { FinanceBody } from 'components/personal/FinanceBody'

export const FinancePage = (props: { adminEdit?: boolean }) => {
  const { adminEdit = false } = props

  return <FinanceBody adminEdit={adminEdit} />
}
