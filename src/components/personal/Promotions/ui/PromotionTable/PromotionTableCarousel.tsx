import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

import { CarouselPagination } from 'components/shared/CarouselPagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'components/shared/table'
import { ActiveTableRow } from 'components/shared/ActiveTableRow'

import s from './PromotionTable.module.scss'

const options: EmblaOptionsType = {
  align: 'start',
}

export const PromotionTableCarousel = () => {
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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Цена покупки</TableCell>
                <TableCell>Текущая цена</TableCell>
                <TableCell>Приобретенные акции</TableCell>
                <TableCell>Общая стоимость</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={s.tbody}>
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
            </TableBody>
          </Table>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Цена покупки</TableCell>
                <TableCell>Текущая цена</TableCell>
                <TableCell>Приобретенные акции</TableCell>
                <TableCell>Общая стоимость</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={s.tbody}>
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
            </TableBody>
          </Table>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Цена покупки</TableCell>
                <TableCell>Текущая цена</TableCell>
                <TableCell>Приобретенные акции</TableCell>
                <TableCell>Общая стоимость</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={s.tbody}>
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
              <ActiveTableRow showButton />
            </TableBody>
          </Table>
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
