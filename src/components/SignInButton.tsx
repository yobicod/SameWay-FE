'use client'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Button from './Button'

export default function SignInButton() {
  const { data: session } = useSession()
  if (session) {
    return redirect('/home')
  } else
    return (
      <Button
        className='bg-white border border-secondary text-secondary font-jura'
        onClick={() => signIn('google')}
        startIcon={
          <Image
            src='/logo/google.png'
            width={25}
            height={25}
            alt='google_logo'
          />
        }>
        Sign in with Google
      </Button>
    )
}
