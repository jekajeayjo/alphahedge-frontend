export function splitArray<T>(size: number, arr: T[]): T[][] {
  const result: T[][] = []

  for (let i = 0; i < Math.ceil(arr.length / size); i += 1) {
    result[i] = arr.slice(i * size, i * size + size)
  }

  return result
}
