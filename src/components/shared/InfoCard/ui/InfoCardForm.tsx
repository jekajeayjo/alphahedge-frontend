import { FormProvider, useForm } from 'react-hook-form'

import { Input } from 'components/shared/Input'
import { Button } from 'components/shared/Button'

import s from './InfoCard.module.scss'

export const InfoCardForm = () => {
  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={s.input}
          placeholder="Введите сумму депозита"
          type="text"
          name="deposit"
        />
        <Button className={s.button} type="submit">
          Инвестировать
        </Button>
      </form>
    </FormProvider>
  )
}
