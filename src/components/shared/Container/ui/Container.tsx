import { FC, ReactNode } from 'react'

import s from './Container.module.scss'

export const Container: FC<{ children: ReactNode }> = ({ children }) => <div className={s.container}>{children}</div>
