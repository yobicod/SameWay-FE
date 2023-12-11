import Image from 'next/image'
import React from 'react'

export default function DriverPage() {
  return (
    <div className='flex flex-col font-jura py-8'>
      <div className='flex items-center gap-[14px] px-9'>
        <Image src='/logo/logo.svg' width={70} height={37} alt='app-logo' />
        <div className='border border-secondary w-full'></div>
      </div>
      <p className='text-3xl'>SIGN UP</p>
    </div>
  )
}
