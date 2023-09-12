import { Navigate } from 'react-router-dom'
import React from 'react'
import { Outlet } from 'react-router'

import useProfile from 'hooks/context/useProfile'

import {
  BgIcon,
  FirstIcon,
  FourthIcon,
  SecondIcon,
  ThirdIcon,
} from 'assets/icons'
import { PreviewImage } from 'assets/images'

import s from './AuthLayout.module.scss'

export const AuthLayout = () => {
  const { payload } = useProfile()

  if (payload.isAuth) {
    return <Navigate to="/personal/dashboard" />
  }

  return (
    <div className={s.wrapper}>
      <img className={s.bg} src={BgIcon} alt="" />
      <div className={s.left}>
        <Outlet />
      </div>
      <div className={s.right}>
        <h2 className={s.title}>Alphahedge Holdings</h2>
        <p className={s.text}>
          Вместе мы строим глобальную финансовую экосистему, переосмысляя подход
          к инвестированию.
        </p>
        <ul className={s.list}>
          <li>
            <img src={FirstIcon} alt="" />
            <p>Индвидуальный подход к каждому клиенту.</p>
          </li>
          <li>
            <img src={SecondIcon} alt="" />
            <p>Акции в режиме Real-Time.</p>
          </li>
          <li>
            <img src={ThirdIcon} alt="" />
            <p>Разновидоности портфелей для инвестирования.</p>
          </li>
          <li>
            <img src={FourthIcon} alt="" />
            <p>Удобный пользовательский интерфейс кабинета.</p>
          </li>
        </ul>
        <img className={s.preview} src={PreviewImage} alt="" />
      </div>
    </div>
  )
}
