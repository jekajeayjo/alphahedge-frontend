export interface IDropDown {
  placeholder: string
  className?: string
  options: OptionType[]
  defaultOption?: OptionType
  onSelect?: (value: string) => void
}

export type OptionType = {
  id?: number
  image?: string
  label?: string
}
