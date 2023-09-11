import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import { getDirtyValues } from 'helpers/getDirtyValues'

import AccountServices from 'services/AccountServices'

import { Button } from 'components/shared/Button'
import { Input } from 'components/shared/Input'
import { IProfileField } from 'models/response/AccountResponse'

import { updateProfileSchema } from '../../lib/schema'

import s from './ProfileEditor.module.scss'

const { updateProfile } = AccountServices

export const ProfileEditor = (props: IProfileField) => {
  const { fam, im, userName, email, phoneNumber, country } = props

  const resolver = yupResolver(updateProfileSchema)

  const notifySuccess = () => toast.success('Вы обновили данные')

  const methods = useForm<IProfileField>({
    defaultValues: {
      fam,
      email,
      im,
      userName,
      phoneNumber,
      country,
    },
    mode: 'onChange',
  })
  const {
    handleSubmit,
    formState: { dirtyFields },
  } = methods

  const onSubmit = async (data: IProfileField) => {
    const body = getDirtyValues(dirtyFields, data)

    try {
      await updateProfile(body as IProfileField)
      notifySuccess()
    } catch (e) {
      console.log('Error update', e)
    }
  }

  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.header}>
          <h2 className={s.title}>Личная информация</h2>
          <Button className={s.button} type="submit">
            Сохранить
          </Button>
        </div>
        <div className={s.inputs}>
          <div className={s.cell}>
            <Input placeholder="Фамилия" type="text" name="fam" />
            <p className={s.label}>Фамилия</p>
          </div>
          <div className={s.cell}>
            <Input placeholder="Имя" type="text" name="im" />
            <p className={s.label}>Имя</p>
          </div>
          <div className={s.cell}>
            <Input
              placeholder="User name"
              disabled
              type="text"
              name="userName"
            />
            <p className={s.label}>USERNAME</p>
          </div>
          <div className={s.cell}>
            <Input placeholder="Телефон" type="tel" name="phoneNumber" />
            <p className={s.label}>Телефон</p>
          </div>
          <div className={s.cell}>
            <Input placeholder="E-mail" disabled type="email" name="email" />
            <p className={s.label}>E-mail</p>
          </div>
          <div className={s.cell}>
            <Input placeholder="Страна" type="text" name="country" />
            <p className={s.label}>Страна</p>
          </div>
          <div className={s.cell}>
            <Input
              placeholder="Старый пароль"
              type="password"
              name="oldPassword"
            />
            <p className={s.label}>Старый пароль</p>
          </div>
          <div className={s.cell}>
            <Input
              placeholder="Новый пароль"
              type="password"
              name="newPassword"
            />
            <p className={s.label}>Новый пароль (минимум 8 символов) </p>
          </div>
          <div className={s.cell}>
            <Input
              placeholder="Подтвердите пароль"
              type="password"
              name="repeat_password"
            />
            <p className={s.label}>Подтвердите пароль</p>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
