'use client';

import { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function DriverInfo() {
  const handleConnectedSocket = () => {
    console.log('Connect to server...');
  };
  useEffect(() => {
    const socket = io('http://localhost:3001');
    socket.on('connect', () => {
      handleConnectedSocket();
    });

    socket.emit('test', 'Hello from client...');

    socket.on('customEvent', (data) => {
      console.log('Data from server...', data);
    });
  }, []);
  return (
    <div className='text-secondary w-full h-full flex flex-col justify-center items-center'>
      <div>
        <p className='text-5xl font-light'>44.55</p>
      </div>
      <div>
        <p className='text-xl'>ยอดเครดิต</p>
      </div>
      <div className=' bg-fieldGray w-[367px] h-[78px] flex items-center justify-center gap-6 rounded-[20px] mt-6'>
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
