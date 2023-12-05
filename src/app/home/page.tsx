import { getServerSession } from 'next-auth'
import UserInfo from './(components)/UserInfo'

export default async function HomePage() {
  return (
    <div>
      <UserInfo />
    </div>
  )
}
