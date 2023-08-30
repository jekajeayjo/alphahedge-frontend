import { IWrapperTable } from '../model/WrapperTable.interface'

import s from './WrapperTable.module.scss'

export const WrapperTable = (props: IWrapperTable) => {
  const { children, hideTitle = false } = props

  return (
    <div className={s.wrapper}>
      {!hideTitle && <h2 className={s.title}>Поиск</h2>}
      <div className={s.body}>{children}</div>
    </div>
  )
}
