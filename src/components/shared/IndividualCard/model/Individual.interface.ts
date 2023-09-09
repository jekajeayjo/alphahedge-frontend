import { IBriefcaseActive } from 'models/response/BriefcaseResponse'

export interface IIndividualCard extends IBriefcaseActive {
  isOpen?: boolean
  status?: boolean
  price: string
}
