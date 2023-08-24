import { ReferralHeader } from './ReferralHeader'
import { ReferralCarousel } from './ReferralCarousel'

import s from './Referral.module.scss'

export const Referral = () => (
  <div className={s.referral}>
    <ReferralHeader />
    <ReferralCarousel />
  </div>
)
