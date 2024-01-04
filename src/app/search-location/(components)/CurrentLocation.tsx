'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LongdoDemo from '@/longdo/LongdoDemo'
import { useState } from 'react'

type Map = 'start' | 'end' | undefined

export default function CurrentLocation() {
  const router = useRouter()
  const [showMap, setShowMap] = useState<Map>()
  const searchDriverSchema = z.object({
    locationStart: z.object({
      lon: z.number(),
      lat: z.number(),
    }),
    locationEnd: z.object({
      lon: z.number(),
      lat: z.number(),
    }),
    notes: z.string(),
  })

  type searchDriverData = z.infer<typeof searchDriverSchema>
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<searchDriverData>({
    resolver: zodResolver(searchDriverSchema),
    defaultValues: {
      locationStart: undefined,
      locationEnd: undefined,
      notes: '',
    },
  })

  const submitForm = async (data: searchDriverData) => {
    console.log('daw', data)
  }

  const handleFindDriver = (data: searchDriverData) => {
    router.push('loading')
  }
  if (showMap === 'start') {
    return (
      <div className='h-screen relative'>
        <Controller
          control={control}
          name='locationStart'
          render={({ field: { onChange, value } }) => (
            <LongdoDemo height='h-full' onChange={onChange} value={value} />
          )}
        />
        <div className='absolute bottom-0'>
          <Input placeholder='ค้นหาสถานที่ต้นทาง' />
          <Button onClick={() => setShowMap(undefined)}>ยืนยัน</Button>
        </div>
      </div>
    )
  }
  if (showMap === 'end') {
    return (
      <div className='h-screen relative'>
        <Controller
          control={control}
          name='locationEnd'
          render={({ field: { onChange, value } }) => (
            <LongdoDemo height='h-full' onChange={onChange} value={value} />
          )}
        />
        <div className='absolute bottom-0'>
          <Input placeholder='ค้นหาสถานที่ปลายทาง' />
          <Button onClick={() => setShowMap(undefined)}>ยืนยัน</Button>
        </div>
      </div>
    )
  }
  const watchStartLocation = watch('locationStart')
  const watchEndLocation = watch('locationEnd')

  console.log(watchStartLocation, watchEndLocation)
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='flex items-center justify-center h-full'>
          <LongdoDemo value={[watchStartLocation, watchEndLocation]} disabled />
        </div>
        <div
          className='py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center bg-white pr-8 h-90'
          style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}>
          <div className='flex gap-6 flex-col w-80'>
            <div className='flex flex-col gap-5 w-[354px]'>
              <p className='text-3xl text-secondary font-light'>
                วันนี้คุณปุยปุยอยาก{' '}
                <span className='font-medium'>ไปที่ไหน ?</span>
              </p>
              <div className='relative h-[162px] rounded-[25px] flex gap-3 flex-col justify-center items-center bg-fieldGray pl-10 px-4'>
                <div className='absolute left-[23px]'>
                  <Image
                    src='/image/line.svg'
                    width={26}
                    height={87}
                    alt='app-logo'
                  />
                </div>
                <div className='absolute top-[60px] left-[260px] z-10'>
                  <Button
                    startIcon={
                      <Icon
                        name='sync_alt'
                        className='material-symbols-outlined rotate-90'
                      />
                    }
                    className='w-[44px] h-[44px] rounded-full flex justify-center bg-fieldOrange '
                  />
                </div>
                <div className='w-full'>
                  <div
                    onClick={() => setShowMap('start')}
                    className='flex gap-2 bg-white rounded-4xl h-[58px] items-center p-2 text-stroke'>
                    <Icon
                      name='location_on'
                      className='material-symbols-outlined text-fieldOrange md-30'
                    />
                    <p>เลือกสถานที่ต้นทาง</p>
                  </div>

                  {errors.locationStart && (
                    <p className='text-red-500 font-light text-sm'>
                      {errors.locationStart.message}
                    </p>
                  )}
                </div>
                <div className='w-full'>
                  <div
                    onClick={() => setShowMap('end')}
                    className='flex gap-2 bg-white rounded-4xl h-[58px] items-center p-2 text-stroke'>
                    <Icon
                      name='location_on'
                      className='material-symbols-outlined text-secondary md-30'
                    />
                    <p>เลือกสถานที่ปลายทาง</p>
                  </div>
                  {errors.locationEnd && (
                    <p className='text-red-500 font-light text-sm'>
                      {errors.locationEnd.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='text-label  flex-col flex gap-1'>
                <p>รายละเอียดเพิ่มเติม</p>
                <Input
                  inputClassName='h-[56px] w-full border rounded px-4 py-2 text-secondary border-borderGray'
                  placeholder='บอกอะไรก้บอกอิอิ'
                />
              </div>
              <Button type='submit'>ค้นหาคนขับ</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
