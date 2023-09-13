import s from './TitleSection.module.scss'

interface TitleSectionProps {
  title: string
  label: string
}

export const TitleSection = ({ title, label }: TitleSectionProps) => (
    <div className={s.titleSection}>
      <span className={s.label}>{label}</span>
      <h4 className={s.title}>{title}</h4>
    </div>
  )
