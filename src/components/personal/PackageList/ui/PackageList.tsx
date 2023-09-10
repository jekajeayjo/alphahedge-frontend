import { useEffect, useState } from 'react'

import useInvestCounter from 'hooks/useInvestCounter'

import { IGetBriefcaseResponse } from 'models/response/BriefcaseResponse'

import { InfoCard } from 'components/shared/InfoCard'
import { Loader } from 'components/shared/Loader'

import BriefcaseServices from 'services/BriefcaseServices'

import s from './PackageList.module.scss'

const { getBriefcase } = BriefcaseServices

export const PackageList = () => {
  const [briefcases, setBriefcases] = useState<IGetBriefcaseResponse | null>()

  const { setCounter } = useInvestCounter()

  const fetchBriefcases = async (size: number): Promise<void> => {
    try {
      const response = await getBriefcase({
        size,
        page: 0,
        criteria: [{ key: 'briefcaseCode', value: 'SIMPLE' }],
      })
      await setBriefcases(response.data)
      setCounter({
        simple: response.data.totalElements,
        actions: null,
        advanced: null,
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchBriefcases(10)
  }, [])

  if (!briefcases) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={s.list}>
      {briefcases.content.map((brief) => (
        <InfoCard
          key={brief.briefcaseId}
          fetch={() => fetchBriefcases(10)}
          {...brief}
        />
      ))}
    </div>
  )
}
