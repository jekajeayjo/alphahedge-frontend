import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'

import { useOnOutsideClick } from 'hooks/useOnOutsideClick'

import { IModal } from '../model/IModal.interface'

import s from './Modal.module.scss'

export const Modal = (props: IModal) => {
  const { className, classNameButton, children, textButton } = props

  const [open, setOpen] = useState(false)

  const ref = useRef<any>()

  const onClose = () => {
    setOpen(false)
  }

  const onOpen = () => {
    setOpen(true)
  }

  useOnOutsideClick(ref, onClose)

  return (
    <>
      <button
        className={cn(s.trigger, classNameButton)}
        onClick={onOpen}
        type="button"
        dangerouslySetInnerHTML={{ __html: textButton }}
      />
      {open
        ? createPortal(
            <div className={cn(s.modal, className)}>
              <div className={s.content} ref={ref}>
                {children}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
