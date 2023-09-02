const user = {
  ADMIN: 'admin',
  USER: 'user',
} as const

export type UserType = (typeof user)[keyof typeof user]
