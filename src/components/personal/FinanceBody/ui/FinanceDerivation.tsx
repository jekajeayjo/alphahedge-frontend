import { TransactionRow } from 'components/personal/TransactionBlock/ui/TransactionRow/TransactionRow'
import { TableComponent } from 'components/shared/table'

import { IFinanceBody } from '../model/FinanceBody'

import s from './FinanceBody.module.scss'

export const FinanceDerivation = (props: IFinanceBody) => {
  const { data, fetchPrev, fetchNext } = props

  return data && !data.empty ? (
    <TableComponent
      classNameWrapper={s.wrapper}
      classNameInner={s.inner}
      classNameHeader={s.head}
      className={s.table}
      classNameBody={s.tbody}
      classNamePagination={s.pagination}
      tables={data.content}
      currentPage={data.number}
      total={data.totalPages}
      fetchNext={fetchNext}
      fetchPrev={fetchPrev}
      renderComponent={(item) => (
        <TransactionRow {...item} key={item.transactionId} />
      )}
      tableTitles={['История выводов']}
    />
  ) : (
    <div />
  )
}