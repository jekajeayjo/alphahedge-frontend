import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import { DropArrowBlackIcon } from 'assets/icons'

import { useOnOutsideClick } from 'hooks/useOnOutsideClick'

import { IDropDown, OptionType } from '../model/DropDown.interface'

import s from './DropDown.module.scss'

export const DropDown = (props: IDropDown) => {
  const {
    options,
    className,
    placeholder,
    defaultOption,
    onSelect = () => null,
    onSelectItem = () => null,
  } = props

  const [isOpen, setOpen] = useState(false)

  const [selectedItem, setSelectedItem] = useState<OptionType | null>()

  useEffect(() => {
    if (defaultOption) {
      setSelectedItem(defaultOption)
    }
  }, [defaultOption])

  const ref = useRef<any>(null)

  useOnOutsideClick(ref, () => setOpen(false))

  const toggleDropdown = () => {
    setOpen((prevState) => !prevState)
  }

  const handleItemClick = (item: OptionType) => {
    setSelectedItem(item)
    setOpen(false)
  }

  return (
    <div className={cn(s.dropdown, className)} ref={ref}>
      <button
        className={cn(s.header, { [s.placeholder]: !selectedItem })}
        type="button"
        onClick={() => toggleDropdown()}
      >
        <div className={s.label}>
          {selectedItem ? (
            <>
              {selectedItem.image && (
                <img src={selectedItem.image} alt={selectedItem.label} />
              )}
              {selectedItem.label}
            </>
          ) : (
            placeholder
          )}
        </div>
        <img
          className={cn(s.arrow, { [s.active]: isOpen })}
          src={DropArrowBlackIcon}
          alt=""
        />
      </button>
      <div className={cn(s.body, { [s.open]: isOpen })}>
        {options.map((item) => (
          <button
            className={cn(s.item, {
              [s.current]: item.id === selectedItem?.id,
            })}
            type="button"
            key={item.id}
            onClick={() => {
              onSelect(item.label ?? '')
              onSelectItem(item)
              handleItemClick(item)
            }}
          >
            {item.image && <img src={item.image} alt={item.label} />}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
