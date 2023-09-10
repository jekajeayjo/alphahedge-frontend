export interface IRequestTransaction {
  currencyToken: string
  amountIn: string
  transactionType: 'In' | 'Out'
  transactionStatus: 'Process'
  amountOut: string
  contact?: string
}
