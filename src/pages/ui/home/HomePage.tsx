import { PageLayout } from 'components/layouts/PageLayout'

import { MainBanner } from './screens/MainBanner/MainBanner'
import { Uniqueness } from './screens/Uniqueness/Uniqueness'
import { Profitability } from './screens/Profitability/Profitability'
import { Сases } from './screens/Сases/Сases'
import { Teams } from './screens/Teams/Teams'
import { Speakers } from './screens/Speakers/Speakers'

export const HomePage = () => (
  <PageLayout>
    <MainBanner />
    <Uniqueness />
    <Profitability />
    <Сases />
    <Teams />
    <Speakers />
  </PageLayout>
)
