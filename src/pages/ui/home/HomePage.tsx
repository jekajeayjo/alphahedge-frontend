import { PageLayout } from 'components/layouts/PageLayout'

import { MainBanner } from './screens/MainBanner/MainBanner'
import { Uniqueness } from './screens/Uniqueness/Uniqueness'

export const HomePage = () => (
  <PageLayout>
    <MainBanner />
    <Uniqueness />
  </PageLayout>
)
