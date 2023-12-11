import Image from 'next/image'

export default function loading() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Image
        src='/logo/logo.svg'
        width={0}
        height={0}
        alt='app_logo'
        className='w-96 h-24'
      />
    </div>
  )
}
