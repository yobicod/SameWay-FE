import FoundDriver from './(component)/FoundDriver';
import Navbar from './(component)/Navbar';
import Image from 'next/image';

export default async function FoundDriverPage() {
  return (
    <div className='flex flex-col justify-between h-screen w-full'>
      <Navbar />
      <div className='absolute w-full h-full -z-10'>
        <Image
          src='/imgFoundDriver/bg_foundDriver.svg'
          width={0}
          height={0}
          alt='app-logo'
          className='w-full object-cover h-full'
        />
      </div>
      <FoundDriver />
    </div>
  );
}
