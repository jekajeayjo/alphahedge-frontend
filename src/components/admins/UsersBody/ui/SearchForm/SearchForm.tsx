import { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useSearchParams } from 'react-router-dom'

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

interface IFields {
  fio: string
  userName: string
  email: string
  role?: string
  balance: string | null
  page?: string | null
}

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [role, setRole] = useState<OptionType>(options[0])

  const methods = useForm<IFields>({
    defaultValues: {
      fio: '',
      role: '',
      userName: '',
      email: '',
    },
  })

  const { handleSubmit, setValue } = methods

  useEffect(() => {
    const qs = queryString.parse(searchParams.toString())

    const searchRole = options.find(
      (option) => option.label === searchParams.get('role'),
    )

    setRole(searchRole ?? options[0])
    // @ts-ignore
    Object.keys(qs).forEach((key) => setValue(key as keyof IFields, qs[key]))
  }, [])

  const onSubmit = (data: IFields) => {
    const body = data

    if (role.label === 'Все роли') {
      delete body.role
    } else {
      body.role = role.label
    }

    if (searchParams.get('balance')) {
      body.balance = searchParams.get('balance')
    }

    delete body.page

    const stringified = `?${queryString.stringify(body, {
      skipEmptyString: true,
    })}`

    setSearchParams(stringified)
  }

  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.cell}>
          <Input className={s.input} placeholder="ФИО" type="text" name="fio" />
          <div className={s.label}>ФИО</div>
        </div>
        <div className={s.cell}>
          <Input
            className={s.input}
            placeholder="Username"
            type="text"
            name="userName"
          />
          <div className={s.label}>Username</div>
        </div>
        <div className={s.cell}>
          <Input
            className={s.input}
            placeholder="E-mail"
            type="text"
            name="email"
          />
          <div className={s.label}>E-mail</div>
        </div>
        <div className={s.cell}>
          <DropDown
            className={s.drop}
            placeholder="Роль"
            options={options}
            defaultOption={role}
            onSelectItem={setRole}
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
