import { useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import { Container } from 'components/shared/Container'
import { TitleSection } from 'components/shared/TitleSection'
import { CarouselNavigation } from 'components/shared/CarouselNavigation'

import { Speaker } from './Speaker'

import s from './Speakers.module.scss'

const options: EmblaOptionsType = {
  align: 'start',
  dragFree: true,
}

export const Speakers = () => {
  const [otherRef, embla] = useEmblaCarousel({ ...options })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  return (
    <section className={s.section}>
      <Container>
        <div className={s.header}>
          <TitleSection>
            <span>Встречи</span> со спикерами
          </TitleSection>
          <CarouselNavigation
            prevButtonClick={scrollPrev}
            nextButtonClick={scrollNext}
          />
        </div>
        <div className={s.carousel} ref={otherRef}>
          <div className={s.list}>
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
          </div>
        </div>
      </Container>
    </section>
  )
}
