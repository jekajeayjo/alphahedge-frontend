export interface ITransactionForm {
  className?: string
  type: 'replenishment' | 'derivation'
}

export interface ITransactionBlock {
  classNameForm?: string
  type: 'replenishment' | 'derivation'
  perPage: number
}

export interface ITransactionTableCarousel {
  className?: string
}
