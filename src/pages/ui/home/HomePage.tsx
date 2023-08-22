import { PageLayout } from 'components/layouts/PageLayout'

import { MainBanner } from './screens/MainBanner/MainBanner'
import { Uniqueness } from './screens/Uniqueness/Uniqueness'
import { Profitability } from './screens/Profitability/Profitability'

export const HomePage = () => (
  <PageLayout>
    <MainBanner />
    <Uniqueness />
    <Profitability />
  </PageLayout>
)
