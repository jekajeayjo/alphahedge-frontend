export interface ISort {
  page: number
  size: number
  criteria?: [{ key: string; value: string }]
}
