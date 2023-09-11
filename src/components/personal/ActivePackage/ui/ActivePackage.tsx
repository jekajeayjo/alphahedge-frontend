import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import ActionServices from 'services/ActionServices'
import { IActionBalanceResponse } from 'models/response/ActionResponse'

import { ActiveTableRow } from 'components/shared/ActiveTableRow'
import { TableLabel } from 'components/shared/table'
import { TableComponent } from 'components/shared/table/ui/TableComponent/TableComponent'
import { Loader } from 'components/shared/Loader'

import { floorPrice } from 'helpers/floorPrice'

import { ArrowLinkBlack } from 'assets/icons'

import s from './ActivePackage.module.scss'

const { getActionBalance } = ActionServices

export const ActivePackage = () => {
  const [data, setData] = useState<IActionBalanceResponse>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await getActionBalance({
        page: 0,
        size: 6,
      })
      setData(response.data)
    } catch (e) {
      console.log('Error fetch action balance', e)
    }
  }

  const fetchNext = async () => {
    if (data && !data.actionAccountBalanceViewDtoPage.last) {
      try {
        const response = await getActionBalance({
          page: data.actionAccountBalanceViewDtoPage.number + 1,
          size: 6,
        })
        setData(response.data)
      } catch (e) {
        console.log('Error fetch gain', e)
      }
    }
  }

  const fetchPrev = async () => {
    if (data && !data.actionAccountBalanceViewDtoPage.first) {
      try {
        const response = await getActionBalance({
          page: data.actionAccountBalanceViewDtoPage.number - 1,
          size: 6,
        })
        setData(response.data)
      } catch (e) {
        console.log('Error fetch gain', e)
      }
    }
  }

  if (!data) {
    return (
      <div className={cn(s.wrapper, s.pending)}>
        <Loader className={s.loader} />
      </div>
    )
  }

  if (data?.countActions === 0) {
    return <div className={s.empty}>У вас нет пакетов акций</div>
  }

  return (
    <>
      <div className={s.header}>
        <div className={s.left}>
          <TableLabel
            label="общая стоимость Пакета"
            value={floorPrice(data.balance).toString()}
            type="price"
          />
          <TableLabel
            label="Общее кол-во Акций"
            value={data.countActions.toString()}
            type="num"
          />
        </div>
        <div className={s.right}>
          <Link to="/personal/investments?tab=action">
            Все акции
            <img src={ArrowLinkBlack} alt="arrow" />
          </Link>
        </div>
      </div>

      <TableComponent
        classNameInner={s.wrapper}
        className={s.table}
        classNameBody={s.tbody}
        tableTitles={[
          'Название',
          '',
          'Текущая цена',
          'Приобретенные акции',
          'Общая стоимость',
        ]}
        tables={data.actionAccountBalanceViewDtoPage.content}
        currentPage={data.actionAccountBalanceViewDtoPage.number}
        total={data.actionAccountBalanceViewDtoPage.totalPages}
        fetchNext={fetchNext}
        fetchPrev={fetchPrev}
        renderComponent={(action) => (
          <ActiveTableRow {...action} key={action.accountId + action.gain} />
        )}
      />
    </>
  )
}
