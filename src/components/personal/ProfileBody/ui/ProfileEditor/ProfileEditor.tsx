import { FormProvider, useForm } from 'react-hook-form'
import { Button } from 'components/shared/Button'
import { Input } from 'components/shared/Input'

import s from './ProfileEditor.module.scss'

export const ProfileEditor = () => {
  const methods = useForm()
  const { handleSubmit } = methods

  const onSubmit = (data: any) => {
    console.log(data)
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
            <Input placeholder="Фамилия" type="text" name="last_name" />
            <p className={s.label}>Фамилия</p>
          </div>
          <div className={s.cell}>
            <Input placeholder="Имя" type="text" name="first_name" />
            <p className={s.label}>Имя</p>
          </div>
          <div className={s.cell}>
            <Input placeholder="User name" type="text" name="username" />
            <p className={s.label}>USERNAME</p>
          </div>
          <div className={s.cell}>
            <Input placeholder="Телефон" type="text" name="phone" />
            <p className={s.label}>Телефон</p>
          </div>
          <div className={s.cell}>
            <Input placeholder="E-mail" type="email" name="email" />
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
              name="old_password"
            />
            <p className={s.label}>Старый пароль</p>
          </div>
          <div className={s.cell}>
            <Input
              placeholder="Новый пароль"
              type="password"
              name="new_password"
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
