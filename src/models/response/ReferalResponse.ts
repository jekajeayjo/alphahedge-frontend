import { Pageable } from 'models/IPageable'

export interface IReferalResponse {
  sumAmount: number
  sumCount: number
  inviteUrl: string
  page: Page
}

export interface Page {
  content: IReferalItem[]
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  numberOfElements: number
  first: boolean
  empty: boolean
}

export interface IReferalItem {
  referalAccountId: number
  accountId: number
  fio: string
  registeredDate: string
  parentId: number
  parentFio: string
  amount: number
}
