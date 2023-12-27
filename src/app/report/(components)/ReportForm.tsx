'use client';

import Input from '@/components/Input';
import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UploadButton from '@/components/UploadButton';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { ICreateReport } from '@/app/api-caller/interfaces/interfaces';
import { createReport } from '@/app/api-caller/create-report';

export default function ReportForm() {
  const { data: userData } = useSession();
  const router = useRouter();

  const reportSchema = z.object({
    problemType: z
      .string()
      .min(5, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
    description: z
      .string()
      .min(5, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' })
  });

  type ReportData = z.infer<typeof reportSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ReportData>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      problemType: '',
      description: ''
    }
  });

  const submitForm = async (data: ReportData) => {
    const feedbackData: ICreateReport = {
      problemType: data.problemType,
      description: data.description,
      userEmail: userData?.user?.email || '',
      driverEmail: 'driver@kmitl.ac.th'
    };

    await createReport(feedbackData).then(() => {
      router.push('history');
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className='flex flex-col items-center gap-4 mt-6'
    >
      <div className='text-label flex-col flex gap-1 w-80'>
        <p>เลือกปัญหาที่พบเจอ *</p>
        <Input
          placeholder='Select Problem'
          register={register('problemType')}
        />
        {errors.problemType && (
          <p className='text-red-500'>{errors.problemType.message}</p>
        )}
      </div>
      <div className='text-label flex-col flex gap-1 w-80'>
        <p>รายละเอียดเพิ่มเติม *</p>
        <textarea
          className='border rounded border-stroke px-4 py-2 text-secondary h-[240px]'
          {...register('description')}
        />
        {errors.description && (
          <p className='text-red-500'>{errors.description.message}</p>
        )}
      </div>
      <div className='text-label flex-col flex gap-1 w-80'>
        <p>แนบรูปภาพเพิ่มเติม*</p>
        <div className='flex justify-center items-center h-[166px] border-dotted border-2 rounded'>
          <UploadButton />
        </div>
      </div>
      <div className='text-label flex-col flex gap-1 w-80'>
        <Button type='submit' className='text-center'>
          บันทึกรายงาน
        </Button>
      </div>
    </form>
  );
}
