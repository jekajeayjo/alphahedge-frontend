import { AxiosResponse } from 'axios'

import { ISort } from 'models/request/ISort'
import {
  IAdvancedResponse,
  IUsersResponse,
} from 'models/response/AdminResponse'

import { AdminRequest } from 'models/request/AdminRequest'
import { StatusCloseEnum } from 'models/StatusCloseEnum'

import $api from '../http'

export default class AdminService {
  static async getUsers(data: ISort): Promise<AxiosResponse<IUsersResponse>> {
    return $api.put<IUsersResponse>('/account/page', data)
  }

  static async updateUserAccount(
    data: AdminRequest,
  ): Promise<AxiosResponse<IUsersResponse>> {
    return $api.put<IUsersResponse>('/account/update', data)
  }

  static async updateBriefcaseOrder(
    id: number,
    status: StatusCloseEnum,
  ): Promise<AxiosResponse<IUsersResponse>> {
    return $api.put<IUsersResponse>(
      `/briefcase-account/order-close/${id}/${status}`,
    )
  }

  static async getAdvanced(
    data: ISort,
  ): Promise<AxiosResponse<IAdvancedResponse>> {
    return $api.post<IAdvancedResponse>('/briefcase-account/page', data)
  }
}
