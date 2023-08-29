import { FormProvider, useForm } from 'react-hook-form'

import { Input } from 'components/shared/Input'
import { Button } from 'components/shared/Button'
import { DropDown, OptionType } from 'components/shared/DropDown'

import s from './ActiveTable.module.scss'

const options: OptionType[] = [
  { label: 'Все суммы', id: 0 },
  { label: '$25,000.00', id: 1 },
  { label: '$50,000.00', id: 2 },
]

export const ActiveTableForm = () => {
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
            placeholder="Сумма вложений"
            options={options}
            defaultOption={options[0]}
          />
          <div className={s.label}>Сумма вложений</div>
        </div>
        <Button className={s.button} type="submit">
          Поиск
        </Button>
      </form>
    </FormProvider>
  )
}
