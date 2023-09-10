import cn from 'classnames'

import s from './Loader.module.scss'

export const PageLoader = () => (
  <div className={s.page}>
    <div className={cn(s.loader, s.white)} />
  </div>
)
