import SignInButton from '@/components/SignInButton'
import Image from 'next/image'

export default function page() {
  return (
    <div className='flex relative h-screen justify-center items-center flex-col w-full'>
      <Image
        src='/logo/app-logo.png'
        width={119}
        height={62}
        alt='login_logo'
      />
      <div className='text-2xl mt-40 mb-32 text-center font-lexendExa text-secondary'>
        <p className='font-extralight'>Welcome</p>
        <p className='font-normal'>
          <span className='font-extralight'>to</span> SameWay!
        </p>
      </div>
      <div className='px-12 w-96'>
        <SignInButton />
      </div>
      <Image
        src='/background/login-left.svg'
        width={197}
        height={284}
        alt='login-login-left'
        className='absolute bottom-0 left-0 w-1/3'
      />
      <Image
        src='/background/login-right.svg'
        width={0}
        height={0}
        alt='login-login-right'
        className='absolute bottom-0 right-0 w-1/3'
      />
    </div>
  )
}
