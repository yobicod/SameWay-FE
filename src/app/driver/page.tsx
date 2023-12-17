import Image from 'next/image'
import Navbar from './(components)/Navbar'
import DriverDetail from './(components)/DriverDetail'
import Pickup from './(components)/Pickup'
import DropOff from './(components)/DropOff'

export default function DriverPage() {
  return (
    <div className='relative'>
      <Navbar />
      <Image
        src='https://cdn.discordapp.com/attachments/1180138826778284083/1185222861766541426/map.png?ex=658ed3ce&is=657c5ece&hm=0601dcadc9d71df6ea994d74692e6782d865a6bdf6e1c7842c7090a970380d42&'
        width={0}
        height={0}
        sizes='100vw'
        alt='app-logo'
        className='w-full object-cover h-full'
      />
      <div
        className='fixed bottom-0 bg-white rounded-t-[50px] min-h-[355px] w-full'
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}>
        {/* condition render check from api ... something */}
        {/* <DriverDetail /> */}
        {/* <Pickup /> */}
        <DropOff />
      </div>
    </div>
  )
}
