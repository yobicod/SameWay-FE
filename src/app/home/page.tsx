import Image from 'next/image';
import Home from './(components)/Home';
import { getUserLocation } from '../api-caller/get-user-location';
import { IUserLocation } from '../api-caller/interfaces/interfaces';

export default async function HomePage() {
  // Find user location
  const userLocation: IUserLocation = (await getUserLocation()) || {
    city: '',
    zip: '',
  };

  return (
    <div className='flex flex-col gap-4 font-jura py-8'>
      <div className='flex items-center gap-[14px] px-9'>
        <Image src='/logo/logo.svg' width={70} height={37} alt='app-logo' />
        <div className='border border-secondary w-full' />
      </div>

      <Home location={userLocation} />
      {/* <UserInfo /> */}
    </div>
  );
}
