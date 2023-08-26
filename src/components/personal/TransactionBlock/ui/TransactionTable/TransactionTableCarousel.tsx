import cn from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'

import { CarouselPagination } from 'components/shared/CarouselPagination'

import { TransactionTable } from './TransactionTable'

import { ITransactionTableCarousel } from '../../model/Transaction.interface'

import s from './TransactionTable.module.scss'

const options: EmblaOptionsType = {
  align: 'start',
}

export const TransactionTableCarousel = (props: ITransactionTableCarousel) => {
  const { className } = props

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
      <div className={cn(s.carousel, className)} ref={otherRef}>
        <div className={s.list}>
          <TransactionTable />
          <TransactionTable />
          <TransactionTable />
        </div>
      </div>
      <CarouselPagination
        className={s.pagination}
        showPagination
        index={selectedIndex}
        total={3}
        nextButtonClick={scrollNext}
        prevButtonClick={scrollPrev}
      />
    </>
  )
}
