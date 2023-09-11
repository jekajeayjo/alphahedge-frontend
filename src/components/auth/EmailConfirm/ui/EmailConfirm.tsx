import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { IAuthResponse } from 'models/response/AuthResponse'

import { API_URL } from '../../../../http'

import s from './EmailConfirm.module.scss'

export const EmailConfirm = () => {
  const [loader, setLoader] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorConfirm, setErrorConfirm] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const resendMail = async () => {
    setLoader(true)
    setSuccess(false)
    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `${API_URL}/auth/send-verify/${localStorage.getItem('acceptEmail')}`,
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
      },
    }

    try {
      const response = await axios.request<IAuthResponse>(config)
      console.log(response)
      setSuccess(true)
    } catch {
      console.log('')
    } finally {
      setLoader(false)
    }
  }

  const verifyEmail = async () => {
    try {
      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${API_URL}/auth/verify/${id}`,
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true,
        },
      }
      const response = await axios.request<IAuthResponse>(config)
    } catch (e) {
      setErrorConfirm(true)
      console.log(e)
    }
  }

  useEffect(() => {
    if (id) {
      verifyEmail()
    }
  }, [])

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        {errorConfirm ? 'Почта подтверждена' : 'Подтвердите почту'}
      </h1>
      {errorConfirm ? (
        <p className={s.text}>
          Вы подтвердили почту. Перейдите на страницу авторизации.
        </p>
      ) : (
        <p className={s.text}>
          Мы отправили письмо вам на почту. Перейдите по ссылке чтобы
          активировать свой аккаунт. Если вы уже перешли по ссылке из письма -
          обновите страницу.
        </p>
      )}
      <div className={s.links}>
        <span className={s.email}>{localStorage.getItem('acceptEmail')}</span>
      </div>
      {!errorConfirm ? (
        <button
          className={s.submit}
          disabled={loader || success}
          onClick={resendMail}
          type="button"
        >
          Отправить еще раз
        </button>
      ) : (
        <button
          className={s.submit}
          disabled={loader || success}
          onClick={() => navigate('/login')}
          type="button"
        >
          Авторизоваться
        </button>
      )}
      {success && (
        <div className={s.description}>Письмо отправленно повторно</div>
      )}
      {!errorConfirm && (
        <button className={s.after} onClick={() => navigate('/')} type="button">
          Подтвердить позже
        </button>
      )}
    </div>
  )
}
