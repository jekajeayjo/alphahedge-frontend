/* eslint-disable */

const kf = (a: string[] = []) =>
  a.reduce(
    (s, v, i) => (i ? s + `[${encodeURIComponent(v)}]` : encodeURIComponent(v)),
    '',
  )

export const queryPhp = (value: any, keys: string[] = []): string => {
  if (Array.isArray(value)) {
    return value.map((v) => kf(keys) + '[]=' + encodeURIComponent(v)).join('&')
  } else if (typeof value !== 'object')
    return kf(keys) + `=${encodeURIComponent(value.toString())}`
  else if (value === null || value === undefined) {
    return ''
  } else if (typeof value === 'object') {
    return Object.entries(value)
      .map(([key, value]) => `${queryPhp(value as string, [...keys, key])}`)
      .join('&')
  }

  return ''
}
