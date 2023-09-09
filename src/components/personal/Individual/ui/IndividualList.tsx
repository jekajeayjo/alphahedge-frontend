import { useEffect, useState } from 'react'

import { IndividualCard } from 'components/shared/IndividualCard'
import { IBriefcaseActive } from 'models/response/BriefcaseResponse'

import BriefcaseServices from '../../../../services/BriefcaseServices'

import s from './Individual.module.scss'

const { getBriefcase } = BriefcaseServices

export const IndividualList = () => {
  const [data, setData] = useState<IBriefcaseActive[]>([])

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    try {
      const response = await getBriefcase({
        page: 0,
        size: 20,
        criteria: [{ key: 'briefcaseCode', value: 'ADVANCED' }],
      })
      setData(response.data.content)
    } catch (e) {
      console.log('error individualList', e)
    }
  }

  return (
    <div className={s.right}>
      {data.map((card) => (
        <IndividualCard key={card.briefcaseId} fetch={getList} {...card} />
      ))}
    </div>
  )
}
