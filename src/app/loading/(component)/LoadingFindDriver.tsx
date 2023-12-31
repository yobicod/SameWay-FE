'use client';
import Image from 'next/image';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function LoadingFindDriver() {
  const router = useRouter();

  const handleCancelFindDriver = () => {
    router.push('search-location');
  };
  // mock => fetch then catch
  setTimeout(() => {
    router.push('found-driver');
  }, 4000);

  return (
    <div className='h-screen w-full flex justify-center items-center '>
      <div className='absolute'>
        <Image
          src='/imgLoadingFindDriver/Group186.svg'
          width={100}
          height={100}
          alt='app-logo'
          className='w-full object-cover h-full'
        />
      </div>
      <div className='relative w-2/3 h-2/3'>
        <div className='flex justify-center items-center w-full h-full '>
          <span className='animate-ping absolute rounded-full h-[12rem] w-[12rem] border-2 border-[#A4BFB7] opacity-75'/>
          <span className='animate-ping absolute rounded-full h-[10rem] w-[10rem] bg-[#A4BFB7] opacity-75'/>
          <span className='animate-ping2 absolute rounded-full h-[8rem] w-[8rem] bg-[#A4BFB7] opacity-75'/>
          <span className='animate-ping1 absolute rounded-full h-[6rem] w-[6rem] bg-[#A4BFB7] opacity-75'/>
          {/* <Icon name='location_on'  className=""/> */}
          <Image
            src='/imgLoadingFindDriver/load_location_icon.svg'
            width={100}
            height={100}
            alt='app-logo'
          />
        </div>
      </div>
      <Button
        className='flex w-80 font-bold justify-center absolute bottom-10 bg-transparent text-[#216A61] border-2 border-[#216A61]'
        onClick={handleCancelFindDriver}
      >
        <p>ยกเลิก</p>
      </Button>
    </div>
  );
}
