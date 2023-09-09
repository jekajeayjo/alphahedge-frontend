import cn from 'classnames'

import { ICarouselNavigation } from '../model/CarouselPagination.interface'

import s from './CarouselPagination.module.scss'

export const CarouselPagination = (props: ICarouselNavigation) => {
  const {
    className,
    prevButtonClick,
    nextButtonClick,
    index = 1,
    total = 1,
    showPagination = false,
  } = props

  return (
    <div className={cn(s.navigation, className, { [s.hide]: total <= 1 })}>
      {showPagination && (
        <div className={s.pagination}>
          {index} of {Math.ceil(total)}
        </div>
      )}
      <button onClick={prevButtonClick} disabled={index === 1} type="button">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5247 23.8333C19.2726 23.8341 19.0336 23.7208 18.8747 23.5249L14.8497 18.5249C14.597 18.2174 14.597 17.7741 14.8497 17.4666L19.0164 12.4666C19.3109 12.1122 19.837 12.0637 20.1914 12.3583C20.5458 12.6528 20.5943 13.1789 20.2997 13.5333L16.5747 17.9999L20.1747 22.4666C20.3828 22.7164 20.4266 23.0643 20.287 23.3579C20.1474 23.6515 19.8498 23.8371 19.5247 23.8333Z"
            fill="#212B36"
          />
        </svg>
      </button>
      <button onClick={nextButtonClick} disabled={index >= total} type="button">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3333 23.8331C16.1386 23.8335 15.9499 23.7657 15.8 23.6415C15.6296 23.5002 15.5224 23.2969 15.5021 23.0764C15.4817 22.856 15.55 22.6365 15.6917 22.4665L19.425 17.9998L15.825 13.5248C15.6852 13.3526 15.6198 13.1318 15.6432 12.9113C15.6667 12.6908 15.7771 12.4887 15.95 12.3498C16.1243 12.1964 16.3547 12.1227 16.5856 12.1465C16.8166 12.1702 17.0272 12.2892 17.1667 12.4748L21.1917 17.4748C21.4444 17.7823 21.4444 18.2256 21.1917 18.5331L17.025 23.5331C16.8555 23.7377 16.5985 23.8491 16.3333 23.8331Z"
            fill="#212B36"
          />
        </svg>
      </button>
    </div>
  )
}
