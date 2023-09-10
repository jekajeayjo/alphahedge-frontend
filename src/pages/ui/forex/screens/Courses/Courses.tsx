import { FC } from 'react'
import { Container } from 'components/shared/Container'
import { Course1, Course2 } from 'assets/images'
import { CourseCard } from './CourseCard'
import s from './Courses.module.scss'

export const Courses: FC = () => (
  <section className={s.courses}>
    <Container>
      <h2 className={s.header}>Список курсов</h2>
      <div className={s.list}>
        <CourseCard
          image={Course1}
          label="Курс #1"
          title="Торговля опционами, форекс."
          description="Курс «Торговля опционами» рассчитан на более опытных инвесторов, которые хотят расширить свои возможности и увеличить эффективность своих вложений. Мы рассмотрим различные стратегии торговли опционами и особенности управления опционной позицией на конкретных примерах."
          link="/"
        />
        <CourseCard
          image={Course2}
          label="Курс #2"
          title="Основы инвестиций."
          description="Курс «Основы инвестиций» для начинающих. Если вы ничего не знаете об инвестировании, этот курс для вас. Мы расскажем вам, что такое ценные бумаги, где их можно приобрести и как разумно составить инвестиционный портфель, чтобы получить максимальный доход с наименьшими рисками."
          link="/"
        />
      </div>
    </Container>
  </section>
)
