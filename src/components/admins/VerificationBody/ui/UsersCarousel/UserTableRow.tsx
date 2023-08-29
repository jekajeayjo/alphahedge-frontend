import { TableCell, TableRow } from 'components/shared/table'

import { ChangeStatus } from 'components/admins/ChangeStatus'
import { TableNameUser } from 'components/admins/TableNameUser'

export const UserTableRow = () => (
  <TableRow>
    <TableNameUser showType="fullName" />
    <TableNameUser showType="username" />
    <TableCell>21.08.2023</TableCell>
    <TableCell>
      <ChangeStatus status="В обработке" />
    </TableCell>
  </TableRow>
)
