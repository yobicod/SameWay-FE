import BackButton from '../../components/BackButton';
import Image from 'next/image';
import History from './(components)/History';
import NavbarUser from '../(components)/NavbarUser';

export default function HistoryPage() {
  return (
    <div className='flex flex-col gap-4  py-8'>
      <NavbarUser />
      <div
        className='inset-x-0  rounded-t-[50px] flex flex-col gap-4 items-center'
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}
      >
        <div className='text-label flex justify-center items-center gap-1 h-20 w-screen border-b-2 border-stroke border-opacity-20 relative'>
          <BackButton pageRoute='/home' />
          <p className='text-xl text-center text-secondary font-semibold'>
            ประวัติการเดินทาง
          </p>
        </div>
        <History />
      </div>
    </div>
  );
}
