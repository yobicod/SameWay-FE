'use client'
import Icon from '@/components/Icon'
import Switch from '@/components/Switch'
import Image from 'next/image'

export default function NavbarDriver() {
  return (
    <div className='h-24 flex justify-between items-center px-7 fixed top-0 w-full bg-white'>
      <div>
        <Icon name='menu' className='text-secondary' />
      </div>
      <Image
        src='/logo/app-logo.png'
        width={70}
        height={37}
        alt='navbar-app-logo'
      />
      <Switch />
    </div>
  )
}
