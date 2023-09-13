import AnimateHeight from 'react-animate-height'

import { ArrowAccordionIcon } from 'assets/icons'

import s from './Sidebar.module.scss'

interface SidebarAccordionProps {
  header: string
  titles: string[]
  isOpen: boolean
  onToggle: () => void
}

export const SidebarAccordion = (props: SidebarAccordionProps) => {
  const { header, titles, isOpen, onToggle } = props

  return (
    <div className={s.item}>
      <button
        className={isOpen ? s.header : `${s.header} ${s.header_disabled}`}
        type="button"
        onClick={() => onToggle()}
      >
        {header}
        <img
          className={isOpen ? s.active : ''}
          src={ArrowAccordionIcon}
          alt="arrow"
        />
      </button>
      <AnimateHeight height={isOpen ? 'auto' : 0}>
        <ul className={s.content}>
          {titles.map((title) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <li className={s.item} key={title}>
              <a href="/course1#whatIsOption">{title}</a>
            </li>
          ))}
        </ul>
      </AnimateHeight>
    </div>
  )
}
