export interface ICounterChanger {
  className?: string
  value: number
  increment(): void
  decrement(): void
}
