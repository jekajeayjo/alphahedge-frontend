import { Pageable } from 'models/IPageable'

export interface IActionBalanceResponse {
  countActions: number
  balance: number
  actionAccountBalanceViewDtoPage: IActionBalance
}

export interface IActionBalance {
  content: IActionContent[]
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

export interface IActionContent {
  accountId: number
  fio: string
  code: string
  count: number
  image: any
  currentPrice: number
  boughtAmountAll: number
  currentAmountAll: number
  gain: number
}

export interface IActionItem {
  actionId: number
  actionCode: string
  actionName: string
  image: string
  currentPrice: number
  statistics: number[]
}
