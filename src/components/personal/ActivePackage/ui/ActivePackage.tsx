import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableLabel,
  TableRow,
} from 'components/shared/table'
import { ActiveTableRow } from 'components/shared/ActiveTableRow'
import { CarouselPagination } from 'components/shared/CarouselPagination'

import { ArrowLinkBlack } from 'assets/icons'

import s from './ActivePackage.module.scss'

const mockArr = [0, 0, 0, 0, 0]

const options: EmblaOptionsType = {
  align: 'start',
}

export const ActivePackage = () => {
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
      <div className={s.header}>
        <div className={s.left}>
          <TableLabel
            label="общая стоимость Пакета"
            value="199,860. 00"
            type="price"
          />
          <TableLabel label="Общее кол-во Акций" value="18" type="num" />
        </div>
        <div className={s.right}>
          <Link to="/">
            Все акции
            <img src={ArrowLinkBlack} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className={s.carousel} ref={otherRef}>
        <div className={s.list}>
          {mockArr.map((table, idx) => (
            <Table key={idx}>
              <TableHead>
                <TableRow>
                  <TableCell>Название </TableCell>
                  <TableCell>Цена покупки</TableCell>
                  <TableCell>Текущая цена</TableCell>
                  <TableCell>Приобретенные акции</TableCell>
                  <TableCell>Общая стоимость</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={s.tbody}>
                <ActiveTableRow />
                <ActiveTableRow />
                <ActiveTableRow />
                <ActiveTableRow />
                <ActiveTableRow />
                <ActiveTableRow />
              </TableBody>
            </Table>
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
