import { useCallback, useEffect, useState } from 'react'
import cn from 'classnames'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'

import { CarouselPagination } from 'components/shared/CarouselPagination'
import { TableLabel } from 'components/shared/table'

import { IIncomeTableCarousel } from '../model/IncomeTableCarousel.interface'

import { IncomeTable } from './IncomeTable'

import s from './IncomeTable.module.scss'

const options: EmblaOptionsType = {
  align: 'start',
}

export const IncomeTableCarousel = (props: IIncomeTableCarousel) => {
  const { className, showTotal = true } = props

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
    <div className={cn(s.wrapper, className)}>
      <div className={s.header}>
        <div className={s.title}>Доходы</div>
        {showTotal && (
          <div className={s.total}>
            <TableLabel
              label="общее кол-во Доходов"
              value="599,860. 00"
              type="price"
            />
            <TableLabel
              label="кол-во Активных Портфелей"
              value="2"
              type="num"
            />
          </div>
        )}
      </div>
      <div className={s.carousel} ref={otherRef}>
        <div className={s.list}>
          <IncomeTable />
          <IncomeTable />
          <IncomeTable />
          <IncomeTable />
          <IncomeTable />
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
