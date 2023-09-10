import { FC } from 'react'
import { Container } from 'components/shared/Container'
import { FormImg1, FormImg2 } from 'assets/images'
import { DividerIcon } from 'assets/icons'
import { cardData } from 'pages/ui/forex/screens/Application/data'
import { Card } from './Card'
import s from './Application.module.scss'

export const Application: FC = () => (
  <section className={s.application}>
    <Container>
      <div className={s.content}>
        <div className={s.form}>
          <div className={s.form_content}>
            <h2 className={s.title}>Подать заявку на курс</h2>
            <p className={s.text}>
              Наши менторы - опытные трейдеры с глубоким пониманием
              форекс-рынка, готовые поделиться своими знаниями и стратегиями,
              чтобы помочь вам достичь финансовой независимости.
            </p>
            <div className={s.input_container}>
              <input
                className={s.input}
                type="email"
                placeholder="Введите почту"
              />
              <button className={s.button} type="button">
                Отправить
              </button>
            </div>
            <div className={s.bottom}>
              <div className={s.numbers}>
                <span>294+</span>
                <p>
                  Успешных <br /> выпускников
                </p>
              </div>
              <img src={DividerIcon} alt="" />
              <div className={s.numbers}>
                <span>$10 M+</span>
                <p>
                  Объем <br /> трейдинга
                </p>
              </div>
            </div>
          </div>
          <div className={s.images}>
            <img className={s.image1} src={FormImg1} alt="formImg" />
            <img className={s.image2} src={FormImg2} alt="formImg" />
          </div>
        </div>
        <div className={s.list}>
          {cardData.map((card) => (
            <Card title={card.title} description={card.desc} key={card.title} />
          ))}
        </div>
      </div>
    </Container>
  </section>
)
