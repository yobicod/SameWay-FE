import Image from 'next/image'
import React from 'react'
import DriverForm from './(components)/DriverForm'

export default function RegisterDriverPage() {
  return (
    <div className='flex flex-col gap-4 font-jura py-8'>
      <div className='flex items-center gap-[14px] px-9'>
        <Image src='/logo/logo.svg' width={70} height={37} alt='app-logo' />
        <div className='border border-secondary w-full'></div>
      </div>
      <div
        className='py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center'
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}>
        <p className='text-3xl font-bold text-secondary'>SIGN UP</p>
        <DriverForm />
      </div>
    </div>
  )
}
