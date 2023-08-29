import { useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

import { CarouselPagination } from 'components/shared/CarouselPagination'

import { UserDataContext } from '../../context/UserDataContext'

import { ActiveTable } from './ActiveTable'

import s from './ActiveTable.module.scss'

const mockArr = [0, 0, 0, 0, 0]

const options: EmblaOptionsType = {
  align: 'start',
}

export const ActiveTableCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [otherRef, embla] = useEmblaCarousel({ ...options })

  const { setUserData } = useContext(UserDataContext)

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
            <ActiveTable onClick={(e) => setUserData(e)} key={idx} />
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
