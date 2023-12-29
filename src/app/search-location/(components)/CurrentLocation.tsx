'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Icon from '@/components/Icon';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CurrentLocation() {
  const router = useRouter();
  const searchSchema = z.object({
    locationStart: z.string().min(1, { message: 'Enter Your location' }),
    locationEnd: z.string().min(1, { message: 'Enter Your destination' }),
    startLat: z.number(),
    startLng: z.number(),
    endLat: z.number(),
    endLng: z.number(),
    notes: z.string(),
  });

  type searchData = z.infer<typeof searchSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<searchData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      locationStart: '',
      locationEnd: '',
      notes: '',
    },
  });

  const submitForm = async (data: searchData) => {
    console.log(data);
  };

  const handleFindDriver = () => {
    router.push('loading');
  };

  return (
    <div className='flex gap-6 flex-col w-80'>
      <form
        className='flex flex-col gap-5 w-[354px]'
        onSubmit={handleSubmit(submitForm)}
      >
        <p className='text-3xl text-secondary font-light'>
          วันนี้คุณปุยปุยอยาก <span className='font-medium'>ไปที่ไหน ?</span>
        </p>
        <div className='relative h-[162px] rounded-[25px] flex gap-3 flex-col justify-center items-center bg-fieldGray pl-10 '>
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
          <div>
            <Input
              startIcon={
                <Icon
                  name='location_on'
                  className='material-symbols-outlined text-fieldOrange md-30'
                />
              }
              register={register('locationStart')}
              placeholder='เลือกสถานที่ต้นทาง'
              inputClassName=' rounded-4xl border-white w-[294px] h-[58px] pl-12'
            />
            {errors.locationStart && (
              <p className='text-red-500 font-light text-sm'>
                {errors.locationStart.message}
              </p>
            )}
          </div>
          <div>
            <Input
              startIcon={
                <Icon
                  name='location_on'
                  className='material-symbols-outlined md-24 text-secondary md-30'
                />
              }
              inputClassName=' rounded-4xl pl-12 border-white w-[294px] h-[58px]'
              register={register('locationEnd')}
              placeholder='เลือกสถานที่ปลายทาง'
            />
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
            placeholder='ข้อความเพิ่มเติมถึงคนขับ'
          />
        </div>
        <Button
          type='submit'
          className='flex items-center justify-center'
          onClick={handleFindDriver}
        >
          ค้นหาคนขับ
        </Button>
      </form>
    </div>
  );
}
