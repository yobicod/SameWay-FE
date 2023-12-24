import Icon from '@/components/Icon';
import Input from '@/components/Input';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative text-secondary'>
      <div className=' font-light text-xl min-h-[294px] py-8 rounded-t-[50px] flex gap-6 flex-col items-center bg-[#216A5824] pt-12'>
        <div className='w-4/5'>
          <p>สวัสดี คุณป๊อบ:) </p>
          <p>
          ยินดีต้อนรับเข้าสู่ <span className=' font-medium'>SameWay!</span>
          </p>
        </div>
        <div className='w-4/5'>
          <Image
            src='/image/lineHome.svg'
            width={108.734}
            height={130.374}
            alt='app-logo'
            className='absolute top-[20px] right-[23px]'
          />
          <Input
            inputClassName='rounded-2xl border-white py-6'
            placeholder='หมู่บ้านบิบิ, สวนหลวง, พัฒนาการ 10250'
            startIcon={
              <Icon
                name='location_on'
                className='material-symbols-outlined text-label md-30'
              />
            }
          />
        </div>
      </div>
      <div
        className='font-semibold text-xl mt-[-32px] py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center bg-white'
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}
      >
        <div className='flex justify-center items-center  gap-8'>
          <div className='relative text-secondary border border-secondary rounded-4xl h-[168px] w-[156px] flex flex-col justify-start items-center cursor-pointer'>
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

          <div className='relative text-secondary border border-secondary rounded-4xl h-[168px] w-[156px] flex flex-col items-center cursor-pointer'>
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
          <div className='bg-white text-secondary border border-secondary rounded-4xl w-[347px] h-[98px] flex justify-between cursor-pointer'>
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
  );
}
