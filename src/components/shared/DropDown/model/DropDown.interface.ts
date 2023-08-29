export interface IDropDown {
  placeholder: string
  className?: string
  options: OptionType[]
  defaultOption?: OptionType
}

export type OptionType = {
  id: number
  image?: string
  label: string
}
