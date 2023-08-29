import { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'

import { CarouselPagination } from 'components/shared/CarouselPagination'

import { UserTable } from './UserTable'

import s from './UsersCarousel.module.scss'

const mockArr = [0, 0, 0, 0, 0]

const options: EmblaOptionsType = {
  align: 'start',
}

export const UsersCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

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
    <>
      <div className={s.carousel} ref={otherRef}>
        <div className={s.list}>
          {mockArr.map((table, idx) => (
            <UserTable key={idx} />
          ))}
        </div>
      </div>
      <CarouselPagination
        className={s.pagination}
        showPagination
        index={selectedIndex}
        total={mockArr.length}
        nextButtonClick={scrollNext}
        prevButtonClick={scrollPrev}
      />
    </>
  )
}
