import { Outlet } from 'react-router'

import { Header } from '../../Header'
import { Footer } from '../../Footer'

import s from './PageLayout.module.scss'

export const PageLayout = () => (
  <div className={s.layout}>
    <Header />
    <Outlet />
    <Footer />
  </div>
)
