export const getRemainDays = (createddate: string): number => {
  const date = new Date(createddate)
  const currentDate = new Date()

  // @ts-ignore
  const diffTime = Math.abs(currentDate - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays - 1
}
