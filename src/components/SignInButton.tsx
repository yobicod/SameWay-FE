'use client';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Button from './Button';

export default function SignInButton() {
  const { data: session } = useSession();
  if (session) {
    return redirect('/home');
  } else
    return (
      <Button
        className='bg-white border border-secondary text-secondary'
        onClick={() => {
          signIn('google'); // Check if geolocation is supported by the browser
        }}
        startIcon={
          <Image
            src='/logo/google.png'
            width={25}
            height={25}
            alt='google_logo'
          />
        }
      >
        เข้าสู่ระบบผ่าน Google
      </Button>
    );
}
