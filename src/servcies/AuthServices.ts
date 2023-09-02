import {AxiosResponse} from 'axios'

import $api from "../http";

import {IAuthResponse} from "../models/response/AuthResponse";
import {ILoginRequest, IRegisterRequest} from "../models/request/AuthRequest";


export default class AuthServices {
    static async login(data: ILoginRequest): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/auth/authenticate', {...data})
    }

    static async register(data: IRegisterRequest): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/auth/register', {
            ...data
        })
    }
}

