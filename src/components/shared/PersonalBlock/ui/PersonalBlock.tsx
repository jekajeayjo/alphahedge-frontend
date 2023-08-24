import { Link } from 'react-router-dom'

import { ArrowLinkBlack } from 'assets/icons'

import { IPersonalBlock } from '../model/PersonalBlock.interface'

import s from './PersonalBlock.module.scss'

export const PersonalBlock = (props: IPersonalBlock) => {
  const { children, label, link, textLink } = props
  return (
    <div className={s.block}>
      <div className={s.label}>
        <span>{label}</span>
        {link && (
          <Link to={link}>
            {textLink}
            <img src={ArrowLinkBlack} alt="" />
          </Link>
        )}
      </div>
      {children}
    </div>
  )
}
