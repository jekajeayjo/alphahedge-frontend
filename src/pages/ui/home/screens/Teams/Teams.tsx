import { Container } from 'components/shared/Container'
import { TitleSection } from 'components/shared/TitleSection'

import { Lightning } from 'assets/icons'
import { TeamImage } from 'assets/images'

import s from './Teams.module.scss'

export const Teams = () => (
  <section className={s.section}>
    <Container>
      <div className={s.left}>
        <TitleSection className={s.header}>
          Наши <span>ценности</span> формируют фундамент нашей деятельности:
        </TitleSection>
        <ul className={s.list}>
          <li>
            <img src={Lightning} alt="icon" />
            <span>Профессионализм</span>
          </li>
          <li>
            <img src={Lightning} alt="icon" />
            <span>Доверие</span>
          </li>
          <li>
            <img src={Lightning} alt="icon" />
            <span>Инновации</span>
          </li>
        </ul>
      </div>
      <img className={s.image} src={TeamImage} alt="team" />
    </Container>
  </section>
)
