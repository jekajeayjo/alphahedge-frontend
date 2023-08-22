import { Container } from 'components/shared/Container'
import { TitleSection } from 'components/shared/TitleSection'

import { FirstCase, SecondCase } from 'assets/icons'
import { CasesBg } from 'assets/images'

import { Case } from './Case'

import s from './Сases.module.scss'

export const Сases = () => (
  <section className={s.section}>
    <Container>
      <TitleSection className={s.header}>
        Вас также может <span>заинтересовать</span>
      </TitleSection>
      <div className={s.list}>
        <Case
          title="Частный  портфель"
          description="Частный портфель - это удобный способ инвестирования для тех, кто ценит сове время и комфорт."
          image={FirstCase}
          link="/"
        />
        <Case
          title="Торгуемые на биржах фонты (ETF)"
          description="Инвестиционное решение, позволяющее самостоятельно сформировать диверсифицрованный портфель ценных бумаг"
          image={SecondCase}
          link="/"
        />
      </div>
    </Container>
    <img className={s.bg} src={CasesBg} alt="bg" />
  </section>
)
