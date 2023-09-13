import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { EditIcon } from 'assets/icons'

import AdminService from 'services/AdminService'

import { Input } from 'components/shared/Input'
import { TableCell } from 'components/shared/table'

import { floorPrice } from 'helpers/floorPrice'

import s from './UsersCarousel.module.scss'

interface IProps {
  id: number
  amount: number
  currentStatus: string
  transactionType: string
  updateData: () => Promise<void>
}

interface IField {
  id: string
  amountOut: string
}

const { editAmountTransaction } = AdminService

export const UserTablePriceChanger = (props: IProps) => {
  const { amount, id, currentStatus, transactionType, updateData } = props

  const [isEdit, setIsEdit] = useState(false)

  const methods = useForm<IField>()
  const { handleSubmit, setValue } = methods

  useEffect(() => {
    setValue('amountOut', amount.toString())
  }, [amount])

  const notifyError = () => toast.error('Произошла ошибка, попробуйте позже')
  const notifySuccess = () => toast.success('Сумма обнавлена')

  const onSubmit = async (data: IField) => {
    try {
      await editAmountTransaction(
        id,
        Number(data.amountOut.replace(/[^0-9]/g, '')),
        currentStatus,
        transactionType,
      )
      await updateData()
      notifySuccess()
    } catch (e) {
      notifyError()
      console.log('Error change price', e)
    } finally {
      setIsEdit(false)
      setValue('amountOut', amount.toString())
    }
  }

  return (
    <FormProvider {...methods}>
      <TableCell className={s.price}>
        {isEdit ? (
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              className={s.input}
              type="text"
              name="amountOut"
              prefix="$"
              placeholder="price"
            />
            <button type="submit">
              <img src={EditIcon} alt="" />
            </button>
          </form>
        ) : (
          <>
            ${floorPrice(amount)}
            <button type="button" onClick={() => setIsEdit(true)}>
              <img src={EditIcon} alt="" />
            </button>
          </>
        )}
      </TableCell>
    </FormProvider>
  )
}
