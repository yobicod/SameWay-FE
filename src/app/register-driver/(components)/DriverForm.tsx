'use client';
import { createDriver } from '@/app/api-caller/create-driver';
import { ICreateDriverInfo } from '@/app/api-caller/interfaces/interfaces';
import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import SelectedDropdown from '@/components/SelectedDropdown';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

interface IProps {
  genderEnum: string[];
  carTypeEnum: string[];
}

export default function DriverForm({ genderEnum, carTypeEnum }: IProps) {
  const router = useRouter();
  const { data: userData } = useSession();

  const driverSchema = z.object({
    driverFirstName: z
      .string()
      .min(5, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
    dob: z.coerce.date(),
    driverLastName: z.string().min(5, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
    gender: z.string(),
    plate: z.string().min(5, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
    phoneNumber: z
      .string()
      .length(10, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
    carType: z.string(),
    model: z.string(),
  });

  type DriverData = z.infer<typeof driverSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<DriverData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      driverFirstName: '',
      dob: new Date(),
      driverLastName: '',
      gender: '',
      plate: '',
      phoneNumber: '',
      carType: '',
      model: '',
    },
  });
  const submitForm = async (formData: DriverData) => {
    const driverData: ICreateDriverInfo = {
      fullName: `${formData.driverFirstName} ${formData.driverLastName}`,
      carType: formData.carType,
      phoneNumber: formData.phoneNumber,
      plate: formData.plate,
      model: formData.model,
      dob: formData.dob,
      gender: formData.gender,
      userEmail: userData?.user?.email || '',
    };
    await createDriver(driverData).then((result) => {
      if (result) {
        router.push('driver-home');
      }
    });
  };
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
        <div className='text-label flex-col flex gap-1'>
          <p>ชื่อจริง</p>
          <Input
            register={register('driverFirstName')}
            placeholder='ชื่อจริง'
          />
          {errors.driverFirstName && (
            <p className='text-red-500 font-light text-sm'>
              {errors.driverFirstName.message}
            </p>
          )}
        </div>

        <div className='text-label flex-col flex gap-1'>
          <p>นามสกุล</p>
          <Input register={register('driverLastName')} placeholder='นามสกุล' />
          {errors.driverLastName && (
            <p className='text-red-500 font-light text-sm'>
              {errors.driverLastName.message}
            </p>
          )}
        </div>
        <div className=' flex-col flex gap-1'>
          <p className='text-label'>วัน/เดือน/ปี เกิด</p>
          <Controller
            name='dob'
            control={control}
            render={({ field: { value, onChange } }) => (
              <DatePicker selectedDate={value} onChange={onChange} />
            )}
          />
          {errors.driverLastName && (
            <p className='text-red-500 font-light text-sm'>
              {errors.driverLastName.message}
            </p>
          )}
        </div>

        <div className='text-label flex-col flex gap-1'>
          <p>เพศ</p>
          <Controller
            name='gender'
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <SelectedDropdown
                  items={genderEnum}
                  onChange={onChange}
                  selectedItem={value}
                  placeholder='--เลือกเพศ--'
                />
              );
            }}
          />
        </div>
        <div className='text-label flex-col flex gap-1'>
          <p>ประเภทรถ</p>
          <Controller
            name='carType'
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <SelectedDropdown
                  items={carTypeEnum}
                  onChange={onChange}
                  selectedItem={value}
                  placeholder='--เลือกประเภท--'
                />
              );
            }}
          />
        </div>
        <div className='text-label flex-col flex gap-1'>
          <p>รุ่นรถยนต์</p>
          <Input register={register('model')} placeholder='รุ่นรถยนต์' />
          {errors.model && (
            <p className='text-red-500 font-light text-sm'>
              {errors.model.message}
            </p>
          )}
        </div>
        <div className='text-label flex-col flex gap-1'>
          <p>ทะเบียนรถยนต์</p>
          <Input register={register('plate')} placeholder='ทะเบียนรถยนต์' />
          {errors.plate && (
            <p className='text-red-500 font-light text-sm'>
              {errors.plate.message}
            </p>
          )}
        </div>
        <div className='text-label flex-col flex gap-1'>
          <p>เบอร์โทรศัพท์</p>
          <Input
            type='number'
            register={register('phoneNumber')}
            placeholder='เบอร์โทรศัพท์'
            maxLength={10}
          />
          {errors.phoneNumber && (
            <p className='text-red-500 font-light text-sm'>
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <Button type='submit'>ลงทะเบียน</Button>
      </form>
    </div>
  );
}
