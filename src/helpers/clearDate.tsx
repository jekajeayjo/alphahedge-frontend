export const clearDate = (date: string, getTime?: boolean): string => {
  const formDate = new Date(date)

  const day = formDate.getDate()
  const month = formDate.getMonth() + 1
  const year = formDate.getFullYear()

  const dateStr = `${day > 9 ? day : `0${day}`}.${
    month > 9 ? month : `0${month}`
  }.${year}`

  if (getTime) {
    const hours = formDate.getHours()
    const minutes = formDate.getMinutes()

    return `${dateStr}, ${hours > 9 ? hours : `0${hours}`}:${
      minutes > 9 ? minutes : `0${minutes}`
    }`
  }

  return dateStr
}
