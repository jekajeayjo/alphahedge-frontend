import s from './InfoCard.module.scss'

interface IProp {
  label: string
  value: string
}

export const InfoCardStat = (props: IProp) => {
  const { value, label } = props
  return (
    <div className={s.stat}>
      <div className={s.value}>{value}</div>
      <div className={s.label}>{label}</div>
    </div>
  )
}
