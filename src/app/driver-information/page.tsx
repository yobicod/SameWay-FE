import Image from 'next/image';
import React from 'react';
import DriverInfor from './(component)/DriverInformation';

export default function DriverInformationPage() {
  return (
    <div className='flex flex-col justify-between h-screen w-full'>
      <div className='absolute w-full h-full -z-10'>
        <Image
          src='/imgFoundDriver/bg_foundDriver.svg'
          width={0}
          height={0}
          alt='app-logo'
          className='w-full object-cover h-full'
        />
      </div>
      <DriverInfor />
    </div>
  );
}
