import { Link } from 'react-router-dom'

import { ActiveTableRow } from 'components/shared/ActiveTableRow'
import { TableLabel } from 'components/shared/table'
import { TableComponent } from 'components/shared/table/ui/TableComponent/TableComponent'

import { ArrowLinkBlack } from 'assets/icons'

import s from './ActivePackage.module.scss'

const mockArr = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
]

export const ActivePackage = () => (
  <>
    <div className={s.header}>
      <div className={s.left}>
        <TableLabel
          label="общая стоимость Пакета"
          value="199,860. 00"
          type="price"
        />
        <TableLabel label="Общее кол-во Акций" value="18" type="num" />
      </div>
      <div className={s.right}>
        <Link to="/">
          Все акции
          <img src={ArrowLinkBlack} alt="arrow" />
        </Link>
      </div>
    </div>

    <TableComponent
      classNameInner={s.wrapper}
      className={s.table}
      classNameBody={s.tbody}
      tables={mockArr}
      perPage={6}
      renderComponent={() => <ActiveTableRow />}
      tableTitles={[
        'Название',
        'Текущая цена',
        'Приобретенные акции',
        'Общая стоимость',
      ]}
    />
  </>
)
