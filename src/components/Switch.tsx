import * as RadixSwitch from '@radix-ui/react-switch'

export default function Switch() {
  return (
    <RadixSwitch.Root
      className='w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default'
      id='airplane-mode'>
      <RadixSwitch.Thumb className='block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]' />
    </RadixSwitch.Root>
  )
}
