import { AxiosResponse } from 'axios'

import $api from '../http'
import {
  IProfileField,
  IResponseBalance,
  IResponseProfile,
} from '../models/response/AccountResponse'
import {
  IPhotoRequest,
  ISettingProfileRequest,
} from '../models/request/AccountRequest'

export default class AccountServices {
  static async getProfile(): Promise<AxiosResponse<IResponseProfile>> {
    return $api.get<IResponseProfile>('/account/me')
  }

  static async getBalance(): Promise<AxiosResponse<IResponseBalance>> {
    return $api.get<IResponseBalance>('/account/balance')
  }

  static async updateProfile(data: IProfileField): Promise<AxiosResponse> {
    return $api.put('/account/me', data)
  }

  static async sendIdPhoto(data: IPhotoRequest): Promise<AxiosResponse> {
    return $api.post('/account/file', data)
  }

  static async settingProfile(
    data: ISettingProfileRequest,
  ): Promise<AxiosResponse> {
    return $api.post('/account/setting/set', data)
  }
}
