import { TableCell, TableRow } from 'components/shared/table'

import { TableNameUser } from 'components/admins/TableNameUser'
import { ChangeStatus } from 'components/admins/ChangeStatus'

import s from './UsersCarousel.module.scss'

export const UserTableRow = () => (
  <TableRow className={s.row}>
    <TableNameUser className={s.fullname} showType="fullName" />
    <TableNameUser className={s.username} showType="username" />
    <TableCell className={s.date}>
      21.08.2023, <span>16:45</span>
    </TableCell>
    <TableCell className={s.type}>TRC20</TableCell>
    <TableCell className={s.price}>
      $20,000
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
            fill="#00263A"
          />
          <path
            d="M3.93761 12.3038L5.13086 12.1711C5.38455 12.1427 5.62108 12.029 5.80174 11.8486L10.9205 6.73134L11.9814 5.67046C12.1923 5.45949 12.3107 5.1734 12.3107 4.87509C12.3107 4.57678 12.1923 4.29068 11.9814 4.07971L10.9205 3.01884C10.7095 2.80793 10.4234 2.68945 10.1251 2.68945C9.8268 2.68945 9.54071 2.80793 9.32974 3.01884L8.26886 4.07971L3.15011 9.19696C2.96967 9.37772 2.85597 9.61439 2.82761 9.86821L2.69636 11.0626C2.67887 11.2197 2.69469 11.3788 2.74279 11.5294C2.79089 11.68 2.87019 11.8187 2.97552 11.9366C3.08086 12.0545 3.20986 12.1489 3.35411 12.2136C3.49837 12.2783 3.65464 12.3118 3.81274 12.3121C3.85448 12.3115 3.89616 12.3088 3.93761 12.3038ZM9.85886 3.54909C9.92919 3.47879 10.0246 3.43929 10.124 3.43929C10.2234 3.43929 10.3188 3.47879 10.3891 3.54909L11.45 4.60996C11.5203 4.68029 11.5598 4.77565 11.5598 4.87509C11.5598 4.97452 11.5203 5.06989 11.45 5.14021L10.6542 5.93596L9.06311 4.34484L9.85886 3.54909ZM3.44186 11.1443L3.57424 9.95109C3.58368 9.86609 3.62161 9.78679 3.68186 9.72609L8.53399 4.87509L10.1251 6.46621L5.27299 11.3183C5.21219 11.3784 5.13294 11.4163 5.04799 11.426L3.85474 11.5583C3.79912 11.5642 3.74289 11.5576 3.69015 11.539C3.63742 11.5203 3.58953 11.4901 3.54998 11.4506C3.51043 11.4111 3.48023 11.3632 3.46158 11.3104C3.44294 11.2577 3.43633 11.2015 3.44224 11.1458L3.44186 11.1443Z"
            fill="white"
          />
        </svg>
      </button>
    </TableCell>
    <TableCell className={s.change}>
      <ChangeStatus status="В обработке" />
    </TableCell>
  </TableRow>
)
