'use client'

import Switch from '@/components/Switch'
import { useSession } from 'next-auth/react'

export default function UserInfo() {
  const { data: session } = useSession()
  const test = () => {
    console.log('a')
  }

  return (
    <div onClick={() => test()}>
      <Switch />
      {session?.user?.name}
      {session?.user?.email}
    </div>
  )
}
