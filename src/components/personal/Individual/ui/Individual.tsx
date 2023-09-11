import { LightningText } from 'components/shared/LightningText'

import { IndividualList } from './IndividualList'

import s from './Individual.module.scss'

export const Individual = () => (
  <div className={s.block}>
    <div className={s.left}>
      <p className={s.text}>
        Добро пожаловать в эксклюзивный раздел Индивидуальные Введения уголок
        специально созданный для наших ценных клиентов Здесь вы найдете
        уникальные возможности предоставленные с учетом вашего особого статуса
        Мы гордимся тем что вы с нами и стремимся предоставить вам
        непревзойденный опыт инвестирования
      </p>
      <ul className={s.list}>
        <LightningText text="Дополнительные торговые вебинары" />
        <LightningText text="Гибкие сроки" />
        <LightningText text="Сопровождение" />
        <LightningText text="Выписки и отчетность" />
        <LightningText text="Специальные акции" />
        <LightningText text="Финансовая консультация" />
        <LightningText text="Смешанные продукты" />
        <LightningText text="Сложный процент" />
      </ul>
    </div>
    <IndividualList />
  </div>
)
