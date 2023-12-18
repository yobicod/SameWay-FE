import * as RadixSwitch from '@radix-ui/react-switch'

export default function Switch() {
  return (
    <RadixSwitch.Root
      className='w-[53px] h-[24px] bg-white rounded-full relative border border-[#B5B7B9] focus:shadow-black data-[state=checked]:bg-[#F0F0F0] outline-none cursor-default'
      id='airplane-mode'>
      <RadixSwitch.Thumb className='block w-[20px] h-[20px] bg-secondary rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[28px]' />
    </RadixSwitch.Root>
  )
}
