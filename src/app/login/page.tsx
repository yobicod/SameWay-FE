import SignInButton from '@/components/SignInButton'
import Image from 'next/image'

export default function page() {
  return (
    <div className='flex h-screen justify-center gap-40 items-center flex-col'>
      <Image
        src='/logo/logo.svg'
        width={0}
        height={0}
        alt='login_logo'
        className='w-28 h-14'
      />
      <div className='text-2xl  text-center font-lexendExa text-secondary'>
        <p className='font-extralight'>Welcome</p>
        <p className='font-normal'>
          <span className='font-extralight'>to</span> SameWay!
        </p>
      </div>
      <div>
        <SignInButton />
      </div>
    </div>
  )
}
