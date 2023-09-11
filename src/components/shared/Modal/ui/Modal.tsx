import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'

import { useOnOutsideClick } from 'hooks/useOnOutsideClick'

import { IModal } from '../model/IModal.interface'

import s from './Modal.module.scss'

export const Modal = (props: IModal) => {
  const {
    className,
    classNameButton,
    children,
    textButton,
    isOpen = false,
    onOpen = () => null,
    onClose = () => null,
  } = props

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const ref = useRef<any>()

  const closeHandler = () => {
    setOpen(false)
    onClose(false)
  }

  const openHandler = () => {
    setOpen(true)
    onOpen(true)
  }

  useOnOutsideClick(ref, closeHandler)

  return (
    <>
      <button
        className={cn(s.trigger, classNameButton)}
        onClick={openHandler}
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
