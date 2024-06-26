import { FormProvider, useForm } from 'react-hook-form'

import { Input } from 'components/shared/Input'
import { DropDown, OptionType } from 'components/shared/DropDown'
import { Button } from 'components/shared/Button'

import s from './SearchForm.module.scss'

const optionsStatus: OptionType[] = [
  { label: 'Все статусы', id: 0 },
  { label: 'Успешно', id: 1 },
  { label: 'В обработке', id: 2 },
  { label: 'Отменен', id: 3 },
]

export const SearchForm = () => {
  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.cell}>
          <Input
            className={s.input}
            placeholder="ФИО"
            type="text"
            name="name"
          />
          <div className={s.label}>ФИО</div>
        </div>
        <div className={s.cell}>
          <Input
            className={s.input}
            placeholder="Username"
            type="text"
            name="username"
          />
          <div className={s.label}>Username</div>
        </div>
        <div className={s.cell}>
          <DropDown
            className={s.drop}
            placeholder="Статус"
            options={optionsStatus}
            defaultOption={optionsStatus[0]}
          />
          <div className={s.label}>Статус</div>
        </div>
        <Button className={s.button} type="submit">
          Поиск
        </Button>
      </form>
    </FormProvider>
  )
}
