import cn from 'classnames'

import { ICarouselNavigation } from '../model/CarouselNavigation.interface'

import s from './CarouselNavigation.module.scss'

export const CarouselNavigation = (props: ICarouselNavigation) => {
  const { className, prevButtonClick, nextButtonClick } = props

  return (
    <div className={cn(s.navigation, className)}>
      <button onClick={prevButtonClick} type="button">
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="39" cy="39" r="38" stroke="black" strokeWidth="2" />
          <path
            d="M17.2524 38.2784C16.6666 38.8642 16.6666 39.814 17.2524 40.3998L26.7983 49.9457C27.3841 50.5315 28.3339 50.5315 28.9197 49.9457C29.5054 49.3599 29.5054 48.4102 28.9197 47.8244L20.4344 39.3391L28.9197 30.8538C29.5055 30.268 29.5055 29.3183 28.9197 28.7325C28.3339 28.1467 27.3841 28.1467 26.7983 28.7325L17.2524 38.2784ZM60.3652 37.8391L18.3131 37.8391L18.3131 40.8391L60.3652 40.8391L60.3652 37.8391Z"
            fill="black"
          />
        </svg>
      </button>
      <button onClick={nextButtonClick} type="button">
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="39"
            cy="39"
            r="38"
            transform="matrix(-1 0 0 1 78 0)"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M60.7476 38.2784C61.3334 38.8642 61.3334 39.814 60.7476 40.3998L51.2017 49.9457C50.6159 50.5315 49.6661 50.5315 49.0803 49.9457C48.4946 49.3599 48.4946 48.4102 49.0803 47.8244L57.5656 39.3391L49.0803 30.8538C48.4945 30.268 48.4945 29.3183 49.0803 28.7325C49.6661 28.1467 50.6159 28.1467 51.2017 28.7325L60.7476 38.2784ZM17.6348 37.8391L59.6869 37.8391L59.6869 40.8391L17.6348 40.8391L17.6348 37.8391Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  )
}
