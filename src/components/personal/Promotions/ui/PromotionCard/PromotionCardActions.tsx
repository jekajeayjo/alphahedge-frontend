import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import cn from 'classnames'

import { Button } from 'components/shared/Button'
import { CounterChanger } from 'components/shared/CounterChanger'

import s from './PromotionCard.module.scss'

export const PromotionCardActions = () => {
  const [count, setCount] = useState(0)

  const onChangeCounter = () => {
    if (!count) {
      setCount(1)
    }
  }

  const incrementHandler = () => {
    setCount((prevState) => prevState + 1)
  }

  const decrementCounter = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1)
    }
  }

  return (
    <div>
      <Button
        className={cn(s.button, { [s.apply]: count })}
        type="button"
        onClick={onChangeCounter}
      >
        {count ? 'Подтвердить' : 'Купить'}
        <span className={s.price}>
          $ 174. <strong>5514</strong>
        </span>
      </Button>
      <AnimateHeight height={count ? 'auto' : 0}>
        <div className={s.body}>
          <div className={s.counter}>
            <div className={s.counterLabel}>Выберите кол-во :</div>
            <CounterChanger
              decrement={decrementCounter}
              value={count}
              increment={incrementHandler}
            />
          </div>
          <p className={s.notification}>*Вы покупаете актив без комиссий</p>
        </div>
      </AnimateHeight>
    </div>
  )
}
