import { Link } from 'react-router-dom'

import s from './EmailConfirm.module.scss'

export const EmailConfirm = () => (
  <div className={s.wrapper}>
    <h1 className={s.title}>Подтвердите почту</h1>
    <p className={s.text}>
      Мы отправили письмо вам на почту. Перейдите по ссылке чтобы активировать
      свой аккаунт. Если вы уже перешли по ссылке из письма - обновите страницу.
    </p>
    <div className={s.links}>
      <span className={s.email}>171200nikita@yahoo.com</span>
      <Link className={s.back} to="/register">
        Изменить
      </Link>
    </div>
    <button className={s.submit} type="button">
      Отправить еще раз
    </button>
    <button className={s.after} type="button">
      Подтвердить позже
    </button>
  </div>
)
