import { StatusAccountType } from 'models/StatusAccountType'

export interface AdminRequest {
  accountId: number
  status: StatusAccountType
}
