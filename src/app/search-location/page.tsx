import Image from 'next/image'
import React from 'react'
import CurrentLocation from './(components)/CurrentLocation'
import SearchLocation from './(components)/SelectLocation'

export default function SearchLocationPage() {
  return (
    <div className='flex flex-col gap-4 py-8 pt-0 relative h-screen'>
      <div className='fixed top-10 inset-x-0 flex gap-6 flex-col justify-center items-center '>
        <SearchLocation />
      </div>
      <CurrentLocation />
    </div>
  )
}
