'use client';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function DriverInfo() {
  const socket = io('http://54.169.31.65:3001', { transports: ['websocket'] });
  // const socket = io('http://localhost:3001', { transports: ['websocket'] });

  const [driverStatus, setDriverStatus] = useState<any>();
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connect to server successful✅');
    });

    socket.on('driverStatus', (data) => {
      console.log('Data from server => ', data);
      setDriverStatus(data);
    });

    socket.on('waitingForDriver', (data: any) => {
      console.log(data);
    });

    socket.emit('waitForPassenger', {
      fullName: 'Visal Suwanarat',
      driverEmail: '63070158@kmitl.ac.th',
      driverLat: 10.0,
      driverLong: 10.0,
      time: 12.0,
      status: 'open',
      capacity: 4,
      carType: 'car',
      plate: 'aasd213',
      sex: 'Male',
      phoneNumber: '0658386230',
    });
  }, []);

  // useEffect(() => {
  //   console.log(dataSta);
  // }, [dataS]);

  return (
    <div className='text-secondary w-full h-full flex flex-col justify-center items-center'>
      <div>
        <p className='text-5xl font-light'>{driverStatus}</p>
        {/* <p className='text-5xl font-light'>44.55</p> */}
      </div>
      <div>
        <p className='text-xl'>ยอดเครดิต</p>
      </div>
      <div className=' bg-fieldGray w-[367px] h-[78px] flex items-center justify-center gap-6 rounded-2.5xl mt-6'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-2xl'>100.0%</p>
          <p className='text-label'>การยอมรับ</p>
        </div>
        <div className='border border-borderSwitch h-3/5'></div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-2xl'>4.5</p>
          <p className='text-label'>คะแนน</p>
        </div>
        <div className='border border-borderSwitch h-3/5'></div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-2xl'>0.0%</p>
          <p className='text-label'>การยกเลิก</p>
        </div>
      </div>
    </div>
  );
}
