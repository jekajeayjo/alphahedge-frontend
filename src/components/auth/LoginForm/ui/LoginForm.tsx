import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'

import useAuth from 'hooks/useAuth'

import { ILoginRequest } from 'models/request/AuthRequest'

import { Input } from 'components/shared/Input'

import s from './LoginForm.module.scss'

export const LoginForm = () => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  const methods = useForm<ILoginRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit } = methods

  const onSubmit = (data: ILoginRequest) => {
    setAuth({ isAuth: true, role: 'user' })
    navigate('/personal/dashboard')
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Войдите в аккаунт!</h1>
      <FormProvider {...methods}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.row}>
            <div className={s.label}>E-mail</div>
            <Input
              className={s.input}
              placeholder="Введите e-mail"
              type="email"
              name="email"
            />
          </div>
          <div className={s.row}>
            <div className={s.label}>Пароль</div>
            <Input
              className={s.input}
              placeholder="Введите пароль"
              type="password"
              name="password"
            />
          </div>
          <Link className={s.link} to="/">
            Забыли пароль?
          </Link>
          <button className={s.submit} type="submit">
            Войти
          </button>
        </form>
      </FormProvider>
      <div className={s.links}>
        <span>У вас нет аккаунта ?</span>
        <Link to="/register">Зарегестрироваться</Link>
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
