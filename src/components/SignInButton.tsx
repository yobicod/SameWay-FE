'use client'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function SignInButton() {
  const { data: session } = useSession()
  if (session) {
    return redirect('/home')
  } else
    return (
      <button
        className='p-4 shadow-sm rounded flex gap-2'
        onClick={() => signIn('google')}>
        <Image
          src='/logo/google.png'
          width={25}
          height={25}
          alt='google_logo'
        />
        Continue with Google Account
      </button>
    )
}
