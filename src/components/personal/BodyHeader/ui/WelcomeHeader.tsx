import useAuth from 'hooks/useAuth'

import s from './BodyHeader.module.scss'

export const WelcomeHeader = () => {
  const {
    auth: { profile },
  } = useAuth()

  return (
    <div className={s.welcome}>
      <div className={s.name}>Добро пожаловать, {profile?.im} !</div>
      <div className={s.data}>
        12:15 <span /> 17 августа 2023
      </div>
    </div>
  )
}
