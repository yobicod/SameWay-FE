'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface IProps {
  pageRoute: string;
}
export default function BackButton({ pageRoute }: IProps) {
  const router = useRouter();
  const goToPreviousPage = () => {
    router.push(pageRoute);
  };

  return (
    <>
      <div
        className='absolute left-[40px] opacity-40 cursor-pointer'
        onClick={goToPreviousPage}
      >
        <Image
          src='/image/arrow-back.svg'
          width={26}
          height={87}
          alt='app-logo'
        />
      </div>
    </>
  );
}
