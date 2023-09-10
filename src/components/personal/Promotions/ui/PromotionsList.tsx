import { useEffect, useState } from 'react'

import useDisable from 'hooks/useDisable'
import useInvestCounter from 'hooks/useInvestCounter'

import ActionServices from 'services/ActionServices'

import { IActionItem } from 'models/response/ActionResponse'

import { Loader } from 'components/shared/Loader'

import { PromotionCard } from './PromotionCard/PromotionCard'

import s from './Promotions.module.scss'

const { getActionList } = ActionServices

export const PromotionsList = () => {
  const disableAction = useDisable()
  const [data, setData] = useState<IActionItem[] | null>(null)

  const { setCounter } = useInvestCounter()

  useEffect(() => {
    fetchList()
  }, [])

  const fetchList = async () => {
    try {
      const response = await getActionList({ page: 0, size: 10 })
      setData(response.data)
      setCounter({
        simple: null,
        advanced: null,
        actions: response.data.length,
      })
    } catch (e) {
      console.log('Error fetch actions', e)
    }
  }

  if (!data) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={s.list}>
      {data.map((card) => (
        <PromotionCard key={card.actionId} {...card} disable={disableAction} />
      ))}
    </div>
  )
}
