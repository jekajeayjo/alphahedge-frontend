export const clearDate = (date: string): string => {
  const formDate = new Date(date)

  const day = formDate.getDate()
  const month = formDate.getMonth() + 1
  const year = formDate.getFullYear()

  return `${day > 9 ? day : `0${day}`}.${
    month > 9 ? month : `0${month}`
  }.${year}`
}
