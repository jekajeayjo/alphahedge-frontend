import s from './BodyHeader.module.scss'

export const WelcomeHeader = () => (
  <div className={s.welcome}>
    <div className={s.name}>Добро пожаловать, Никита !</div>
    <div className={s.data}>
      12:15 <span /> 17 августа 2023
    </div>
  </div>
)
