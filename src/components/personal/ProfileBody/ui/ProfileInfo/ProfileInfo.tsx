import { VerificationIcon } from 'assets/icons'

import { ProfileVerification } from '../ProfileVerification/ProfileVerification'
import { ProfileAccordion } from '../ProfileAccordion/ProfileAccordion'

import s from './ProfileInfo.module.scss'

export const ProfileInfo = ({ status }: { status: string }) => (
  <>
    <h3 className={s.title}>Верификация</h3>
    <div className={s.verification}>
      <img src={VerificationIcon} alt="verification" />
      <div className={s.verification__info}>
        <div className={s.verification__title}>KYC</div>
        <div className={s.verification__id}>ID Information</div>
      </div>
    </div>

    <div className={s.inner}>
      <div className={s.left}>
        <ProfileVerification status={status} />
      </div>
      <div className={s.right}>
        <ProfileAccordion />
        <ProfileAccordion />
        <ProfileAccordion />
        <ProfileAccordion />
      </div>
    </div>
  </>
)
