import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import AdminService from 'services/AdminService'
import { AdminGainSetRequest } from 'models/request/AdminRequest'

import { Input } from 'components/shared/Input'
import { Button } from 'components/shared/Button'
import { PersonalBlock } from 'components/shared/PersonalBlock'

import s from './AddIncome.module.scss'

interface IAddIncome {
  briefcaseAccountId?: number | null
  update: () => Promise<void>
}

const { gainSetAdvanced } = AdminService

export const AddIncome = (props: IAddIncome) => {
  const { briefcaseAccountId, update } = props

  const methods = useForm<AdminGainSetRequest>()
  const { handleSubmit, reset } = methods

  const notifyError = () => toast.error('Произошла ошибка, попробуйте позже')
  const notifySuccess = () => toast.success('Доход добавлен')

  const onSubmit = async (data: AdminGainSetRequest) => {
    if (briefcaseAccountId) {
      try {
        const formDate = new Date(data.date)
        const day = formDate.getDate()
        const month = formDate.getMonth() + 1
        const year = formDate.getFullYear()

        const dateStr = `${day > 9 ? day : `0${day}`}-${
          month > 9 ? month : `0${month}`
        }-${year}`

        const body = {
          ...data,
          date: dateStr,
          briefcaseAccountId: briefcaseAccountId.toString(),
        }

        await gainSetAdvanced(body)
        update()
        notifySuccess()
        reset()
      } catch (e) {
        notifyError()
        console.log('Error set advanced', e)
      }
    }
  }

  return (
    <PersonalBlock className={s.wrapper} label="добавить доход">
      <FormProvider {...methods}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.col}>
            <Input type="date" name="date" placeholder="Дата дохода" />
            <div className={s.label}>Выберите Дату дохода</div>
          </div>
          <div className={s.col}>
            <Input
              className={s.input}
              placeholder="Сумма дохода"
              type="text"
              name="amount"
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
