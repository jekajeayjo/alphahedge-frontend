const user = {
  ADMIN: 'Admin',
  USER: 'User',
} as const

export type UserType = (typeof user)[keyof typeof user]
