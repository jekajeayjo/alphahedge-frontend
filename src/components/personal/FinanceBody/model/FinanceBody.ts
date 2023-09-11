import { ITransactionHistory } from 'models/response/TransactionResponse'

export interface IFinanceBody {
  data?: ITransactionHistory

  fetchPrev: () => void
  fetchNext: () => void
}
