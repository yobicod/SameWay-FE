'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function NavbarUser() {
  const { data: userData } = useSession();
  console.log('🚀 ~ file: NavbarUser.tsx:7 ~ NavbarUser ~ user:', userData);

  return (
    <div className='flex justify-center items-center w-full h-20 bg-white gap-x-5 px-7'>
      <Image
        src='/imgFoundDriver/logo_foundDriver.svg'
        width={0}
        height={0}
        alt='app-logo'
        className='w-[72px]'
      />
      <div className='border border-secondary w-full' />
      <Image
        src={userData?.user?.image || 'imgFoundDriver/user_profile_navbar.svg'}
        width={0}
        height={0}
        alt='app-logo'
        className='w-12 rounded-full'
      />
    </div>
  );
}
