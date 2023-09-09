import { useState } from 'react'

import { RequestVerification } from 'components/shared/RequestVerification'

import { Promotions, PromotionTable } from 'components/personal/Promotions'
import { PackageList } from 'components/personal/PackageList'
import { IncomeTableCarousel, Individual } from 'components/personal/Individual'
import { AdminBack } from 'components/admins/AdminBack'

import useDisable from 'hooks/useDisable'

import { tabEnum } from '../model/TabBody.interface'

import { TabBodyButtons } from './TabBodyButtons'

import s from './TabBody.module.scss'

export const TabBody = (props: { adminEdit: boolean }) => {
  const { adminEdit } = props

  const [tab, setTab] = useState<tabEnum>(tabEnum.ACTIVE)

  const disable = useDisable()

  const onClickHandler = (type: tabEnum) => {
    setTab(type)
  }

  if (disable) {
    return (
      <div className={s.grid}>
        <RequestVerification />
      </div>
    )
  }

  return (
    <>
      <AdminBack
        name="Golovnea Natalia"
        adminEdit={adminEdit}
        url="/admin/users"
      />
      <div className={s.wrapper}>
        <TabBodyButtons tab={tab} onClick={onClickHandler} />
        <div className={s.body}>
          {tab === tabEnum.ACTIVE && <Promotions />}
          {tab === tabEnum.PACKAGE && <PackageList />}
          {tab === tabEnum.INDIVIDUAL && <Individual />}
        </div>
        {tab === tabEnum.ACTIVE && <PromotionTable />}
        {tab === tabEnum.INDIVIDUAL && <IncomeTableCarousel />}
      </div>
    </>
  )
}
