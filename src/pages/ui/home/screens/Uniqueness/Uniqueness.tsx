import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

import { Container } from 'components/shared/Container'
import { CarouselNavigation } from 'components/shared/CarouselNavigation'
import { TitleSection } from 'components/shared/TitleSection'

import { UniquenessBg } from 'assets/images'

import { UniquenessCard } from './UniquenessCard'

import s from './Uniqueness.module.scss'
import { cards } from './Uniqueness.data'

const options: EmblaOptionsType = {
  align: 'start',
}

export const Uniqueness = () => {
  const [otherRef, embla] = useEmblaCarousel({ ...options })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  return (
    <section className={s.section}>
      <Container>
        <div className={s.header}>
          <TitleSection>
            Что делает нас <span>уникальными</span> ?
          </TitleSection>
          <CarouselNavigation
            className={s.navigation}
            prevButtonClick={scrollPrev}
            nextButtonClick={scrollNext}
          />
        </div>
        <div className={s.carousel} ref={otherRef}>
          <div className={s.list}>
            {cards.map((card, idx) => (
              <UniquenessCard key={idx} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      </Container>
      <img className={s.bg} src={UniquenessBg} alt="bg" />
    </section>
  )
}
