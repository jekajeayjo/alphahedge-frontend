import cn from 'classnames'

import { ICarouselNavigation } from '../model/CarouselNavigation.interface'

import s from './CarouselNavigation.module.scss'

export const CarouselNavigation = (props: ICarouselNavigation) => {
  const { className, prevButtonClick, nextButtonClick } = props

  return (
    <div className={cn(s.navigation, className)}>
      <button onClick={prevButtonClick} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="78"
          fill="none"
        >
          <circle
            cx="39"
            cy="39"
            r="38"
            stroke="#fff"
            strokeOpacity=".5"
            strokeWidth="2"
          />
          <path
            fill="#fff"
            fillOpacity=".5"
            d="M17.252 38.279a1.5 1.5 0 0 0 0 2.12l9.546 9.547a1.5 1.5 0 0 0 2.122-2.122l-8.486-8.485 8.486-8.485a1.5 1.5 0 0 0-2.122-2.121l-9.546 9.546Zm43.113-.44H18.313v3h42.052v-3Z"
          />
        </svg>
      </button>
      <button onClick={nextButtonClick} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="78"
          fill="none"
        >
          <circle
            cx="39"
            cy="39"
            r="38"
            stroke="#fff"
            strokeOpacity=".5"
            strokeWidth="2"
            transform="matrix(-1 0 0 1 78 0)"
          />
          <path
            fill="#fff"
            fillOpacity=".5"
            d="M60.748 38.279a1.5 1.5 0 0 1 0 2.12l-9.546 9.547a1.5 1.5 0 0 1-2.122-2.122l8.486-8.485-8.486-8.485a1.5 1.5 0 0 1 2.122-2.121l9.546 9.546Zm-43.113-.44h42.052v3H17.635v-3Z"
          />
        </svg>
      </button>
    </div>
  )
}
