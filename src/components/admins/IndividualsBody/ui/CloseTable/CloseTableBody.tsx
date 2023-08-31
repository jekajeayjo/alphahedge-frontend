import { useContext } from 'react'

import { TableComponent } from 'components/shared/table'
import { UserDataContext } from 'components/admins/IndividualsBody/context/UserDataContext'

import { CloseTableRow } from './CloseTableRow'
import { CloseTableForm } from './CloseTableForm'

import s from './CloseTable.module.scss'

const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const CloseTableBody = () => {
  const { setUserData } = useContext(UserDataContext)

  return (
    <>
      <CloseTableForm />
      <TableComponent
        classNameWrapper={s.wrapper}
        classNameInner={s.inner}
        classNameHeader={s.head}
        className={s.table}
        classNameBody={s.tbody}
        tables={mockArr}
        perPage={7}
        renderComponent={(item) => (
          <CloseTableRow onClick={(e) => setUserData(e)} />
        )}
        tableTitles={[
          'ФИО Пользователя',
          'Username',
          'Дата открытия',
          'Сумма вложений',
          'Статус',
        ]}
      />
    </>
  )
}
