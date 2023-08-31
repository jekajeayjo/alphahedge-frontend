import { TableComponent } from 'components/shared/table'

import { IReferralItem } from '../model/Referral.interface'

import { ReferralHeader } from './ReferralHeader'
import { ReferralItem } from './ReferralItem'

import s from './Referral.module.scss'

const list: IReferralItem[] = [
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '0' },
  { name: 'Mitrofanova Eleonora', data: '18.08.2023', price: '9860. 00' },
]

export const Referral = () => (
  <div className={s.referral}>
    <ReferralHeader />
    <TableComponent
      className={s.table}
      classNameInner={s.inner}
      classNameWrapper={s.wrapper}
      classNameHeader={s.theader}
      classNameBody={s.tbody}
      classNamePagination={s.pagination}
      tables={list}
      perPage={7}
      renderComponent={(referal: IReferralItem) => (
        <ReferralItem {...referal} />
      )}
      tableTitles={[]}
    />
  </div>
)
