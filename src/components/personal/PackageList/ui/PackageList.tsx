import { useEffect, useState } from 'react'

import { IGetBriefcaseResponse } from 'models/response/BriefcaseResponse'

import { InfoCard } from 'components/shared/InfoCard'

import BriefcaseServices from '../../../../services/BriefcaseServices'

import s from './PackageList.module.scss'

const { getBriefcase } = BriefcaseServices

export const PackageList = () => {
  const [briefcases, setBriefcases] = useState<IGetBriefcaseResponse | null>()

  const fetchBriefcases = async (size: number): Promise<void> => {
    try {
      const response = await getBriefcase({
        size,
        page: 0,
        criteria: [{ key: 'briefcaseCode', value: 'SIMPLE' }],
      })
      await setBriefcases(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchBriefcases(10)
  }, [])

  return (
    <div className={s.list}>
      {briefcases &&
        briefcases.content.map((brief) => (
          <InfoCard
            key={brief.briefcaseId}
            fetch={() => fetchBriefcases(10)}
            {...brief}
          />
        ))}
    </div>
  )
}
