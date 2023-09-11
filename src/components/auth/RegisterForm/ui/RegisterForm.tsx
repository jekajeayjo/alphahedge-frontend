import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/shared/Input'
import { DropDown, OptionType } from 'components/shared/DropDown'
import { IRegisterRequest } from 'models/request/AuthRequest'

import { registrationSchema } from '../lib/schema'

import s from './RegisterForm.module.scss'
import { API_URL } from '../../../../http'

const options: OptionType[] = [
  { label: 'Russia', id: 1 },
  { label: 'Germany', id: 0 },
  { label: 'USA', id: 2 },
]

export const RegisterForm = () => {
  const resolver = yupResolver(registrationSchema)

  const [loading, setLoading] = useState(false)

  const navigator = useNavigate()

  const methods = useForm<IRegisterRequest>({
    resolver,
    defaultValues: {
      fam: '',
      password: '',
      im: '',
      userName: '',
      ot: '',
      email: '',
      phoneNumber: '',
      country: options[0].label,
    },
  })

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods

  const onSubmit = async (data: IRegisterRequest) => {
    setLoading(true)
    const body = JSON.stringify(data)

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${API_URL}/auth/register`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    }

    try {
      const response = await axios.request(config)
      localStorage.setItem('acceptEmail', data.email)
      await navigator('/verify')
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Добро пожаловать!</h1>
      <FormProvider {...methods}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.row}>
            <div className={s.cell}>
              <div className={s.label}>Фамилия</div>
              <Input
                className={s.input}
                placeholder="Ваша фамилия"
                type="text"
                name="fam"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>Имя</div>
              <Input
                className={s.input}
                placeholder="Ваше имя"
                type="text"
                name="im"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>Отчество</div>
              <Input
                className={s.input}
                placeholder="Ваше отечество"
                type="text"
                name="ot"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>Username</div>
              <Input
                className={s.input}
                placeholder="Придумайте ник"
                type="text"
                name="userName"
              />
            </div>

            <div className={s.cell}>
              <div className={s.label}>Телефон</div>
              <Input
                className={s.input}
                placeholder="Введите телефон"
                type="tel"
                name="phoneNumber"
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
                onSelect={(value) => setValue('country', value)}
                defaultOption={options[0]}
              />
            </div>
          </div>
          <button className={s.submit} disabled={loading} type="submit">
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
