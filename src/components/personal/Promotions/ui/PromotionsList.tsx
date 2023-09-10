import { useEffect, useState } from 'react'

import useDisable from 'hooks/useDisable'

import ActionServices from 'services/ActionServices'
import { IActionItem } from 'models/response/ActionResponse'

import { PromotionCard } from './PromotionCard/PromotionCard'

import s from './Promotions.module.scss'

const { getActionList } = ActionServices

export const PromotionsList = () => {
  const disableAction = useDisable()
  const [data, setData] = useState<IActionItem[]>([])

  useEffect(() => {
    fetchList()
  }, [])

  const fetchList = async () => {
    try {
      const response = await getActionList({ page: 0, size: 10 })
      setData(response.data)
    } catch (e) {
      console.log('Error fetch actions', e)
    }
  }

  return (
    <div className={s.list}>
      {data.map((card) => (
        <PromotionCard key={card.actionId} {...card} disable={disableAction} />
      ))}
    </div>
  )
}
