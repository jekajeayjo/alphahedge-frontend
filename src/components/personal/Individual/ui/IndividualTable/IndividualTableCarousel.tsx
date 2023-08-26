import { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'

import { CarouselPagination } from 'components/shared/CarouselPagination'
import { TableLabel } from 'components/shared/table'

import { IndividualTable } from './IndividualTable'

import s from './IndividualTable.module.scss'

const options: EmblaOptionsType = {
  align: 'start',
}

export const IndividualTableCarousel = () => {
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
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.title}>Доходы</div>
        <div className={s.total}>
          <TableLabel
            label="общее кол-во Доходов"
            value="599,860. 00"
            type="price"
          />
          <TableLabel label="кол-во Активных Портфелей" value="2" type="num" />
        </div>
      </div>
      <div className={s.carousel} ref={otherRef}>
        <div className={s.list}>
          <IndividualTable />
          <IndividualTable />
          <IndividualTable />
          <IndividualTable />
          <IndividualTable />
        </div>
      </div>

      <CarouselPagination
        className={s.pagination}
        showPagination
        index={selectedIndex}
        total={5}
        nextButtonClick={scrollNext}
        prevButtonClick={scrollPrev}
      />
    </div>
  )
}
