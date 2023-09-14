import cn from 'classnames'
import { CarouselPagination } from 'components/shared/CarouselPagination'

import { ITableComponent } from '../../model/Table.interface'

import s from './TableComponent.module.scss'

import { Table } from '../Table/Table'
import { TableBody } from '../TableBody/TableBody'
import { TableCell } from '../TableCell/TableCell'
import { TableHead } from '../TableHead/TableHead'
import { TableRow } from '../TableRow/TableRow'
import { TableSorting } from './TableSorting'

export function TableComponent<T>(props: ITableComponent<T>) {
  const {
    tableTitles,
    tables,
    renderComponent,
    classNameWrapper,
    classNameInner,
    className,
    classNameHeader,
    classNameBody,
    classNamePagination,
    currentPage,
    total,
    fetchNext = () => null,
    fetchPrev = () => null,
  } = props

  return (
    <div className={classNameWrapper}>
      <div className={classNameInner}>
        <Table className={className}>
          <TableHead className={classNameHeader}>
            <TableRow>
              {tableTitles.map((tableTitle, idx) => (
                <TableCell key={idx}>
                  {tableTitle.title}
                  {tableTitle.sortField && (
                    <TableSorting sortField={tableTitle.sortField} />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classNameBody}>
            {tables.map(renderComponent)}
          </TableBody>
        </Table>
      </div>
      <CarouselPagination
        className={cn(s.pagination, classNamePagination)}
        showPagination
        index={currentPage + 1}
        total={total}
        nextButtonClick={() => fetchNext()}
        prevButtonClick={() => fetchPrev()}
      />
    </div>
  )
}
