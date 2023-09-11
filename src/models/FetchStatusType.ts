const fetch = {
  PENDING: 'pending',
  error: 'error',
  success: 'success',
} as const

export type FetchStatusType = (typeof fetch)[keyof typeof fetch]
