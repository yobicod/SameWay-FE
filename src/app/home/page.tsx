import UserInfo from './(components)/UserInfo'
import Link from 'next/link'
import Image from 'next/image'
import Home from './(components)/Home'

export default async function HomePage() {
  return (
    <div className='flex flex-col gap-4 font-jura py-8'>
      {/* <div className='flex items-center gap-[14px] px-9'>
        <Image src='/logo/logo.svg' width={70} height={37} alt='app-logo' />
        <div className='border border-secondary w-full' />
      </div>
      <Home /> */}
      <UserInfo />
    </div>
  )
}
