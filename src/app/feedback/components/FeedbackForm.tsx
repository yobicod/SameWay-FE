'use client';
import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/Button';
import ReactStars from 'react-stars';
import { createFeedback } from '@/app/api-caller/create-feedback';
import { ICreateFeedback } from '@/app/api-caller/interfaces/interfaces';
import { useRouter } from 'next/navigation';

export default function FeedbackForm() {
  const { data: userData } = useSession();
  const router = useRouter();
  const reportSchema = z.object({
    ratingScore: z.number().max(5),
    description: z.string()
  });

  type ReportData = z.infer<typeof reportSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm<ReportData>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      description: ''
    }
  });

  const submitForm = async (data: ReportData) => {
    const feedbackData: ICreateFeedback = {
      driverEmail: 'driver@kmitl.ac.th',
      userEmail: userData?.user?.email || '',
      ratingScore: data.ratingScore,
      description: data.description
    };
    await createFeedback(feedbackData).then(() => {
      router.push('history');
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className='flex flex-col items-center gap-4 mt-6'
    >
      <div className='text-xl flex flex-col justify-center items-center  w-80  '>
        <p
          className='text-center text-secondary 
        '
        >
          ความคิดเห็นของคุณจะถูกนำไป
        </p>
        <p
          className='text-center text-secondary 
        '
        >
          พัฒนาการบริการของเรา
        </p>

        <Controller
          name='ratingScore'
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <ReactStars
                count={5}
                onChange={onChange}
                size={24}
                value={value}
                color2='#ffd700'
                half={false}
              />
            );
          }}
        />
      </div>

      <div className='text-label  flex-col flex gap-1 w-80'>
        <p>รายละเอียดเพิ่มเติม</p>
        <textarea
<<<<<<< HEAD
          className="border rounded border-stroke px-4 py-2 text-secondary h-[124px]"
          {...register("description")}
        />
=======
          className='border rounded border-stroke px-4 py-2 text-secondary h-[124px]'
          {...register('description')}
        ></textarea>
>>>>>>> develop
        {errors.description && (
          <p className='text-red-500'>{errors.description.message}</p>
        )}
      </div>

      <div className='text-label  flex-col flex gap-1 w-80 mt-4'>
        <Button type='submit' className='text-center'>
          บันทึกข้อเสนอแนะ
        </Button>
      </div>
    </form>
  );
}
