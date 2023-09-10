import { FinanceBody } from 'components/personal/FinanceBody'
import { TokensProvider } from 'context/TokensProvider'

export const FinancePage = (props: { adminEdit?: boolean }) => {
  const { adminEdit = false } = props

  return (
    <TokensProvider>
      <FinanceBody adminEdit={adminEdit} />
    </TokensProvider>
  )
}
