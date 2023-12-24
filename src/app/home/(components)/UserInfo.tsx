'use client'

import Switch from '@/components/Switch'
import Map from '@/longdo/LongdoMap'
import { useSession } from 'next-auth/react'

export default function UserInfo() {
  const { data: session } = useSession()

  return (
    <div>
      {/* <Switch />
      {session?.user?.name}
      {session?.user?.email} */}
      <Map />
    </div>
  )
}
