import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

import { splitArray } from 'helpers/splitArray'

import { CarouselPagination } from 'components/shared/CarouselPagination'

import { IReferralItem } from '../model/Referral.interface'

import { ReferralItem } from './ReferralItem'
import s from './Referral.module.scss'

const list: IReferralItem[] = [
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
]

const options: EmblaOptionsType = {
  align: 'start',
}

export const ReferralCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [otherRef, embla] = useEmblaCarousel({ ...options })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const slides = splitArray<IReferralItem>(7, list)

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
          {slides.map((slide, slideIdx) => (
            <div className={s.slide} key={slideIdx}>
              {slide.map((referal, idx) => (
                <ReferralItem key={idx} {...referal} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <CarouselPagination
        className={s.pagination}
        showPagination
        index={selectedIndex}
        total={slides.length}
        nextButtonClick={scrollNext}
        prevButtonClick={scrollPrev}
      />
    </>
  )
}
