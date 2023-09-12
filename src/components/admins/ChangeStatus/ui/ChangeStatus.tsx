import { useRef, useState } from 'react'
import cn from 'classnames'
import { toast } from 'react-toastify'

import { StatusCloseEnum } from 'models/StatusCloseEnum'

import { useOnOutsideClick } from 'hooks/useOnOutsideClick'

import AdminService from 'services/AdminService'

import { IChangeStatus } from '../model/ChangeStatus.interface'

import s from './ChangeStatus.module.scss'

const { updateBriefcaseOrder } = AdminService

export const ChangeStatus = (props: IChangeStatus) => {
  const { status, id, updateData } = props

  const [isOpen, setOpen] = useState(false)

  const ref = useRef<any>(null)

  useOnOutsideClick(ref, () => setOpen(false))

  const toggleDropdown = () => {
    if (status === StatusCloseEnum['В обработке']) {
      setOpen((prevState) => !prevState)
    }
  }

  const notifyError = () => toast.success('Произошла ошибка, попробуйте позже')
  const notifySuccess = () => toast.error('Статус был изменен')

  const changeStatusHandler = async (_status: StatusCloseEnum) => {
    try {
      await updateBriefcaseOrder(id, _status)
      await updateData()
      notifySuccess()
    } catch (e) {
      notifyError()
      console.log('Error update order')
    }
  }

  return (
    <div className={s.status} ref={ref}>
      <button
        className={cn(
          s.button,
          { [s.pending]: status === StatusCloseEnum['В обработке'] },
          { [s.success]: status === StatusCloseEnum['Успешно'] },
          { [s.cancel]: status === StatusCloseEnum['Отменен'] },
        )}
        type="button"
        onClick={() => toggleDropdown()}
      >
        {status === StatusCloseEnum['Успешно'] && 'Успешно'}
        {status === StatusCloseEnum['В обработке'] && 'В обработке'}
        {status === StatusCloseEnum['Отменен'] && 'Отменен'}

        {status === StatusCloseEnum['В обработке'] && (
          <svg
            className={cn(s.arrow, { [s.active]: isOpen })}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
          >
            <path
              d="M1 1.25L7.5 7.75L14 1.25"
              stroke="#DEBB00"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>

      <div className={cn(s.list, { [s.open]: isOpen })}>
        <button
          className={s.success}
          onClick={() => changeStatusHandler(StatusCloseEnum['Успешно'])}
          type="button"
        >
          Успешно
        </button>
        <button
          className={s.cancel}
          onClick={() => changeStatusHandler(StatusCloseEnum['Отменен'])}
          type="button"
        >
          Отменен
        </button>
      </div>
    </div>
  )
}
