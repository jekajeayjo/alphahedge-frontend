import cn from 'classnames'

import { TableComponent } from 'components/shared/table'
import { TransactionRow } from 'components/personal/TransactionBlock/ui/TransactionRow/TransactionRow'

import { ITransactionBlock } from '../model/Transaction.interface'

import { TransactionForm } from './TransactionForm/TransactionForm'

import s from './TransactionBlock.module.scss'

const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const TransactionBlock = (props: ITransactionBlock) => {
  const { classNameForm, type, perPage } = props
  return (
    <div>
      <TransactionForm className={classNameForm} type={type} />
      <TableComponent
        classNameWrapper={s.wrapper}
        classNameInner={cn(s.inner, { [s.md]: type === 'replenishment' })}
        classNameHeader={s.head}
        className={s.table}
        classNameBody={s.tbody}
        classNamePagination={cn(s.pagination, {
          [s.md]: type === 'replenishment',
        })}
        tables={mockArr}
        perPage={perPage}
        renderComponent={(item) => <TransactionRow key={item} />}
        tableTitles={['История Пополнений']}
      />
    </div>
  )
}
