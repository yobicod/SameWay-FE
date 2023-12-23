'use client'
import { createDriver } from '@/app/api-caller/create-driver'
import { IDriverInfo } from '@/app/api-caller/interfaces/interfaces'
import Button from '@/components/Button'
import Input from '@/components/Input'
import SelectDemo from '@/components/Select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

export default function DriverForm() {
  const { data: userData } = useSession()

  const driverSchema = z.object({
    driverFullName: z.string().refine((val) => val.split(' ')[1], {
      message: 'กรุณากรอกข้อมูลให้ถูกต้อง',
    }),
    // driverLastName: z.string().min(5, { message: 'กรุณากรอกข้อมูลให้ครบเด้' }),
    // dob: z.coerce.date(),
    sex: z.string(),
    plate: z.string().min(5, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
    phoneNumber: z
      .string()
      .length(10, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
    carType: z.string(),
  })

  type DriverData = z.infer<typeof driverSchema>
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<DriverData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      driverFullName: userData?.user?.name || '',
      // driverLastName: userData?.user?.name || '',
      // dob: new Date(),
      sex: '',
      plate: '',
      phoneNumber: '',
      carType: '',
    },
  })
  const submitForm = async (formData: DriverData) => {
    const driverData: IDriverInfo = {
      driverFirstName: formData.driverFullName.split(' ')[0],
      driverLastName: formData.driverFullName.split(' ')[1],
      carType: formData.carType,
      phoneNumber: formData.phoneNumber,
      plate: formData.plate,
      sex: formData.sex,
    }
    console.log(formData)
    // await createDriver(driverData).then((res) => {
    //   if (res) {
    //     alert('register success!')
    //     reset()
    //   }
    // })
  }
  return (
    <div className='flex gap-6 flex-col'>
      <div className='flex justify-center items-center'>
        <Image
          src={userData?.user?.image || ''}
          width={86}
          height={86}
          alt='user-photo'
          className='rounded-full'
        />
      </div>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit(submitForm)}>
        <div className='text-label font-bold flex-col flex gap-1'>
          <p>Full Name</p>
          <Input
            register={register('driverFullName')}
            placeholder='Full Name'
          />
          {errors.driverFullName && (
            <p className='text-red-500 font-light text-sm'>
              {errors.driverFullName.message}
            </p>
          )}
        </div>
        {/* <div className='text-label font-bold flex-col flex gap-1'>
          <p>Last Name</p>
          <Input
            register={register('driverLastName')}
            placeholder='Last Name'
          />
          {errors.driverLastName && (
            <p className='text-red-500 font-light text-sm'>
              {errors.driverLastName.message}
            </p>
          )}
        </div> */}
        {/* <div className='text-label font-bold flex-col flex gap-1'>
          <p>Date of Birth</p>
          <Input
            register={register('dob')}
            placeholder='Full Name'
            type='date'
          />
        </div> */}
        <div className='text-label font-bold flex-col flex gap-1'>
          <p>Car Type</p>
          <Input register={register('carType')} placeholder='Car Type' />
          {errors.carType && (
            <p className='text-red-500 font-light text-sm'>
              {errors.carType.message}
            </p>
          )}
        </div>
        <div className='text-label font-bold flex-col flex gap-1'>
          <p>Gender</p>
          <Controller
            name='sex'
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <SelectDemo
                  items={['Male', 'Female']}
                  onChange={onChange}
                  selectedItem={value}
                />
              )
            }}
          />
        </div>
        <div className='text-label font-bold flex-col flex gap-1'>
          <p>License plate</p>
          <Input register={register('plate')} placeholder='License plate' />
          {errors.plate && (
            <p className='text-red-500 font-light text-sm'>
              {errors.plate.message}
            </p>
          )}
        </div>
        <div className='text-label font-bold flex-col flex gap-1'>
          <p>Tel.</p>
          <Input
            type='number'
            register={register('phoneNumber')}
            placeholder='Phone Number'
          />
          {errors.phoneNumber && (
            <p className='text-red-500 font-light text-sm'>
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <Button type='submit'>SIGN UP</Button>
      </form>

      <div>
        <p className='font-medium'>
          Already have any account?{' '}
          <Link href='' className='text-secondary font-bold'>
            SIGN IN
          </Link>
        </p>
      </div>
    </div>
  )
}
