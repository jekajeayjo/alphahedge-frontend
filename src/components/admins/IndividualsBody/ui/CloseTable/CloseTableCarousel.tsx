import { useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

import { CarouselPagination } from 'components/shared/CarouselPagination'
import { UserDataContext } from 'components/admins/IndividualsBody/context/UserDataContext'

import { CloseTable } from './CloseTable'

import s from './CloseTable.module.scss'

const mockArr = [0, 0, 0, 0, 0]

const options: EmblaOptionsType = {
  align: 'start',
}

export const CloseTableCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [otherRef, embla] = useEmblaCarousel({ ...options })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const { setUserData } = useContext(UserDataContext)

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
            <CloseTable onClick={setUserData} key={idx} />
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
