'use client';
import { checkDriver } from '@/app/api-caller/check-driver';
import { IUserLocation } from '@/app/api-caller/interfaces/interfaces';
import Icon from '@/components/Icon';
import Input from '@/components/Input';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IProps {
  location: IUserLocation;
}

export default function Home({ location }: IProps) {
  const { data: userData } = useSession();
  const userFirstName: string = userData?.user?.name?.split(' ')[0] || '';
  const router = useRouter();
  const [driverStatus, setDriverStatus] = useState<boolean | undefined>(false);

  let formatLocationString: string = `สวัสดี ประเทศไทย`;
  if (location.city) {
    formatLocationString += `, ${location.city}`;
  }

  if (location.zip) {
    formatLocationString += `, ${location.zip}`;
  }
  useEffect(() => {
    const fetchCheckDriver = async () => {
      if (userData?.user?.email) {
        const isDriverInSystem = await checkDriver(
          userData?.user?.email?.split('@')[0]
        );
        setDriverStatus(isDriverInSystem);
      }
    };
    fetchCheckDriver();
  }, [userData]);

  const handleClickDriverButton = () => {
    if (driverStatus) {
      router.push('driver-home');
    } else {
      router.push('register-driver');
    }
  };

  const handleClickPassengerButton = () => {
    router.push('select-location');
  };

  const handleClickHistoryButton = () => {
    router.push('history');
  };

  return (
    <div className='relative text-secondary'>
      {/* <div className=' font-light text-xl min-h-[294px] py-8 rounded-t-5xl flex gap-6 flex-col items-center bg-[#216A5824] pt-12'> */}
      <div className=' font-light text-xl rounded-t-5xl flex gap-6 flex-col items-center bg-[#216A5824] pt-12'>
        <div className='w-4/5'>
          <p>สวัสดี คุณ {userFirstName} :) </p>
          <p>
            ยินดีต้อนรับเข้าสู่ <span className=' font-medium'>SameWay!</span>
          </p>
        </div>
        <div className='w-4/5 '>
          <Image
            src='/image/lineHome.svg'
            width={108.734}
            height={130.374}
            alt='app-logo'
            className='absolute top-[20px] right-[23px]'
          />
          <Input
            inputClassName='rounded-2xl border-white py-6 px-12'
            placeholder={location ? `${formatLocationString}` : ''}
            startIcon={
              <Icon
                name='location_on'
                className='material-symbols-outlined text-label md-30'
              />
            }
          />
        </div>
        <div
        className='w-full font-semibold text-xl py-8 rounded-t-5xl flex gap-6 flex-col justify-center items-center bg-white'
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}
      >
        <div className='flex justify-center items-center  gap-8'>
          <div
            className='relative text-secondary border border-secondary rounded-4xl h-[168px] w-[156px] flex flex-col justify-start items-center cursor-pointer'
            onClick={handleClickPassengerButton}
          >
            <Image
              src='/image/passenger.svg'
              width={125}
              height={125}
              alt='app-logo'
            />
            <p className='mt-[-14px]'>ผู้โดยสาร</p>
            <Image
              src='/image/linePassenger.png'
              width={156}
              height={36}
              alt='app-logo'
              className='absolute top-[131px]'
            />
          </div>

          <div
            className='relative text-secondary border border-secondary rounded-4xl h-[168px] w-[156px] flex flex-col items-center cursor-pointer'
            onClick={handleClickDriverButton}
          >
            <Image
              src='/image/driver.png'
              width={125}
              height={125}
              alt='app-logo'
            />
            <p className='mt-[-15px]'>คนขับ</p>
            <Image
              src='/image/lineDriver.png'
              width={156}
              height={36}
              alt='app-logo'
              className='absolute top-[130px]'
            />
          </div>
        </div>
        <div>
          <div
            className='bg-white text-secondary border border-secondary rounded-4xl w-[347px] h-[98px] flex justify-between cursor-pointer'
            onClick={handleClickHistoryButton}
          >
            <p className='mt-[55px] ml-6'>ประวัติการเดินทาง</p>
            <Image
              src='/image/clock.png'
              width={111}
              height={111}
              alt='app-logo'
              className='z-10 mr-2'
            />
            <div className='flex absolute'>
              <Image
                src='/image/lineHistory1.png'
                width={174}
                height={63}
                alt='app-logo'
              />
              <Image
                src='/image/lineHistory2.png'
                width={174}
                height={63}
                alt='app-logo'
              />
            </div>
          </div>
        </div>
        <div className='bg-[#83BA90] text-secondary rounded-4xl w-[347px] h-[177px] flex justify-end items-end cursor-pointer'>
          <Image
            src='/image/lineman.png'
            width={346}
            height={145}
            alt='app-logo'
          />
        </div>
      </div>
      </div>
     
    </div>
  );
}
