'use client';
import Button from '@/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ReactStars from 'react-stars';

export default function SelectDriver() {
  const router = useRouter();
  return (
    <div
      className='w-full absolute top-16 bg-white rounded-t-[3rem] h-full'
      style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}
    >
      <div className='flex flex-col p-8 space-y-4'>
        <div className='flex space-x-3'>
          <Image
            src='/imgDriverInformation/arrow-back.svg'
            width={0}
            height={0}
            alt='app-logo'
            className='w-7'
          />
          <p className='text-secondary text-xl'>เลือกคนขับ</p>
        </div>
        <div className='border w-full min-h-[117px] rounded-2.5xl flex'>
          <div className='flex justify-center items-center w-1/3 ml-4'>
            <Image
              src='/imgDriverInformation/img-driver.svg'
              alt='driver-profile'
              width={82}
              height={82}
              className='h-16 w-16 rounded-full object-cover'
            />
          </div>
          <div className='flex flex-col justify-center w-1/3'>
            <div className='items-center '>
              <p className='text-base text-secondary'>Somsri, jang</p>
              <div className='w-full text-xs text-primary '>
                <div className='flex gap-2 justify-items-center items-center'>
                  <div className='rounded-full border border-[#E07C58] w-1 h-1' />
                  <p className='break-words w-full'>Airport rail link</p>
                </div>

                <div className='w-0.5 min-h-[11px] bg-borderSwitch mt-[-3px]'></div>

                <div className='flex gap-2 justify-items-center items-center mt-[-3px]'>
                  <div className='rounded-full bg-secondary w-1 h-1' />
                  <p className='break-words w-full'>Union mall</p>
                </div>
              </div>
            </div>
            <div className=''>
              <ReactStars
                count={5}
                size={18}
                value={4}
                color2='#ffd700'
                half={false}
                edit={false}
              />
            </div>
          </div>

          <div className='flex items-end pb-5 justify-center w-1/3'>
            <Button
              className='w-20 h-7 text-white bg-secondary text-sm '
              onClick={() => {
                router.push('report');
              }}
            >
              เลือก
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
