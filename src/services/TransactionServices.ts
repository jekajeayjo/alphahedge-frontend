import axios, { AxiosResponse } from 'axios'

import { IToken, ITokenCovert } from 'models/IToken'
import { ISort } from 'models/request/ISort'
import { ITransactionHistory } from 'models/response/TransactionResponse'
import { IRequestTransaction } from 'models/request/TransactionRequset'

import $api from '../http'

export default class TransactionServices {
  static async getHistoryList(
    data: ISort,
  ): Promise<AxiosResponse<ITransactionHistory>> {
    return $api.post<ITransactionHistory>('/transaction/history', data)
  }

  static async getTokens(): Promise<AxiosResponse<IToken[]>> {
    return $api.get<IToken[]>('/transaction/get-token-list')
  }

  static async addTransaction(
    data: IRequestTransaction,
  ): Promise<AxiosResponse> {
    return $api.post('/transaction', data)
  }

  static async getCoinPrice(
    coin: string,
  ): Promise<AxiosResponse<ITokenCovert>> {
    return axios.get(
      `https://api.binance.com/api/v3/ticker/price?symbol=${coin.toUpperCase()}USDT`,
    )
  }
}
