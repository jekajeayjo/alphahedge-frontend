import cn from 'classnames'
import {
  TableCell,
  TableComponent,
  TableLabel,
  TablePrice,
  TableRow,
} from 'components/shared/table'

import { IIncomeTableCarousel } from '../model/IncomeTableCarousel.interface'

import s from './IncomeTable.module.scss'

const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

export const IncomeTableCarousel = (props: IIncomeTableCarousel) => {
  const { className, showTotal = true } = props

  return (
    <div className={cn(s.wrapper, className)}>
      <div className={s.header}>
        <div className={s.title}>Доходы</div>
        {showTotal && (
          <div className={s.total}>
            <TableLabel
              label="общее кол-во Доходов"
              value="599,860. 00"
              type="price"
            />
            <TableLabel
              label="кол-во Активных Портфелей"
              value="2"
              type="num"
            />
          </div>
        )}
      </div>

      <TableComponent
        className={s.table}
        classNameInner={s.inner}
        tableTitles={['Объем инвестиций', 'Дата', 'Сумма дохода']}
        perPage={6}
        tables={mockArr}
        renderComponent={(item) => (
          <TableRow key={item}>
            <TableCell className={s.price}>
              <span>$ 25,000.0{item}</span>
            </TableCell>
            <TableCell className={s.data}>21.08.2023</TableCell>
            <TableCell className={s.cellTotal}>
              <TablePrice price="18,530. 00" type="up" />
            </TableCell>
          </TableRow>
        )}
      />
    </div>
  )
}
