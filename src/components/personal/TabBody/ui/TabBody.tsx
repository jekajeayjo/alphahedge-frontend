import { useState } from 'react'

import { Promotions, PromotionTable } from 'components/personal/Promotions'
import { PackageList } from 'components/personal/PackageList'
import { Individual } from 'components/personal/Individual'
import { IndividualTableCarousel } from 'components/personal/Individual/ui/IndividualTable/IndividualTableCarousel'

import { tabEnum } from '../model/TabBody.interface'

import { TabBodyButtons } from './TabBodyButtons'

import s from './TabBody.module.scss'

export const TabBody = () => {
  const [tab, setTab] = useState<tabEnum>(tabEnum.ACTIVE)

  const onClickHandler = (type: tabEnum) => {
    setTab(type)
  }

  return (
    <div className={s.wrapper}>
      <TabBodyButtons tab={tab} onClick={onClickHandler} />
      <div className={s.body}>
        {tab === tabEnum.ACTIVE && <Promotions />}
        {tab === tabEnum.PACKAGE && <PackageList />}
        {tab === tabEnum.INDIVIDUAL && <Individual />}
      </div>
      {tab === tabEnum.ACTIVE && <PromotionTable />}
      {tab === tabEnum.INDIVIDUAL && <IndividualTableCarousel />}
    </div>
  )
}
