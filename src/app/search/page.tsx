import Image from 'next/image'
import React from 'react'
import DestinationForm from './(components)/Destination'
import SearchForm from './(components)/SearchLocation'

export default function DriverPage() {
  return (
    <div className="flex flex-col gap-4 font-jura py-8 pt-0 ">
      <div className="relative w-full">
        <Image
          src="/image/map.png"
          width={0}
          height={0}
          alt="app-logo"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="fixed top-10 left-0 right-0 flex gap-6 flex-col justify-center items-center ">
        <SearchForm />
      </div>
      <div
        className="fixed bottom-0 left-0 right-0 py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center bg-white"
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}
      >
        <p className="text-3xl text-secondary">
          Where would you like to go <span className="font-bold">today ?</span>
        </p>

        <DestinationForm />
      </div>
    </div>
  )
}
