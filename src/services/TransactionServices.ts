import { AxiosResponse } from 'axios'
import { ISort } from 'models/request/ISort'

import $api from '../http'

export default class TransactionServices {
  static async getHistoryTransaction(data: ISort): Promise<AxiosResponse<any>> {
    return $api.post<any>('/transaction/history', data)
  }

  static async addTransaction(data: ISort): Promise<AxiosResponse<any>> {
    return $api.post<any>('/transaction', data)
  }
}
