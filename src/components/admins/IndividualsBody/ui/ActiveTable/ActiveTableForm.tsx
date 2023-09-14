import { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useSearchParams } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'

import { Input } from 'components/shared/Input'
import { Button } from 'components/shared/Button'
import { DropDown, OptionType } from 'components/shared/DropDown'

import s from './ActiveTable.module.scss'

const options: OptionType[] = [
  { label: 'Все суммы', id: 0 },
  { label: '$ 25,000', id: 1 },
  { label: '$ 50,000', id: 2 },
  { label: '$ 150,000', id: 3 },
]

interface IFields {
  fio: string
  userName: string
  amount?: string | null
  page?: string | null
}

export const ActiveTableForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const methods = useForm<IFields>()
  const { handleSubmit, setValue } = methods

  const [total, setTotal] = useState<OptionType>(options[0])

  useEffect(() => {
    const qs = queryString.parse(searchParams.toString())

    const searchTotal = options.find(
      (option) =>
        option.label?.replace(/[^0-9]/g, '') === searchParams.get('amount'),
    )

    setTotal(searchTotal ?? options[0])
    // @ts-ignore
    Object.keys(qs).forEach((key) => setValue(key as keyof IFields, qs[key]))
  }, [])

  const onSubmit = (data: IFields) => {
    const body = data

    if (total.label === 'Все суммы') {
      delete body.amount
    } else {
      body.amount = total.label?.replace(/[^0-9]/g, '')
    }

    if (searchParams.get('balance')) {
      body.amount = searchParams.get('amount')
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
          <Input
            className={s.input}
            placeholder="ФИО"
            type="text"
            name="accountFio"
          />
          <div className={s.label}>ФИО</div>
        </div>
        <div className={s.cell}>
          <Input
            className={s.input}
            placeholder="Username"
            type="text"
            name="accountUsername"
          />
          <div className={s.label}>Username</div>
        </div>
        <div className={s.cell}>
          <DropDown
            className={s.drop}
            placeholder="Сумма вложений"
            options={options}
            defaultOption={total}
            onSelectItem={setTotal}
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
