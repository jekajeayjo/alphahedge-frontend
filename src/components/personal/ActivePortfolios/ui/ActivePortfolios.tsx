import { useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import { CarouselPagination } from 'components/shared/CarouselPagination'
import { InfoCard } from 'components/shared/InfoCard'

import s from './ActivePortfolios.module.scss'

const options: EmblaOptionsType = {
  align: 'start',
}

export const ActivePortfolios = () => {
  const [otherRef, embla] = useEmblaCarousel({ ...options })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  return (
    <div className={s.wrapper}>
      <div className={s.carousel} ref={otherRef}>
        <div className={s.list}>
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>

      <CarouselPagination
        className={s.pagination}
        nextButtonClick={scrollNext}
        prevButtonClick={scrollPrev}
      />
    </div>
  )
}
