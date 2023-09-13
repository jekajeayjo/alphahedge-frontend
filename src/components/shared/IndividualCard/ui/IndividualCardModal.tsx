import cn from 'classnames'
import { useState } from 'react'
import { toast } from 'react-toastify'

import AdminService from 'services/AdminService'

import useProfile from 'hooks/context/useProfile'

import { Modal } from 'components/shared/Modal'

import { FetchStatusType } from 'models/FetchStatusType'

import BriefcaseServices from 'services/BriefcaseServices'

import s from './IndividualCard.module.scss'

interface IIndividualCardModal {
  briefcaseId: number
  isDisable: boolean
  update?: () => void
}

const { closeBriefcase } = BriefcaseServices
const { closeAdvanced } = AdminService

export const IndividualCardModal = (props: IIndividualCardModal) => {
  const { isDisable, briefcaseId, update = () => null } = props

  const { payload } = useProfile()

  const [status, setStatus] = useState<FetchStatusType | null>(null)

  const notifyError = () => toast.error('Произошла ошибка, попробуйте позже')
  const notifySuccess = () => toast.success('Статус был изменен')

  const sendRequestHandler = async () => {
    setStatus('pending')
    try {
      await closeBriefcase(briefcaseId)
      await setStatus('success')
    } catch (e) {
      setStatus('error')
      console.log('Error send setting', e)
    }
  }

  const closeBrief = async () => {
    setStatus('pending')
    try {
      await closeAdvanced(briefcaseId)
      await setStatus('success')
      await update()
      notifySuccess()
    } catch (e) {
      setStatus('error')
      notifyError()
      console.log('Error send setting', e)
    }
  }

  return payload.profile?.role === 'Admin' ? (
    <button
      className={s.open}
      disabled={status === 'pending'}
      onClick={closeBrief}
      type="button"
    >
      Закрыть
    </button>
  ) : (
    <Modal
      classNameButton={cn(s.open, { [s.isDisable]: isDisable })}
      textButton="закрыть"
    >
      <div className={s.modal}>
        <div className={s.title}>Закрыть портфель</div>
        <p className={s.text}>
          {status === 'success'
            ? 'Вы успешно отправили заявку на закртытия портфеля'
            : 'Для закртытия портфеля Вам необходимо отправить заявку в службу поддержки..'}
        </p>
        <div className={s.time}>Заявка обрабатывается в течение 10 минут.</div>

        {status !== 'success' && (
          <button
            className={s.send}
            onClick={sendRequestHandler}
            disabled={status === 'pending'}
            type="button"
          >
            Отправить на заявку
          </button>
        )}
      </div>
    </Modal>
  )
}
