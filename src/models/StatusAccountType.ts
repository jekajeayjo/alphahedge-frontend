const status = {
  ENABLE: 'Enable',
  DISABLE: 'Disable',
} as const

export type StatusAccountType = (typeof status)[keyof typeof status]
