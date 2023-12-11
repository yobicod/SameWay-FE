import { getServerSession } from 'next-auth'
import UserInfo from './(components)/UserInfo'
import { getAllDrivers } from '../api-caller/get-all-drivers'
import { createDriver } from '../api-caller/create-driver'
import Link from 'next/link'

export default async function HomePage() {
  console.log(await createDriver())
  return (
    <div>
      <UserInfo />
      <Link href='/driver'>driver</Link>
    </div>
  )
}
