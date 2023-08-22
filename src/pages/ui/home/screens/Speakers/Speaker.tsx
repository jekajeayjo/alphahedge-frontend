import { SpeakerImage } from 'assets/images'
import { MapPoint } from 'assets/icons'

import s from './Speakers.module.scss'

export const Speaker = () => (
  <article className={s.speaker}>
    <a className={s.image} href="/">
      <img src={SpeakerImage} alt="" />
    </a>
    <div className={s.metaInfo}>
      <div className={s.data}>2022-07-22</div>
      <div className={s.position}>
        <img src={MapPoint} alt="Лондон" />
        <span>Лондон</span>
      </div>
    </div>
    <a className={s.name} href="/">
      Инвестирование в Технологические Стартапы
    </a>
  </article>
)
