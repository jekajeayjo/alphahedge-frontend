import { IndividualsBody } from 'components/admins/IndividualsBody'
import { AdvancedProvider } from 'context/AdvancedCounter'
import { IndividualDataProvider } from 'context/IndividualData'

export const IndividualsPage = () => (
  <AdvancedProvider>
    <IndividualDataProvider>
      <IndividualsBody />
    </IndividualDataProvider>
  </AdvancedProvider>
)
