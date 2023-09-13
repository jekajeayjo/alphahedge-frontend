import { useEffect, useState } from 'react'
import { useWindowSize } from 'hooks/useWindowSize'
import { useLocation } from 'react-router-dom'
import { ArrowAccordionIcon } from 'assets/icons'
import { SidebarAccordion } from './SidebarAccordion'
import s from './Sidebar.module.scss'

const sidebarCourse1Data = {
  header: 'Урок 1. Торговля опционами, форекс.',
  titles: [
    'Что такое опционы',
    'Как работает опцион',
    'Что такое опцион колл',
    'Как формируется размер премии',
    'Что такое опцион пут',
    'Что следует помнить при торговле опционами',
  ],
}
const sidebarCourse2Data = {
  header: 'Урок 2. Почему важно инвестировать?',
  titles: [
    'Почему важно инвестировать?',
    'Деньги — это важный ресурс, они влияют на нашу жизнь',
    'Инфляция — это рост цен и снижение покупательной способности денег.',
    'Инвестиции помогут победить инфляцию и заработать',
    'Магия сложного процента увеличивает вложения',
  ],
}

export const Sidebar = () => {
  const { pathname } = useLocation()
  const [isOpenFirst, setIsOpenFirst] = useState(false)
  const [isOpenSecond, setIsOpenSecond] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width < 1500) {
      setShowSidebar(false)
    } else {
      setShowSidebar(true)
    }
  }, [width])

  const onToggleSidebar = () => {
    setShowSidebar((prevState) => !prevState)
  }

  const onToggleFirst = () => {
    setIsOpenFirst((prevState) => !prevState)
  }

  const onToggleSecond = () => {
    setIsOpenSecond((prevState) => !prevState)
  }

  useEffect(() => {
    switch (pathname) {
      case '/course1':
        setIsOpenFirst(true)
        setIsOpenSecond(false)
        break
      case '/course2':
        setIsOpenSecond(true)
        setIsOpenFirst(false)
        break
      default:
        setIsOpenFirst(false)
        setIsOpenSecond(false)
    }
  }, [pathname])

  return (
    <div className={showSidebar ? s.sidebar : `${s.sidebar} ${s.sidebar_hide}`}>
      {width < 1500 && (
        <button className={s.button} type="button" onClick={onToggleSidebar}>
          <img
            className={!showSidebar ? s.show : `${s.show} ${s.hide}`}
            src={ArrowAccordionIcon}
            alt="arrow"
          />
        </button>
      )}
      <SidebarAccordion
        header={sidebarCourse1Data.header}
        titles={sidebarCourse1Data.titles}
        isOpen={isOpenFirst}
        onToggle={onToggleFirst}
      />
      <SidebarAccordion
        header={sidebarCourse2Data.header}
        titles={sidebarCourse2Data.titles}
        isOpen={isOpenSecond}
        onToggle={onToggleSecond}
      />
    </div>
  )
}
