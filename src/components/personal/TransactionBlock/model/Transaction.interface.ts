export interface ITransactionForm extends ITransactionBlock {
  fetch: () => Promise<void>
}

export interface ITransactionBlock {
  className?: string
  type: 'In' | 'Out'
}
