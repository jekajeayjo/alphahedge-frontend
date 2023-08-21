import { FC, useEffect, useRef } from 'react'
import Typed from 'typed.js'

import { BgBanner } from 'assets/images'
import { ArrowLinkWhite, LogoBanner } from 'assets/icons'

import { Container } from 'components/shared/Container'

import s from './MainBanner.module.scss'

const text = [
  'identity',
  'creators',
  'sustainability',
  'everyone',
  'builders',
  'development',
  'Assets',
  'Shares',
  'Diversification',
]

export const MainBanner: FC = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: text,
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 0,
      backDelay: 600,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className={s.banner}>
      <Container>
        <div className={s.content}>
          <h1 className={s.title}>
            Alphahedge Holdings
            <br />
            <span className={s.typed} ref={el} />
          </h1>
          <p className={s.text}>
            Вместе мы строим глобальную финансовую экосистему, переосмысляя
            подход к инвестированию.&nbsp; Наша цель - сделать успех доступным
            для всех, чтобы он стал реальностью каждого.
          </p>
          <a className={s.link} href="/">
            Присоедениться к нам
            <img className={s.arrow} src={ArrowLinkWhite} alt="logo" />
          </a>
        </div>
      </Container>
      <img className={s.logo} src={LogoBanner} alt="logo" />
      <img className={s.bg} src={BgBanner} alt="backgoround" />
    </section>
  )
}
