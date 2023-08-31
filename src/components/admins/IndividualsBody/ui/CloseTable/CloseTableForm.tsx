import cn from 'classnames'

import { FormProvider, useForm } from 'react-hook-form'

import { Input } from 'components/shared/Input'
import { Button } from 'components/shared/Button'
import { DropDown, OptionType } from 'components/shared/DropDown'

import s from './CloseTable.module.scss'

const optionsPrice: OptionType[] = [
  { label: 'Все суммы', id: 0 },
  { label: '$25,000.00', id: 1 },
  { label: '$50,000.00', id: 2 },
]

const optionsStatus: OptionType[] = [
  { label: 'Все статусы', id: 0 },
  { label: 'В обработке', id: 1 },
  { label: 'Успешно', id: 2 },
  { label: 'Отменен', id: 2 },
]

export const CloseTableForm = () => {
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
            className={cn(s.drop, s.status)}
            placeholder="Статус"
            options={optionsStatus}
            defaultOption={optionsStatus[0]}
          />
          <div className={s.label}>Статус</div>
        </div>
        <div className={s.cell}>
          <DropDown
            className={s.drop}
            placeholder="Сумма вложений"
            options={optionsPrice}
            defaultOption={optionsPrice[0]}
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
