import Image from 'next/image';
import BackButton from '../../components/BackButton';
import ReportForm from './(components)/ReportForm';
import NavbarUser from '../(components)/NavbarUser';
import { getEnumProblem } from '../api-caller/get-enum-Problem';
import { IEnum } from '../api-caller/interfaces/interfaces';

export default async function ReportPage() {
  const problem: IEnum[] = (await getEnumProblem()) || [];
  console.log('🚀 ~ file: page.tsx:10 ~ ReportPage ~ problem:', problem);

  return (
    <div className='flex flex-col gap-4'>
      <NavbarUser />
      <div
        className='inset-x-0 rounded-t-5xl flex flex-col justify-start items-center gap-6  '
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}
      >
        <div className='flex flex-col'>
          <div className='text-label font-bold  flex justify-center items-center gap-1 h-20 w-screen border-b-2 border-stroke border-opacity-20 relative'>
            <BackButton pageRoute='/driver' />
            <p className='text-xl  text-center text-secondary font-semibold'>
              รายงาน
            </p>
          </div>
          <ReportForm enumProblems={problem} />
        </div>
      </div>
    </div>
  );
}
