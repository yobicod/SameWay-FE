import Image from 'next/image'
import React from 'react'
import CurrentLocation from './(components)/CurrentLocation'
import SearchLocation from './(components)/SearchLocation'

export default function DriverPage() {
  return (
    <div className="flex flex-col gap-4 font-jura py-8 pt-0 relative">
      <div>
        <Image
          src="/image/map.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="app-logo"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="fixed top-10 inset-x-0 flex gap-6 flex-col justify-center items-center ">
        <SearchLocation />
      </div>
      <div
        className="fixed bottom-0 inset-x-0 py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center bg-white pr-8"
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}
      >
        <CurrentLocation />
      </div>
    </div>
  )
}