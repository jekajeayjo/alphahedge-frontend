import { Link } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'

import { Input } from 'components/shared/Input'
import { DropDown, OptionType } from 'components/shared/DropDown'

import s from './RegisterForm.module.scss'

const options: OptionType[] = [
  { label: 'Germany', id: 0 },
  { label: 'Russia', id: 1 },
  { label: 'USA', id: 2 },
]

export const RegisterForm = () => {
  const methods = useForm()

  const { handleSubmit } = methods

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Добро пожаловать!</h1>
      <FormProvider {...methods}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.row}>
            <div className={s.cell}>
              <div className={s.label}>Имя</div>
              <Input
                className={s.input}
                placeholder="Ваше имя"
                type="text"
                name="name"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>Фамилия</div>
              <Input
                className={s.input}
                placeholder="Ваша фамилия"
                type="text"
                name="email"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>Username</div>
              <Input
                className={s.input}
                placeholder="Придумайте ник"
                type="text"
                name="username"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>E-mail</div>
              <Input
                className={s.input}
                placeholder="Введите e-mail"
                type="email"
                name="email"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>Пароль</div>
              <Input
                className={s.input}
                placeholder="Введите пароль"
                type="password"
                name="password"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>Страна</div>
              <DropDown
                className={s.drop}
                placeholder="Страна"
                options={options}
                defaultOption={options[0]}
              />
            </div>
          </div>
          <button className={s.submit} type="submit">
            Зарегестрироваться
          </button>
        </form>
      </FormProvider>
      <div className={s.links}>
        <span>У вас уже есть аккаунт ?</span>
        <Link to="/login">Войти</Link>
      </div>
      <div className={s.copyright}>
        The activities of are conducted within the obtained permits and are in
        full compliance with the obtained certificates.
        <br />
        Copyright © 2023, Alphahedge Holdings Ltd
      </div>
    </div>
  )
}
