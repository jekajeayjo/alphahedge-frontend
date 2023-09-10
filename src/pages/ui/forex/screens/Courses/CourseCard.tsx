import { useNavigate } from 'react-router-dom'

import s from './Courses.module.scss'

interface ICourseCard {
  image: string
  label: string
  title: string
  description: string
  link: string
}

export const CourseCard = (props: ICourseCard) => {
  const { description, image, title, link, label } = props
  const navigate = useNavigate()

  return (
    <div className={s.course}>
      <img className={s.image} src={image} alt={title} />
      <span className={s.label}>{label}</span>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
      <button className={s.button} type="button" onClick={() => navigate(link)}>
        Начать обучение
      </button>
    </div>
  )
}
