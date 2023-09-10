import { FC } from 'react'
import { Container } from 'components/shared/Container'
import { BannerImg, BgBanner1, BgBanner2 } from 'assets/images'
import { ArrowIcon } from 'assets/icons'
import s from './ForexBanner.module.scss'

export const ForexBanner: FC = () => (
    <section className={s.banner}>
      <Container>
        <div className={s.content}>
          <div className={s.desc}>
            <h1 className={s.title}>
              <span>Академия</span>
              <br />
              Alphahedge Holdings
            </h1>
            <p className={s.text__title}>
              ЧТО ТАКОЕ ФОНДОВЫЙ РЫНОК? ЧТО ТАКОЕ ФОРЕКС? <br />
              Как найти проверенную платформу для инвестирования?
            </p>
            <p className={s.text}>
              Если вы тоже задаетесь подобными вопросами, вы не одиноки.
              Ежегодно сотни тысяч людей самых разных возрастов делают свои
              первые шаги в инвестициях. Все эти финансовые понятия могут
              показаться сложными, если вы никогда раньше не инвестировали.
            </p>
            <p className={s.text}>
              Но не отчаивайтесь — наши онлайн-уроки помогут разобраться в
              устройстве фондового рынка и превратиться из новичка в профи
              инвестиций.
            </p>
          </div>
          <img className={s.img} src={BannerImg} alt="img" />
        </div>
        <button type="button" className={s.button}>
          Курсы для обучения
          <img src={ArrowIcon} alt="arrow" />
        </button>
      </Container>
      <img className={s.bg1} src={BgBanner1} alt="bg" />
      <img className={s.bg2} src={BgBanner2} alt="bg" />
    </section>
  )
