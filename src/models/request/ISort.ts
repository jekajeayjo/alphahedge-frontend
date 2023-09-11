export interface ISort {
  page: number
  size: number
  sortDir?: string
  sortField?: string
  criteria?: { key: string; value: string }[]
}
