'use client';
import Image from 'next/image';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Link from 'next/link';

export default function FoundDriver() {
  return (
    <div className='w-full bg-white rounded-t-[3rem]'>
      <div className='flex justify-center items-center'>
        <div className='flex p-6 flex-col space-y-4'>
          <div className='flex pt-3 justify-between'>
            <div className='flex space-x-3'>
              <Image
                src='/imgFoundDriver/driver_img.svg'
                width={0}
                height={0}
                alt='app-logo'
                className='w-[4.5rem]'
              />
              <div className='flex flex-col text-secondary'>
                <p className='text-secondary text-lg font-medium'>
                  สมศรี หมีอ้วน
                </p>
                <div>⭐️⭐️⭐️⭐️⭐️</div>
                <div className=' text-secondary text-sm font-light'>
                  Mazda3 | กท1234
                </div>
              </div>
            </div>
            <div className='p-1.5 h-8 space-x-1 flex justify-center items-center border-2 text-[#ced0d2] rounded-full cursor-pointer'>
              <Icon name='report' className='material-symbols-outlined' />
              <p className='text-sm text-border-switch'>รายงาน</p>
            </div>
          </div>
          <div className='flex py-3 px-4 rounded-2xl bg-fieldGray space-x-4 justify-center items-center'>
            <div className='flex items-center border rounded-full border-border-switch h-8 px-2'>
              <p className='font-light text-secondary text-xl'>5กม.</p>
            </div>
            <div className='flex space-x-2'>
              <Image
                src='/imgFoundDriver/line_destination.svg'
                width={0}
                height={0}
                alt='app-logo'
                className='w-[0.4rem]'
              />
              <div className='text-[#848181] text-base'>
                <p>แอพอร์ตเรลลิ้ง</p>
                <p>ยูเนี่ยนมอลล์</p>
              </div>
            </div>
            <div className='border-l-2 border-[#B5B7B9] h-12'/>
            <div className='text-secondary'>
              <p className='text-xl'>120</p>
              <p>บาท</p>
            </div>
          </div>
          <Link
            href=''
            className='flex w-80 justify-center bg-transparent text-secondary border-2 border-secondary cursor-pointer'
          >
            <p>รายละเอียดคนขับ</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
