import { useContext } from 'react'

import { TableComponent } from 'components/shared/table'

import { UserDataContext } from 'components/admins/IndividualsBody/context/UserDataContext'

import { ActiveTableForm } from './ActiveTableForm'
import { ActiveRow } from './ActiveRow'

import s from './ActiveTable.module.scss'

const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const ActiveTableBody = () => {
  const { setUserData } = useContext(UserDataContext)

  return (
    <>
      <ActiveTableForm />
      <TableComponent
        classNameWrapper={s.wrapper}
        classNameInner={s.inner}
        classNameHeader={s.head}
        className={s.table}
        classNameBody={s.tbody}
        tables={mockArr}
        currentPage={1}
        total={10}
        fetchNext={() => null}
        fetchPrev={() => null}
        renderComponent={(item) => (
          <ActiveRow onClick={(e) => setUserData(e)} />
        )}
        tableTitles={[
          'ФИО Пользователя',
          'Username',
          'Дата открытия',
          'Сумма вложений',
        ]}
      />
    </>
  )
}
