import cn from 'classnames'

import s from './Loader.module.scss'

export const Loader = ({ className }: { className?: string }) => (
  <div className={className}>
    <div className={cn(s.loader, s.blockLoader)} />
  </div>
)
