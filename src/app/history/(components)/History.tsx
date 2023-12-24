"use client"
import Button from "@/components/Button"
import clsx from "clsx"
import { useState } from "react"

interface IMockData {
  id: string
  locationStart: string
  locationEnd: string
  dateTime: string
  price: number
  report: boolean
  feedback: boolean
  rate: number
}

const DataListPassenger: IMockData[] = [
  {
    id: "1",
    locationStart: "แอพอร์ตเรลลิ้ง ผู้โดยสาร",
    locationEnd: "ยูเนี่ยนมอลล์",
    dateTime: "13กพ,2023 18:42",
    price: 120,
    report: false,
    feedback: false,
    rate: 0
  },
  {
    id: "2",
    locationStart: "แอพอร์ตเรลลิ้ง",
    locationEnd: "ยูเนี่ยนมอลล์",
    dateTime: "13กพ,2023 18:42",
    price: 80,
    report: false,
    feedback: true,
    rate: 5
  },
  {
    id: "3",
    locationStart: "แอพอร์ตเรลลิ้ง",
    locationEnd: "ยูเนี่ยนมอลล์",
    dateTime: "13กพ,2023 18:42",
    price: 60,
    report: true,
    feedback: false,
    rate: 0
  }
]

const DataListDriver: IMockData[] = [
  {
    id: "1",
    locationStart: "แอพอร์ตเรลลิ้ง คนขับ",
    locationEnd: "ยูเนี่ยนมอลล์",
    dateTime: "13กพ,2023 18:42",
    price: 120,
    report: false,
    feedback: false,
    rate: 0
  },
  {
    id: "2",
    locationStart: "แอพอร์ตเรลลิ้ง",
    locationEnd: "ยูเนี่ยนมอลล์",
    dateTime: "13กพ,2023 18:42",
    price: 80,
    report: false,
    feedback: true,
    rate: 5
  },
  {
    id: "3",
    locationStart: "แอพอร์ตเรลลิ้ง",
    locationEnd: "ยูเนี่ยนมอลล์",
    dateTime: "13กพ,2023 18:42",
    price: 60,
    report: true,
    feedback: false,
    rate: 0
  }
]

export default function History() {
  const [tab, setTab] = useState("Passenger")
  const [datas, setDatas] = useState(DataListPassenger)
  function handleClick(tab: string) {
    setTab(tab)
    if (tab === "Passenger") {
      setDatas(DataListPassenger)
    } else {
      setDatas(DataListDriver)
    }
  }
  return (
    <div>
      <div className='w-[367px] h-[46px] bg-bgTab rounded-xl flex justify-between items-center gap-1 text-secondary '>
        <Button
          className={clsx(
            "w-4/5 flex items-center justify-center bg-bgTab h-4/5 ml-1.5 rounded-xl text-secondary",
            { "bg-white": tab === "Passenger" }
          )}
          onClick={() => handleClick("Passenger")}
        >
          <p>ผู้โดยสาร</p>
        </Button>
        <Button
          className={clsx(
            "w-4/5 flex items-center justify-center bg-bgTab h-4/5 mr-1.5 rounded-xl text-secondary",
            { "bg-white": tab === "Driver" }
          )}
          onClick={() => handleClick("Driver")}
        >
          <p>คนขับ</p>
        </Button>
      </div>
      <div>
        {datas.map((data) => (
          <div className='mt-3' key={data.id}>
            <div className='w-[367px] min-h-[135px] border border-bgTab rounded-[20px]'>
              <div className='flex'>
                <div className='w-2/3 ml-5 mt-5 text-base text-primary'>
                  <div className='flex mb-[-6px]'>
                    <div className='flex justify-center pt-2'>
                      <div className='rounded-full border border-[#E07C58] w-2 h-2 mr-2 ' />
                    </div>
                    <p className='break-words w-full'>{data.locationStart}</p>
                  </div>
                  <div className='w-0.5 min-h-[15px] bg-borderSwitch ml-[2.5px] mb-[-6px] '></div>
                  <div className='flex '>
                    <div className='flex justify-center pt-2'>
                      <div className='rounded-full bg-secondary w-2 h-2 mr-2' />
                    </div>
                    <p className='break-words w-full'>{data.locationEnd}</p>
                  </div>
                </div>
                <div className='w-1/3 flex flex-col justify-center items-center text-xl text-secondary'>
                  <p>
                    {data.price} <span className='text-sm'>บาท</span>
                  </p>
                  {data.rate != 0 && (
                    <p className='text-sm pr-5'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                  )}
                </div>
              </div>
              <div className='flex text-sm pt-5 font-light'>
                <div className='w-full pr-2 mr-2 pl-5'>
                  <p>{data.dateTime}</p>
                </div>
                <div className='flex justify-end w-full pr-4'>
                  {!data.report && (
                    <div>
                      <Button className='w-20 h-7 mr-2 text-secondary bg-white border border-secondary'>
                        รายงาน
                      </Button>
                    </div>
                  )}
                  {!data.feedback && (
                    <div>
                      <Button className='w-24 px-0.5 h-7 '>ข้อเสนอแนะ</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
