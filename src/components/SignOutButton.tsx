'use client'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

export default function SignOutButton() {
  return (
    <button
      className='p-4 shadow-sm rounded flex gap-2'
      onClick={() => signOut()}>
      <Image src='/logo/google.png' width={25} height={25} alt='google_logo' />
      Continue with Google Account
    </button>
  )
}
