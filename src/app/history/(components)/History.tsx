'use client';
import { getUserHistory } from '@/app/api-caller/get-user-history';
import { convertToThaiDate } from '@/app/global-function';
import Button from '@/components/Button';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactStars from 'react-stars';

interface IBookingDetails {
  id: number;
  userFullName: string;
  userEmail: string;
  userStart: string;
  userDestination: string;
  userLat: number;
  userLong: number;
  userCreateAt: string;
  driverFullName: string;
  driverEmail: string;
  driverStart: string;
  driverDestination: string;
  driverLat: number;
  driverLong: number;
  driverCreateAt: string;
  driverGender: string;
  deliverType: string;
  createdAt: string;
  updatedAt: string;
  carType: string;
  capacity: number;
  price: number;
  plate: string;
  rating: number; // fix this later
  report: string; //  fix this later
  feedback: string; // fix this later
}

export default function History() {
  const { data: userData } = useSession();
  const router = useRouter();
  const userEmail = userData?.user?.email?.split('@')[0];
  const [userHistory, setUserHistory] = useState<IBookingDetails[]>([]);
  const [driverHistory, setDriverHistory] = useState<IBookingDetails[]>([]);
  const [tab, setTab] = useState('Passenger');

  const handleTabClick = (tab: string) => {
    setTab(tab);
  };

  useEffect(() => {
    const getHistory = async () => {
      const userHistory = await getUserHistory(userEmail || '');
      if (userHistory) {
        setUserHistory(userHistory.user);
        setDriverHistory(userHistory.driver);
      }
    };
    getHistory();
  }, [userData]);

  return (
    <div>
      <div className='w-[367px] h-[46px] bg-bgTab rounded-xl flex justify-between items-center gap-1 text-secondary '>
        <Button
          className={clsx(
            'w-4/5 flex items-center justify-center bg-bgTab h-4/5 ml-1.5 rounded-xl text-secondary',
            { 'bg-white': tab === 'Passenger' }
          )}
          onClick={() => handleTabClick('Passenger')}
        >
          <p>ผู้โดยสาร</p>
        </Button>
        <Button
          className={clsx(
            'w-4/5 flex items-center justify-center bg-bgTab h-4/5 mr-1.5 rounded-xl text-secondary',
            { 'bg-white': tab === 'Driver' }
          )}
          onClick={() => handleTabClick('Driver')}
        >
          <p>คนขับ</p>
        </Button>
      </div>
      {tab === 'Passenger' ? (
        <div>
          {userHistory.map((data) => (
            <div className='mt-3' key={data.id}>
              <div className='w-[367px] min-h-[135px] border border-bgTab rounded-[20px]'>
                <div className='flex'>
                  <div className='w-2/3 ml-5 mt-5 text-base text-primary'>
                    <div className='flex mb-[-6px]'>
                      <div className='flex justify-center pt-2'>
                        <div className='rounded-full border border-[#E07C58] w-2 h-2 mr-2 ' />
                      </div>
                      <p className='break-words w-full'>{data.userStart}</p>
                    </div>
                    <div className='w-0.5 min-h-[15px] bg-borderSwitch ml-[2.5px] mb-[-6px] '></div>
                    <div className='flex '>
                      <div className='flex justify-center pt-2'>
                        <div className='rounded-full bg-secondary w-2 h-2 mr-2' />
                      </div>
                      <p className='break-words w-full'>
                        {data.userDestination}
                      </p>
                    </div>
                  </div>
                  <div className='w-1/3 flex flex-col justify-center items-center text-xl text-secondary'>
                    <p>
                      {data.price} <span className='text-sm'>บาท</span>
                    </p>
                    {data.rating != 0 && (
                      <ReactStars
                        count={5}
                        size={18}
                        value={data.rating}
                        color2='#ffd700'
                        half={false}
                        edit={false}
                      />
                    )}
                  </div>
                </div>
                <div className='flex text-sm pt-5 font-light'>
                  <div className='w-full pr-2 mr-2 pl-5'>
                    <p>{convertToThaiDate(data.userCreateAt)}</p>
                  </div>
                  <div className='flex justify-end w-full pr-4'>
                    {!data.report && (
                      <div>
                        <Button
                          className='w-20 h-7 mr-2 text-secondary bg-white border border-secondary'
                          onClick={() => {
                            router.push('report');
                          }}
                        >
                          รายงาน
                        </Button>
                      </div>
                    )}
                    {!data.feedback && (
                      <div>
                        <Button
                          className='w-24 px-0.5 h-7 '
                          onClick={() => {
                            router.push('feedback');
                          }}
                        >
                          ข้อเสนอแนะ
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {driverHistory.map((data) => (
            <div className='mt-3' key={data.id}>
              <div className='w-[367px] min-h-[135px] border border-bgTab rounded-[20px]'>
                <div className='flex'>
                  <div className='w-2/3 ml-5 mt-5 text-base text-primary'>
                    <div className='flex mb-[-6px]'>
                      <div className='flex justify-center pt-2'>
                        <div className='rounded-full border border-[#E07C58] w-2 h-2 mr-2 ' />
                      </div>
                      <p className='break-words w-full'>{data.userStart}</p>
                    </div>
                    <div className='w-0.5 min-h-[15px] bg-borderSwitch ml-[2.5px] mb-[-6px] '></div>
                    <div className='flex '>
                      <div className='flex justify-center pt-2'>
                        <div className='rounded-full bg-secondary w-2 h-2 mr-2' />
                      </div>
                      <p className='break-words w-full'>
                        {data.userDestination}
                      </p>
                    </div>
                  </div>
                  <div className='w-1/3 flex flex-col justify-center items-center text-xl text-secondary'>
                    <p>
                      {data.price} <span className='text-sm'>บาท</span>
                    </p>
                    {data.rating != 0 && (
                      <ReactStars
                        count={5}
                        size={18}
                        value={data.rating}
                        color2='#ffd700'
                        half={false}
                        edit={false}
                      />
                    )}
                  </div>
                </div>
                <div className='flex text-sm pt-5 font-light'>
                  <div className='w-full pr-2 mr-2 pl-5'>
                    <p>{convertToThaiDate(data.userCreateAt)}</p>
                  </div>
                  <div className='flex justify-end w-full pr-4'>
                    {!data.report && (
                      <div>
                        <Button
                          className='w-20 h-7 mr-2 text-secondary bg-white border border-secondary'
                          onClick={() => {
                            router.push('report');
                          }}
                        >
                          รายงาน
                        </Button>
                      </div>
                    )}
                    {!data.feedback && (
                      <div>
                        <Button
                          className='w-24 px-0.5 h-7 '
                          onClick={() => {
                            router.push('feedback');
                          }}
                        >
                          ข้อเสนอแนะ
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
