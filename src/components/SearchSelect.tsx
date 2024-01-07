import { useState } from 'react'
import Input from './Input'
import { Combobox } from '@headlessui/react'
import clsx from 'clsx'

interface IProps {
  items: string[]
  onChange?: (item: string) => void
  defaultValue?: string
  onInputChange?: (text: string) => void
  placeholder?: string
}

export default function SearchSelect({
  items,
  onChange,
  defaultValue,
  onInputChange,
  placeholder = 'ค้นหา',
}: IProps) {
  const [selectedItem, setSelectedItem] = useState(defaultValue)
  const [search, setSearch] = useState(defaultValue)

  return (
    <Combobox value={selectedItem} onChange={setSelectedItem}>
      <Combobox.Input
        className='h-11 w-full border rounded border-stroke px-4 py-2 text-secondary outline-none'
        placeholder={placeholder}
        onChange={(event) => {
          onInputChange?.(event.target.value)
          setSearch(event.target.value)
        }}
      />
      <Combobox.Options className='bg-white mt-1 rounded gap-1 max-h-60 overflow-auto'>
        {items.length === 0 && search !== '' ? (
          <Combobox.Option
            key={'not-found'}
            value={''}
            disabled
            className='p-2 text-stroke text-center'>
            <p>ไม่พบข้อมูลที่ต้องการค้นหา</p>
          </Combobox.Option>
        ) : (
          items.map((item) => (
            <Combobox.Option
              key={item}
              value={item}
              onClick={() => onChange?.(item)}
              className='px-2 py-1 cursor-pointer'>
              {({ active, selected }) => (
                <div
                  className={clsx({
                    'px-2 py-1 rounded': true,
                    'bg-secondary text-white': active || selected,
                  })}>
                  {item}
                </div>
              )}
            </Combobox.Option>
          ))
        )}
      </Combobox.Options>
    </Combobox>
  )
}
