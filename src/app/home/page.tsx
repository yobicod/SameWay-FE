import Icon from '@/components/Icon'
import UserInfo from './(components)/UserInfo'

import Link from 'next/link'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default async function HomePage() {
  return (
    <div>
      <UserInfo />
      <Link href='/driver'>driver</Link>
    </div>
  )
}
