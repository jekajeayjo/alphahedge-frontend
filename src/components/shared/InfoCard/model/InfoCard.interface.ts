export interface IInfoCardContent {
  isActive: boolean
  isAdmin?: boolean
  name: string
}

export interface IInfoCardForm {
  briefcaseId: number
  minValue: number
  fetch: () => void
  briefcaseInvestStatus: 'Enable' | 'Disable'
}
