import { AxiosResponse } from 'axios'

import { queryPhp } from 'helpers/queryPhp'

import { ISort } from 'models/request/ISort'
import { IActionRequest } from 'models/request/ActionRequest'
import {
  IActionBalanceResponse,
  IActionItem,
} from 'models/response/ActionResponse'

import $api from '../http'

export default class ActionServices {
  static async getActionList(
    data: ISort,
  ): Promise<AxiosResponse<IActionItem[]>> {
    return $api.post<IActionItem[]>('/action-account/actions/stock/page', data)
  }

  static async getActionBalance(
    data: ISort,
  ): Promise<AxiosResponse<IActionBalanceResponse>> {
    return $api.get<IActionBalanceResponse>(
      `/action-account/page/active?${queryPhp(data)}`,
    )
  }

  static async actionInvest(data: IActionRequest): Promise<AxiosResponse> {
    return $api.post('/action-account/invest', data)
  }

  static async actionSell(data: IActionRequest): Promise<AxiosResponse> {
    return $api.post('/action-account/sell', data)
  }
}
