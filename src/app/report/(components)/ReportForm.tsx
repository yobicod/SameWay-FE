'use client';

import Input from '@/components/Input';
import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UploadButton from '@/components/UploadButton';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { ICreateReport, IEnum } from '@/app/api-caller/interfaces/interfaces';
import { createReport } from '@/app/api-caller/create-report';
import { getEnumProblem } from '@/app/api-caller/get-enum-Problem';
import SelectedDropdown from '@/components/SelectedDropdown';

interface IProps {
  enumProblems: IEnum[];
}
export default function ReportForm({ enumProblems }: IProps) {
  const { data: userData } = useSession();
  const router = useRouter();

  const reportSchema = z.object({
    problemType: z.string().min(5, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
    description: z.string().min(5, { message: 'กรุณากรอกข้อมูลให้ถูกต้อง' }),
  });

  type ReportData = z.infer<typeof reportSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ReportData>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      problemType: '',
      description: '',
    },
  });

  const submitForm = async (data: ReportData) => {
    const feedbackData: ICreateReport = {
      problemType: data.problemType,
      description: data.description,
      userEmail: userData?.user?.email || '',
      driverEmail: 'driver@kmitl.ac.th',
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
        <Controller
          name='problemType'
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <SelectedDropdown
                items={enumProblems.map((problem) => problem.value)}
                onChange={onChange}
                selectedItem={value}
                placeholder='--เลือกปัญหา--'
              />
            );
          }}
        />
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
