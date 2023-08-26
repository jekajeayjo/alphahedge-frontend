import { TransactionForm } from './TransactionForm/TransactionForm'
import { TransactionTableCarousel } from './TransactionTable/TransactionTableCarousel'

import { ITransactionBlock } from '../model/Transaction.interface'

export const TransactionBlock = (props: ITransactionBlock) => {
  const { classNameForm, type, classNameCarousel } = props
  return (
    <div>
      <TransactionForm className={classNameForm} type={type} />
      <TransactionTableCarousel className={classNameCarousel} />
    </div>
  )
}
