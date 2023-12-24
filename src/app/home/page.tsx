import Home from "./(components)/Home"
import NavbarUser from "../(components)/NavbarUser"

export default async function HomePage() {
  return (
    <div className='flex flex-col gap-4 py-8'>
      <NavbarUser/>
      <Home />
    </div>
  );
}
