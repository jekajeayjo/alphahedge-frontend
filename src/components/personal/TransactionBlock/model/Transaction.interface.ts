export interface ITransactionForm {
  className?: string
  type: 'replenishment' | 'derivation'
}

export interface ITransactionBlock {
  classNameForm?: string
  classNameCarousel?: string
  type: 'replenishment' | 'derivation'
}

export interface ITransactionTableCarousel {
  className?: string
}
