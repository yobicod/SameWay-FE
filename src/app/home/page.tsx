import Image from 'next/image';
import Home from './(components)/Home';
import { getUserLocation } from '../api-caller/get-user-location';
import { IUserLocation } from '../api-caller/interfaces/interfaces';
import NavbarUser from '../(components)/NavbarUser';

export default async function HomePage() {
  // Find user location
  const userLocation: IUserLocation = (await getUserLocation()) || {
    city: '',
    zip: ''
  };

  return (
    <>
      <NavbarUser />
      <Home location={userLocation} />
      {/* <UserInfo /> */}
    </>
  );
}
