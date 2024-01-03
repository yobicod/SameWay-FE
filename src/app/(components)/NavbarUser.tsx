import Image from 'next/image'

export default function NavbarUser() {
  return (
    <div className='flex items-center gap-[14px] px-9 bg-white'>
      <Image src='/logo/logo.svg' width={70} height={37} alt='app-logo' />
      <div className='border border-secondary w-full'/>
    </div>
  )
}
