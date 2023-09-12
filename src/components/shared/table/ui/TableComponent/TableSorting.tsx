import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import cn from 'classnames'

import s from './TableComponent.module.scss'

interface ITableSorting {
  sortField: string
}

export const TableSorting = (props: ITableSorting) => {
  const { sortField } = props
  const [searchParams, setSearchParams] = useSearchParams()

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const param = searchParams.get(sortField)

    if (param) {
      setIsActive(param === 'ASC')
    }
  }, [])

  const toggleSort = () => {
    if (sortField) {
      searchParams.set(sortField, isActive ? 'DESC' : `ASC`)
      setSearchParams(searchParams)
      setIsActive((prevState) => !prevState)
    }
  }

  return (
    <button
      className={cn(s.arrow, { [s.isActive]: isActive })}
      type="button"
      onClick={toggleSort}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
      >
        <path d="M1 1L6 6L11 1" stroke="#2F2F2F" />
      </svg>
    </button>
  )
}
