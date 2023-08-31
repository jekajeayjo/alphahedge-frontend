import { useState } from 'react'
import cn from 'classnames'

import { TableCell, TablePrice, TableRow } from 'components/shared/table'
import { Price } from 'components/shared/Price'
import { Button } from 'components/shared/Button'
import { CounterChanger } from 'components/shared/CounterChanger'

import { Company } from 'components/personal/Company'

import { IActiveTableRow } from '../model/ActiveTableRow.interface'

import s from './ActiveTableRow.module.scss'

export const ActiveTableRow = (props: IActiveTableRow) => {
  const { showButton = false } = props

  const [sellCounter, setSellCounter] = useState(0)

  const changeCounter = () => {
    if (!sellCounter) {
      setSellCounter(1)
    }
  }

  const incrementHandler = () => {
    setSellCounter((prevState) => prevState + 1)
  }

  const decrementCounter = () => {
    if (sellCounter > 1) {
      setSellCounter((prevState) => prevState - 1)
    }
  }

  return (
    <>
      <TableRow className={cn({ [s.borderHide]: sellCounter })}>
        <TableCell className={s.company}>
          <Company name="Meta" />
        </TableCell>
        <TableCell className={cn(s.price, { [s.md]: showButton })}>
          <Price type="xs" price="1753.00" />
        </TableCell>
        <TableCell>
          <TablePrice price="18,530. 00" type="up" showPercent />
        </TableCell>
        <TableCell className={cn(s.actions, { [s.md]: showButton })}>
          10
        </TableCell>
        <TableCell>
          <TablePrice price="18,530. 00" type="up" />
        </TableCell>
        {showButton && (
          <TableCell className={s.more}>
            <button type="button">Подробнее</button>
          </TableCell>
        )}
        {showButton && (
          <TableCell className={s.cell}>
            <Button className={s.button} type="button" onClick={changeCounter}>
              {sellCounter ? 'Подтвердить' : 'Продать'}
            </Button>
          </TableCell>
        )}
      </TableRow>
      <TableRow className={cn(s.counter, { [s.show]: sellCounter })}>
        <TableCell className={s.label}>
          <span>Выберите кол-во акций :</span>
        </TableCell>
        <TableCell className={s.changer}>
          <CounterChanger
            value={sellCounter}
            increment={incrementHandler}
            decrement={decrementCounter}
          />
        </TableCell>
      </TableRow>
    </>
  )
}
