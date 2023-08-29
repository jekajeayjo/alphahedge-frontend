import { FormProvider, useForm } from 'react-hook-form'

import { Input } from 'components/shared/Input'
import { Button } from 'components/shared/Button'
import { PersonalBlock } from 'components/shared/PersonalBlock'

import { DropDown, OptionType } from 'components/shared/DropDown'

import s from './AddIncome.module.scss'

const MOCK: OptionType[] = [
  { id: 1, label: 'Istanbul, TR (AHL)' },
  { id: 2, label: 'Paris, FR (CDG)' },
]

export const AddIncome = () => {
  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <PersonalBlock className={s.wrapper} label="добавить доход">
      <FormProvider {...methods}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.col}>
            <DropDown placeholder="Дата дохода" options={MOCK} />
            <div className={s.label}>Выберите Дату дохода</div>
          </div>
          <div className={s.col}>
            <Input
              className={s.input}
              placeholder="Сумма дохода"
              type="text"
              name="deposit"
            />
            <div className={s.label}>Укажите сумму Дохода</div>
          </div>
          <Button className={s.button} type="submit">
            Добавить
          </Button>
        </form>
      </FormProvider>
    </PersonalBlock>
  )
}
