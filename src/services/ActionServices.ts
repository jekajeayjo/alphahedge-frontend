import { AxiosResponse } from 'axios'

import { ISort } from 'models/request/ISort'
import { IResponseProfile } from 'models/response/AccountResponse'
import { IActionInvestRequest } from 'models/request/ActionRequest'
import { IActionItem } from 'models/response/ActionResponse'

import $api from '../http'

export default class ActionServices {
  static async getActionList(
    data: ISort,
  ): Promise<AxiosResponse<IActionItem[]>> {
    return $api.post<IActionItem[]>('/action-account/actions/stock/page', data)
  }

  static async getActionBalance(): Promise<AxiosResponse<IResponseProfile>> {
    return $api.get<IResponseProfile>('/action-account/page/active')
  }

  static async actionInvest(
    data: IActionInvestRequest,
  ): Promise<AxiosResponse> {
    return $api.post('/action-account/invest', data)
  }
}
