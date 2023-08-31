import { TableComponent } from 'components/shared/table'

import { UserTableRow } from './UserTableRow'

import s from './UsersCarousel.module.scss'

const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

export const UsersCarousel = () => (
  <TableComponent
    className={s.table}
    classNameInner={s.inner}
    tableTitles={['ФИО Пользователя', 'Username', 'E-mail', 'Роль', 'Баланс']}
    perPage={7}
    tables={mockArr}
    renderComponent={(item) => <UserTableRow key={item} />}
  />
)
