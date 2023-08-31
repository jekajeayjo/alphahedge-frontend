import { TableComponent, TableLabel } from 'components/shared/table'
import { ActiveTableRow } from 'components/shared/ActiveTableRow'

import s from './PromotionTable.module.scss'

const mockArr = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]

export const PromotionTable = () => (
  <div className={s.wrapper}>
    <div className={s.header}>
      <div className={s.left}>Пакет приобретенных акций</div>
      <div className={s.right}>
        <TableLabel
          label=" общая стоимость Пакета"
          value="199,860. 00"
          type="price"
        />
        <TableLabel label="Общее кол-во Акций" value="18" type="num" />
      </div>
    </div>

    <TableComponent
      className={s.table}
      classNameInner={s.inner}
      classNameBody={s.tbody}
      classNamePagination={s.pagination}
      tables={mockArr}
      perPage={6}
      renderComponent={(item) => <ActiveTableRow showButton key={item} />}
      tableTitles={[
        'Название',
        'Цена покупки',
        'Текущая цена',
        'Приобретенные акции',
        'Общая стоимость',
      ]}
    />
  </div>
)
