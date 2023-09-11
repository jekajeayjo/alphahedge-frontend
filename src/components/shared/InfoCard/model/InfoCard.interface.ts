export interface IInfoCardContent {
  isActive: boolean
  isAdmin?: boolean
  name: string
  description: string
  titleList: string
  actionList: string[]
  technologies: string[]
}

export interface IInfoCardForm {
  briefcaseId: number
  minValue: number
  fetch: () => void
  briefcaseInvestStatus: 'Enable' | 'Disable'
}
