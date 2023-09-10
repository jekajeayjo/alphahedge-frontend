export interface ISort {
  page: number
  size: number
  sortDir?: string
  criteria?: { key: string; value: string }[]
}
