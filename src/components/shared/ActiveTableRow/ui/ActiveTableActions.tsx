import { useState } from 'react'
import cn from 'classnames'

import { TableCell } from 'components/shared/table'
import { Button } from 'components/shared/Button'
import { Modal } from 'components/shared/Modal'

import s from './ActiveTableRow.module.scss'

interface IActiveTableActions {
  isOpen: boolean
  changeCounter: () => void
}

export const ActiveTableActions = (props: IActiveTableActions) => {
  const { isOpen, changeCounter } = props

  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false)

  return (
    <>
      <TableCell className={s.more}>
        <Modal
          className={s.inner}
          textButton="Подробнее"
          isOpen={isOpenPopup}
          onOpen={setIsOpenPopup}
          onClose={setIsOpenPopup}
        >
          <div className={s.modal}>
            <div className={s.title}>История покупки акций</div>
            <div className={s.header}>1</div>
          </div>
        </Modal>
      </TableCell>
      <TableCell className={cn(s.action, { [s.isOpen]: isOpen })}>
        <Button className={s.button} type="button" onClick={changeCounter}>
          {isOpen ? 'Подтвердить' : 'Продать'}
        </Button>
      </TableCell>
    </>
  )
}
