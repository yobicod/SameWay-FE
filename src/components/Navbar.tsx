'use client'
import Image from 'next/image'
import SwitchDemo from '@/components/Switch'

export default function Navber() {
  return (
      <div className="w-full h-[91px] fixed bg-white flex justify-between items-center pl-5 pr-5">
        <div className="flex flex-col gap-1.5">
          <div className="w-[24px] h-[2px] bg-secondary"></div>
          <div className="w-[24px] h-[2px] bg-secondary"></div>
          <div className="w-[24px] h-[2px] bg-secondary"></div>
        </div>
        <div className="">
          <Image src="/logo/logo.svg" width={70} height={37} alt="app-logo" />
        </div>

        <div>
          <SwitchDemo />
        </div>
      </div>
  )
}
