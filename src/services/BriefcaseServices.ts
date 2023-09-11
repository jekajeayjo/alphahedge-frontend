import { AxiosResponse } from 'axios'

import { ISort } from 'models/request/ISort'
import {
  IBriefcaseActive,
  IGetBriefcaseResponse,
  IGetGainBriefcaseResponse,
} from 'models/response/BriefcaseResponse'
import { IInvestBriefcase } from 'models/request/BriefcaseRequest'

import $api from '../http'

export default class BriefcaseServices {
  static async getMyBriefcaseActive(
    data: ISort,
  ): Promise<AxiosResponse<IBriefcaseActive[]>> {
    return $api.post<IBriefcaseActive[]>(
      '/briefcase-account/page/my/active',
      data,
    )
  }

  static async getBriefcase(
    data: ISort,
  ): Promise<AxiosResponse<IGetBriefcaseResponse>> {
    return $api.post<IGetBriefcaseResponse>('/briefcase-account/page/my', data)
  }

  static async investBriefcase(
    data: IInvestBriefcase,
  ): Promise<AxiosResponse<IGetBriefcaseResponse>> {
    return $api.post<IGetBriefcaseResponse>('/briefcase-account/invest', data)
  }

  static async getGainBriefcase(
    data: ISort,
  ): Promise<AxiosResponse<IGetGainBriefcaseResponse>> {
    return $api.post<IGetGainBriefcaseResponse>(
      '/briefcase-account/gain-history',
      data,
    )
  }

  static async closeBriefcase(
    briefcaseId: number,
  ): Promise<AxiosResponse<IGetGainBriefcaseResponse>> {
    return $api.put<IGetGainBriefcaseResponse>(
      `/briefcase-account/send-order-close/${briefcaseId}`,
    )
  }
}
