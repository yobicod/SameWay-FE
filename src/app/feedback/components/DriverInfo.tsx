'use client';
import Image from 'next/image';
import ReactStars from 'react-stars';

export default function DriverInfo() {
  return (
    <>
      <div
        className='flex gap-4 h-[108px] w-80 border rounded-xl mt-4 py-4
      '
      >
        <div className='flex justify-center items-center w-1/3 ml-4'>
          <Image
            src='https://cdn.discordapp.com/attachments/836149187837034528/1168112215199600661/IMG_2031.jpg?ex=65912dc6&is=657eb8c6&hm=fdf3cd2e3f97226859c4bf52c6992a8a54a445dd459c712061bef584dac58be8&'
            alt='driver-profile'
            width={76}
            height={76}
            className='h-16 w-16 rounded-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-around w-2/3 '>
          <div>
            <p className='text-secondary w-56 font-medium'>สมศรี หมีอ้วน</p>
          </div>
          <div>
            <ReactStars
              count={5}
              size={24}
              value={4}
              color2='#ffd700'
              half={false}
              edit={false}
            />
          </div>
          <p className='  text-[#216A61] text-sm'>
            Mazda3 | <span className='font-light'>กท1234</span>
          </p>
        </div>
      </div>
    </>
  );
}
