import { StatusCloseEnum } from 'models/StatusCloseEnum'

type Status = (typeof StatusCloseEnum)[keyof typeof StatusCloseEnum]

export interface IChangeStatus {
  status: Status
  id: number
  updateData: () => Promise<void>
}
