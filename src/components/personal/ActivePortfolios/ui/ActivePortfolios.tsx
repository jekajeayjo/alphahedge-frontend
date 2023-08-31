import { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'

import { CarouselPagination } from 'components/shared/CarouselPagination'
import { InfoCard } from 'components/shared/InfoCard'

import s from './ActivePortfolios.module.scss'
import { IActivePortfolios } from '../model/ActivePortfolios.interface'

const options: EmblaOptionsType = {
  align: 'start',
}

export const ActivePortfolios = (props: IActivePortfolios) => {
  const { isAdmin = false } = props

  const [selectedIndex, setSelectedIndex] = useState(1)

  const [otherRef, embla] = useEmblaCarousel({ ...options })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap() + 1)
  }, [])

  useEffect(() => {
    if (!embla) return
    onSelect(embla)
    embla.on('reInit', onSelect)
    embla.on('select', onSelect)
  }, [embla, onSelect])

  return (
    <div className={s.wrapper}>
      <div className={s.carousel} ref={otherRef}>
        <div className={s.list}>
          <InfoCard isActive isAdmin={isAdmin} />
          <InfoCard isAdmin={isAdmin} />
          <InfoCard isAdmin={isAdmin} />
        </div>
      </div>

      <CarouselPagination
        total={3}
        index={selectedIndex}
        className={s.pagination}
        nextButtonClick={scrollNext}
        prevButtonClick={scrollPrev}
      />
    </div>
  )
}
