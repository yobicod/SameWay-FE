import Button from "@/components/Button"
import Icon from "@/components/Icon"
import Input from "@/components/Input"
import Image from "next/image"
import React from "react"

export default function Home() {
  return (
    <div className='font-lexendExa text-secondary'>
      <div className=' font-light text-xl min-h-[294px] py-8 rounded-t-[50px] flex gap-6 flex-col justify-start items-center bg-[#216A5824] pt-12'>
        <div className='w-4/5'>
          <p>Hi Pop </p>
          <p>
            Welcometo <span className=' font-medium'>SameWay!</span>
          </p>
        </div>
        <div className='w-4/5 z-10'>
          <Input
            inputClassName='rounded-2xl border-white min-h-[52px]'
            placeholder='PJCJ+RW8, Suan Luang, Bangkok'
            startIcon={
              <Icon
                name='location_on'
                className='material-symbols-outlined text-label py-3 md-30 pr-3'
              />
            }
          />
        </div>
        <Image
                src='/image/lineHome.svg'
                width={108.734}
                height={130.374}
                alt='app-logo'
                className="absolute top-[100px] right-[23px]"
              />
      </div>
      <div
        className=' font-bold text-xl mt-[-32px] py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center bg-white'
        style={{ boxShadow: "0px -4px 4px 0px rgba(164, 159, 159, 0.25)" }}
      >
        <div className='flex justify-center items-center w-full gap-8'>
          <div className=''>
            <Button className='bg-white py-0 text-secondary border border-secondary rounded-[30px] h-[168px] w-[156px] flex flex-col justify-start'>
              <Image
                src='/image/passenger.svg'
                width={125}
                height={125}
                alt='app-logo'
              />
              <p className='mt-[-20px]'>Passenger</p>
            </Button>
            <Image
              src='/image/linePassenger.png'
              width={156}
              height={36}
              alt='app-logo'
              className=' absolute top-[510px]'
            />
          </div>
          <div>
            <Button className='bg-white text-secondary border border-secondary rounded-[30px] h-[168px] w-[156px] flex flex-col justify-start'>
              <Image
                src='/image/driver.png'
                width={125}
                height={125}
                alt='app-logo'
              />
              <p className='mt-[-25px]'>Driver</p>
            </Button>
            <Image
              src='/image/lineDriver.png'
              width={156}
              height={36}
              alt='app-logo'
              className=' absolute top-[509px]'
            />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center gap-8 items-center'>
          <div>
            <Button className='bg-white text-secondary border border-secondary rounded-[30px] w-[347px] h-[98px] flex justify-between'>
              <p className='mt-[40px] '>History</p>
              <Image
                src='/image/clock.png'
                width={111}
                height={111}
                alt='app-logo'
                className='z-10'
              />
            </Button>
            <div className='flex absolute top-[572px]'>
              <Image
                src='/image/lineHistory1.png'
                width={174}
                height={63}
                alt='app-logo'
                className=''
              />
              <Image
                src='/image/lineHistory2.png'
                width={174}
                height={63}
                alt='app-logo'
                className=''
              />
            </div>
          </div>
          <div className='bg-[#83BA90] text-secondary rounded-[30px] w-[347px] h-[177px] flex justify-end items-end'>
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
  )
}
