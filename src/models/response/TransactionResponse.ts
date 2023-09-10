import { Pageable } from 'models/IPageable'

export interface ITransaction {
  transactionId: number
  transactionType: string
  transactionStatus: 'Process' | 'Success' | 'Cancel'
  transactionDate: string
  currencyToken?: string
  typePay: string
  amount: number
  fio: string
}

export interface ITransactionHistory {
  content: ITransaction[]
  pageable: Pageable
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  first: boolean
  numberOfElements: number
  empty: boolean
}
