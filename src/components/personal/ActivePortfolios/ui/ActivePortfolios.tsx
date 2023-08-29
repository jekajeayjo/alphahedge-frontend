import { useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import { CarouselPagination } from 'components/shared/CarouselPagination'
import { InfoCard } from 'components/shared/InfoCard'

import s from './ActivePortfolios.module.scss'
import { IActivePortfolios } from '../model/ActivePortfolios.interface'

const options: EmblaOptionsType = {
  align: 'start',
}

export const ActivePortfolios = (props: IActivePortfolios) => {
  const { isAdmin = false } = props

  const [otherRef, embla] = useEmblaCarousel({ ...options })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  return (
    <div className={s.wrapper}>
      <div className={s.carousel} ref={otherRef}>
        <div className={s.list}>
          <InfoCard isAdmin={isAdmin} />
          <InfoCard isAdmin={isAdmin} />
          <InfoCard isAdmin={isAdmin} />
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
