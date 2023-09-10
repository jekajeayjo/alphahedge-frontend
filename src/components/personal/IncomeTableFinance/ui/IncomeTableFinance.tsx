import { useEffect, useState } from 'react'
import cn from 'classnames'

import { TableComponent, TableLabel } from 'components/shared/table'

import BriefcaseServices from 'services/BriefcaseServices'
import { IGetGainBriefcaseResponse } from 'models/response/BriefcaseResponse'

import { IIncomeTableCarousel } from '../model/IncomeTableCarousel.interface'

import { IncomeTableRow } from './IncomeTableRow'

import s from './IncomeTableFinance.module.scss'

const { getGainBriefcase } = BriefcaseServices

export const IncomeTableFinance = (props: IIncomeTableCarousel) => {
  const { className, showTotal = true } = props

  const [data, setData] = useState<IGetGainBriefcaseResponse>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await getGainBriefcase({
        page: 0,
        size: 6,
      })
      setData(response.data)
    } catch (e) {
      console.log('Error fetch gain', e)
    }
  }

  const fetchNext = async () => {
    if (data && !data.page.last) {
      try {
        const response = await getGainBriefcase({
          page: data.page.number + 1,
          size: 6,
        })
        setData(response.data)
      } catch (e) {
        console.log('Error fetch gain', e)
      }
    }
  }

  const fetchPrev = async () => {
    if (data && !data.page.first) {
      try {
        const response = await getGainBriefcase({
          page: data.page.number - 1,
          size: 6,
        })
        setData(response.data)
      } catch (e) {
        console.log('Error fetch gain', e)
      }
    }
  }

  if (!data) {
    return <div />
  }

  return (
    <div className={cn(s.wrapper, className)}>
      <div className={s.header}>
        <div className={s.title}>Доходы</div>
        {showTotal && (
          <div className={s.total}>
            {data.gainSum && (
              <TableLabel
                label="общее кол-во Доходов"
                value={data.gainSum.toString()}
                type="price"
              />
            )}
            {data.briefcaseCount && (
              <TableLabel
                label="кол-во Активных Портфелей"
                value={data.briefcaseCount.toString()}
                type="num"
              />
            )}
          </div>
        )}
      </div>

      <TableComponent
        className={s.table}
        classNameInner={s.inner}
        tableTitles={[
          'Портфель',
          'Тип портфеля',
          'Сумма',
          'Дата',
          'Сумма дохода',
        ]}
        total={data.page.totalPages}
        currentPage={data.page.number}
        fetchPrev={fetchPrev}
        fetchNext={fetchNext}
        tables={data.page.content}
        renderComponent={(item) => (
          <IncomeTableRow key={item.briefcaseAccountGainId} {...item} />
        )}
      />
    </div>
  )
}
