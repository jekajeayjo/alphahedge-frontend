import cn from 'classnames'
import { useState } from 'react'
import { CarouselPagination } from 'components/shared/CarouselPagination'

import { ITableComponent } from '../../model/Table.interface'

import s from './TableComponent.module.scss'

import { Table } from '../Table/Table'
import { TableBody } from '../TableBody/TableBody'
import { TableCell } from '../TableCell/TableCell'
import { TableHead } from '../TableHead/TableHead'
import { TableRow } from '../TableRow/TableRow'

export function TableComponent<T>(props: ITableComponent<T>) {
  const {
    tableTitles,
    tables,
    renderComponent,
    perPage,
    classNameWrapper,
    classNameInner,
    className,
    classNameHeader,
    classNameBody,
    classNamePagination,
  } = props

  const [currentPage, setCurrentPage] = useState(1)

  const paginationChange = (page: number) => {
    if (page >= 1 && page - 1 < tables.length / perPage) {
      setCurrentPage(page)
    }
  }

  const getData = (current: number, pageSize: number) =>
    tables.slice((current - 1) * pageSize, current * pageSize)

  return (
    <div className={classNameWrapper}>
      <div className={classNameInner}>
        <Table className={className}>
          <TableHead className={classNameHeader}>
            <TableRow>
              {tableTitles.map((tableTitle, idx) => (
                <TableCell key={idx}>{tableTitle}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classNameBody}>
            {getData(currentPage, perPage).map(renderComponent)}
          </TableBody>
        </Table>
      </div>
      <CarouselPagination
        className={cn(s.pagination, classNamePagination)}
        showPagination
        index={currentPage}
        total={tables.length / perPage}
        nextButtonClick={() => paginationChange(currentPage + 1)}
        prevButtonClick={() => paginationChange(currentPage - 1)}
      />
    </div>
  )
}
