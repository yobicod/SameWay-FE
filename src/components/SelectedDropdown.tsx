// import React from 'react';
import * as Select from '@radix-ui/react-select';

interface IProps {
  items: string[];
  placeholder?: string;
  selectedItem: string;
  onChange: (value: string) => void;
}
export default function SelectedDropdown({
  items,
  placeholder = 'กรุณาเลือก',
  selectedItem,
  onChange,
}: IProps) {
  return (
    <Select.Root value={selectedItem} onValueChange={onChange}>
      <Select.Trigger className='border px-4 py-2 flex justify-between items-center rounded text-secondary border-stroke'>
        <Select.Value placeholder={placeholder} />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position='popper'
          align='center'
          className='border selectContent p-2 rounded bg-white z-50'
        >
          <Select.ScrollUpButton />
          <Select.Viewport className='flex flex-col gap-1'>
            {items.map((item) => (
              <Select.Item
                key={`select-item-${item}`}
                value={item}
                className='hover:bg-secondary hover:text-white px-2 py-1 rounded cursor-pointer outline-none'
              >
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>
            ))}
            {/* <Select.Item
              value='test1'
              className='hover:bg-secondary hover:text-white px-2 py-1 rounded cursor-pointer'>
              <Select.ItemText>test1</Select.ItemText>
            </Select.Item>

            <Select.Item
              value='test2'
              className='hover:bg-secondary hover:text-white px-2 py-1 rounded cursor-pointer'>
              <Select.ItemText>test2</Select.ItemText>
            </Select.Item> */}

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          {/* <Select.Arrow /> */}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
