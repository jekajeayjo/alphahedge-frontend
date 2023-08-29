import { FormProvider, useForm } from 'react-hook-form'

import { Input } from 'components/shared/Input'
import { DropDown, OptionType } from 'components/shared/DropDown'
import { Button } from 'components/shared/Button'

import s from './SearchForm.module.scss'

const options: OptionType[] = [
  { label: 'Все роли', id: 0 },
  { label: 'User', id: 1 },
  { label: 'Admin', id: 2 },
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
          <Input
            className={s.input}
            placeholder="E-mail"
            type="email"
            name="email"
          />
          <div className={s.label}>E-mail</div>
        </div>
        <div className={s.cell}>
          <DropDown
            className={s.drop}
            placeholder="Роль"
            options={options}
            defaultOption={options[0]}
          />
          <div className={s.label}>Роль</div>
        </div>
        <Button className={s.button} type="submit">
          Поиск
        </Button>
      </form>
    </FormProvider>
  )
}
