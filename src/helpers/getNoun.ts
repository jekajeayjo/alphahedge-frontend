type funcProps = {
  number: number
  one: string
  two: string
  five: string
}

export const getNoun = ({ number, one, two, five }: funcProps) => {
  if (number % 10 === 1 && number !== 11) {
    return one
  }
  if (number % 10 >= 2 && number % 10 <= 4 && (number < 12 || number > 14)) {
    return two
  }
  return five
}
