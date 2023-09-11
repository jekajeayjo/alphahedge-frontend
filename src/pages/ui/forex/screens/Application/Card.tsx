import s from './Application.module.scss'

interface ICard {
  title: string
  description: string
}

export const Card = (props: ICard) => {
  const { description, title } = props

  return (
    <div className={s.card}>
      <h4 className={s.card_title}>{title}</h4>
      <p className={s.card_description}>{description}</p>
    </div>
  )
}
