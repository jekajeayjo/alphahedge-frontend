export interface ILoginRequest {
  email: string
  password: string
  isError?: boolean
}

export interface IRegisterRequest {
  fam: string
  im: string
  email: string
  ot: string
  userName: string
  phoneNumber: string
  password: string
  country: string
  inviteCode?: string
}
