import { InfoCard } from 'components/shared/InfoCard'

import s from './PackageList.module.scss'

export const PackageList = () => (
  <div className={s.list}>
    <InfoCard isActive />
    <InfoCard />
    <InfoCard />
    <InfoCard isActive />
  </div>
)
