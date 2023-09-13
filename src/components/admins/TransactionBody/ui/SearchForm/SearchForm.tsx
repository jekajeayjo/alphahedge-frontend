import { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useSearchParams } from 'react-router-dom'
import cn from 'classnames'
import { FormProvider, useForm } from 'react-hook-form'

import TransactionServices from 'services/TransactionServices'

import { Input } from 'components/shared/Input'
import { DropDown, OptionType } from 'components/shared/DropDown'
import { Button } from 'components/shared/Button'

import s from './SearchForm.module.scss'

const optionsStatus: OptionType[] = [
  { label: 'Все статусы', id: 0 },
  { label: 'В обработке', id: 1 },
  { label: 'Успешно', id: 2 },
  { label: 'Отменен', id: 3 },
]

const statusValues = {
  'В обработке': 'Process',
  Успешно: 'Success',
  Отменен: 'Canceled',
}

interface IFields {
  fio: string
  userName: string
  currencyToken?: string | null
  transactionStatus?: string | null
  transactionDate?: string | null
  page?: string | null
}

const { getTokens } = TransactionServices

export const SearchForm = () => {
  const methods = useForm<IFields>()

  const [searchParams, setSearchParams] = useSearchParams()

  const [status, setStatus] = useState<OptionType>(optionsStatus[0])
  const [token, setToken] = useState<OptionType>()

  const [tokens, setTokens] = useState<OptionType[]>([])

  const { handleSubmit, setValue } = methods

  const getTokenList = async () => {
    try {
      const response = await getTokens()
      const tokenList: OptionType[] = response.data.map((_token) => ({
        label: _token.currencyToken,
        id: _token.currencyTypeId,
        image: _token.image,
      }))
      setTokens([{ label: 'Все сети', id: 999 }, ...tokenList])
      setToken({ label: 'Все сети', id: 999 })
    } catch (e) {
      console.log('Error fetch tokens', e)
    }
  }

  useEffect(() => {
    getTokenList()

    const qs = queryString.parse(searchParams.toString())
    const searchToken = tokens.find(
      (option) =>
        option.label?.replace(/[^0-9]/g, '') ===
        searchParams.get('currencyToken'),
    )
    const searchStatus = optionsStatus.find(
      (option) => option.label === searchParams.get('status'),
    )

    setToken(searchToken ?? tokens[0])
    setStatus(searchStatus ?? optionsStatus[0])
    // @ts-ignore
    Object.keys(qs).forEach((key) => setValue(key as keyof IFields, qs[key]))
  }, [])

  const onSubmit = (data: IFields) => {
    const body = data

    if (token?.label === 'Все сети') {
      delete body.currencyToken
    } else {
      body.currencyToken = token?.label
    }

    if (status.label === 'Все статусы') {
      delete body.transactionStatus
    } else {
      // @ts-ignore
      body.transactionStatus = statusValues[status?.label]
    }

    if (searchParams.get('transactionDate')) {
      body.transactionDate = searchParams.get('transactionDate')
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
            name="username"
          />
          <div className={s.label}>Username</div>
        </div>
        <div className={s.cell}>
          <DropDown
            className={cn(s.drop, s.rol)}
            placeholder="Сеть"
            options={tokens}
            defaultOption={token}
            onSelectItem={setToken}
          />
          <div className={s.label}>Сеть</div>
        </div>
        <div className={s.cell}>
          <DropDown
            className={cn(s.drop, s.status)}
            placeholder="Статус"
            options={optionsStatus}
            defaultOption={status}
            onSelectItem={setStatus}
          />
          <div className={s.label}>Статус</div>
        </div>
        <Button className={s.button} type="submit">
          Поиск
        </Button>
      </form>
    </FormProvider>
  )
}
