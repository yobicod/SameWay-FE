import Image from 'next/image'
import React from 'react'
import CurrentLocation from './(components)/CurrentLocation'
import SearchLocation from './(components)/SelectLocation'

export default function SearchLocationPage() {
  return (
    <div className='flex flex-col gap-4  relative h-screen'>
      <CurrentLocation />
    </div>
  )
}
