import cn from 'classnames'

import { TransactionRow } from 'components/personal/TransactionBlock/ui/TransactionRow/TransactionRow'
import { TableComponent } from 'components/shared/table'

import { IFinanceBody } from '../model/FinanceBody'

import s from './FinanceBody.module.scss'

export const FinanceReplenishment = (props: IFinanceBody) => {
  const { data, fetchPrev, fetchNext } = props

  return data && !data.empty ? (
    <TableComponent
      classNameWrapper={s.wrapper}
      classNameInner={cn(s.inner, s.md)}
      classNameHeader={s.head}
      className={s.table}
      classNameBody={s.tbody}
      classNamePagination={cn(s.pagination, s.md)}
      tables={data.content}
      currentPage={data.number}
      total={data.totalPages}
      fetchNext={fetchNext}
      fetchPrev={fetchPrev}
      renderComponent={(item) => (
        <TransactionRow {...item} key={item.transactionId} />
      )}
      tableTitles={['История Пополнений']}
    />
  ) : (
    <div />
  )
}
