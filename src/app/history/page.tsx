"use client"
import BackButton from "../../components/BackButton"
import Image from "next/image"
import PassengerHistory from "./(components)/PassengerHistory"
import DriverHistory from "./(components)/DriverHistory"
import { useState } from "react"

export default function FeedBackPage() {
  const [tab, setTab] = useState("Passenger")
  function handleClick(tab: string) {
    setTab(tab)
  }

  return (
    <>
      <div className='flex flex-col gap-4  py-8 border-indigo-600 font-jura'>
        <div className='flex items-center gap-[14px] px-9'>
          <Image src='/logo/logo.svg' width={70} height={37} alt='app-logo' />
          <div className='border border-secondary w-full'></div>
        </div>

        <div
          className='inset-x-0  rounded-t-[50px] flex flex-col gap-4 items-center'
          style={{ boxShadow: "0px -4px 4px 0px rgba(164, 159, 159, 0.25)" }}
        >
          <div className='text-label font-bold flex justify-center items-center gap-1 h-20 w-screen border-b-2 border-stroke border-opacity-20 relative'>
            <BackButton pageRoute='/driver' />
            <p className='text-2xl  text-center font-lexendExa text-secondary'>
              History
            </p>
          </div>
          {tab == "Passenger" ? (
            <PassengerHistory setTab={handleClick} />
          ) : (
            <DriverHistory setTab={handleClick} />
          )}
        </div>
      </div>
    </>
  )
}
