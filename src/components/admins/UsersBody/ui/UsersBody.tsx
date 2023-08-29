import { WrapperTable } from 'components/admins/WrapperTable'

import { SearchForm } from './SearchForm/SearchForm'
import { UsersCarousel } from './UsersCarousel/UsersCarousel'

export const UsersBody = () => (
  <WrapperTable>
    <SearchForm />
    <UsersCarousel />
  </WrapperTable>
)
