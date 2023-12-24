import Image from 'next/image';
import React from 'react';
import DriverForm from './(components)/DriverForm';
import { getGender } from '../api-caller/get-gender';
import NavbarUser from '../(components)/NavbarUser';

export default async function RegisterDriverPage() {
  const genderData = await getGender();
  const genderEnum = genderData?.map((gender) => gender.value) || [];
  return (
    <div className='flex flex-col gap-4 py-8'>
      <NavbarUser/>
      <div
        className='py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center'
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}
      >
        <p className='text-3xl text-secondary'>ลงทะเบียน</p>
        <DriverForm genderEnum={genderEnum} />
      </div>
    </div>
  );
}
