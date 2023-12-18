import React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch'

export default function Switch() {
  return (
    <RadixSwitch.Root
      className='w-[53px] h-[24px] bg-blackA6 rounded-full relative  focus:shadow-black data-[state=checked]:bg-bgSwitchGray outline-none cursor-default border border-borderSwitch '
      id='airplane-mode'>
      <RadixSwitch.Thumb className='block w-[20px] h-[20px] bg-label rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[29px] data-[state=checked]:bg-[#216A61]' />
    </RadixSwitch.Root>
  )
}
