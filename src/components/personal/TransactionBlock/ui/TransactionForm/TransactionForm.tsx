import cn from 'classnames'
import { FormProvider, useForm } from 'react-hook-form'

import { SystemIcon } from 'assets/icons'

import { DropDown, OptionType } from 'components/shared/DropDown'
import { Input } from 'components/shared/Input'
import { Button } from 'components/shared/Button'

import { ITransactionForm } from '../../model/Transaction.interface'

import s from './TransactionForm.module.scss'

const MOCK: OptionType[] = [
  { id: 1, label: 'Istanbul, TR (AHL)', image: SystemIcon },
  { id: 2, label: 'Paris, FR (CDG)', image: SystemIcon },
]

export const TransactionForm = (props: ITransactionForm) => {
  const { className, type } = props

  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={cn(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.col}>
          <DropDown placeholder="Платежная система" options={MOCK} />
          <div className={s.label}>Выберите Платежную систему</div>
        </div>
        <div className={s.col}>
          <Input
            className={s.input}
            placeholder={`Введите сумму ${
              type === 'derivation' ? 'вывода' : 'пополнения'
            }`}
            type="text"
            name="deposit"
          />
          <div className={s.label}>
            Укажите сумму для {type === 'derivation' ? 'вывода' : 'пополнения'}
          </div>
        </div>
        <Button className={s.button} type="submit">
          {type === 'derivation' ? 'Вывод' : 'Пополнить'}
        </Button>
      </form>
    </FormProvider>
  )
}
