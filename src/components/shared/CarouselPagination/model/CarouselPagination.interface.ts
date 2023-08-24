export interface ICarouselNavigation {
  className?: string

  showPagination?: boolean
  total?: number
  index?: number

  prevButtonClick(): void
  nextButtonClick(): void
}
