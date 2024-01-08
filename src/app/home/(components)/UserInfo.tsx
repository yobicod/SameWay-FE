'use client';

import Switch from '@/components/Switch';
import { useSession } from 'next-auth/react';

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className='w-full'>
      {/* <Switch />
      {session?.user?.name}
      {session?.user?.email} */}
    </div>
  );
}
