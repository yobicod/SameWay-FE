import React, { useState } from 'react'
import * as Select from '@radix-ui/react-select'
import Icon from './Icon'

interface IProps {
  items: string[]
  placeholder?: string
  selectedItem: string
  onChange: (value: string) => void
}
export default function SelectDemo({
  items,
  placeholder,
  selectedItem,
  onChange,
}: IProps) {
  return (
    <Select.Root value={selectedItem} onValueChange={onChange}>
      <Select.Trigger className='border px-4 py-2 flex justify-between items-center rounded'>
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position='popper'
          align='center'
          className='border SelectContent p-2 rounded bg-white'>
          <Select.ScrollUpButton />
          <Select.Viewport className='flex flex-col gap-1'>
            {/* {items.map((item) =>)} */}
            <Select.Item
              value='test1'
              className='hover:bg-secondary hover:text-white px-2 py-1 rounded cursor-pointer'>
              <Select.ItemText>test1</Select.ItemText>
            </Select.Item>

            <Select.Item
              value='test2'
              className='hover:bg-secondary hover:text-white px-2 py-1 rounded cursor-pointer'>
              <Select.ItemText>test2</Select.ItemText>
            </Select.Item>

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          {/* <Select.Arrow /> */}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
