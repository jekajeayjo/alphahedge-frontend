import s from './AsideUserInfo.module.scss'

export const AsideUserInfo = () => (
  <div className={s.info}>
    <div className={s.name}>gn</div>
    <div className={s.content}>
      <div className={s.balance}>
        <span>$</span>985,563.00
      </div>
      <div className={s.account}>Buisness account</div>
    </div>
  </div>
)
