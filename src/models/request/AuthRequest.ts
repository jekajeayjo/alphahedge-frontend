export interface ILoginRequest {
    email: string,
    password: string,
}

export interface IRegisterRequest {
    fam: string,
    im: string,
    email: string,
    ot: string,
    userName: string,
    phoneNumber: string,
    password: string,
    country: string
    inviteCode?: string
}
