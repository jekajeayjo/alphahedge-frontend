import { IActionContent } from 'models/response/ActionResponse'

export interface IActiveTableRow extends IActionContent {
  showButton?: boolean
  hideLastBuy?: boolean
  updateData?: () => Promise<void>
}
