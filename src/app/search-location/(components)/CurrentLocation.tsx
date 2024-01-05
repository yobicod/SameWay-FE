'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import LongdoDemo from '@/longdo/LongdoDemo'
import { useState } from 'react'
import { debounce } from 'lodash'
import axios from 'axios'

type Map = 'start' | 'end' | undefined
export default function CurrentLocation() {
  const [showMap, setShowMap] = useState<Map>()
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [search, setSearch] = useState('')
  const [suggestLocation, setSuggestLocation] = useState([])
  const [detailLocation, setDetailLocation] = useState()
  const searchDriverSchema = z.object({
    locationStart: z.object({
      lon: z.number(),
      lat: z.number(),
    }),
    locationEnd: z.object({
      lon: z.number(),
      lat: z.number(),
    }),
    notes: z.string(),
  })

  type searchDriverData = z.infer<typeof searchDriverSchema>
  const {
    handleSubmit,
    control,
    watch,
    setValue,

    formState: { errors },
  } = useForm<searchDriverData>({
    resolver: zodResolver(searchDriverSchema),
    defaultValues: {
      locationStart: {},
      locationEnd: {},
      notes: '',
    },
  })

  function onInputChange(keyword: string) {
    setSearch(keyword)
    debounceHandleSearchLocation(keyword)
  }
  const watchStartLocation = watch('locationStart')
  const watchEndLocation = watch('locationEnd')
  async function querySuggestLocation(keywords: string) {
    const result = await axios.get(
      `https://search.longdo.com/mapsearch/json/suggest?keyword=${keywords}&area=10&span=100km&limit=20&key=${process.env.NEXT_LONGDO_MAP}`
    )
    setSuggestLocation(result?.data?.data || [])
  }
  async function selectedLocation(keywords: string, map: Map) {
    const result = await axios.get(
      `https://search.longdo.com/mapsearch/json/search?keyword=${keywords}&area=10&span=100km&key=15f064efea8a51cdfad9503113d16614`
    )
    setDetailLocation(result.data.data[0])
    setSearch(keywords)
    if (map === 'start' && detailLocation) {
      setValue(
        'locationStart',
        {
          lat: detailLocation.lat,
          lon: detailLocation.lon,
        },
        { shouldValidate: true }
      )
    }
  }
  const debounceHandleSearchLocation = debounce(querySuggestLocation, 700)
  const submitForm = async (data: searchDriverData) => {
    console.log('daw', data)
  }
  if (showMap === 'start') {
    return (
      <div className='h-screen relative'>
        <button onClick={() => console.log(watchStartLocation)}>
          dawkdkaw
        </button>
        <Controller
          control={control}
          name='locationStart'
          render={({ field: { onChange, value } }) => (
            <LongdoDemo height='h-full' onChange={onChange} value={value} />
          )}
        />
        <div className='absolute top-10 flex justify-center w-full'>
          <div className='w-fit'>
            <Input
              onFocus={() => setShowSuggestion(true)}
              onChange={(e) => onInputChange(e.target.value)}
              value={search}
              placeholder='ค้นหาสถานที่ต้นทาง'
              endIcon={<Icon name='search' />}
            />
            {showSuggestion && (
              <div className='p-2 flex flex-col bg-white rounded gap-1 max-h-60 overflow-auto'>
                {suggestLocation?.map((location) => (
                  <div
                    key={`location-${location.w}`}
                    className='p-1 rounded hover:text-white hover:bg-secondary cursor-pointer'
                    onClick={() => {
                      selectedLocation(location.w, 'start')
                      setShowSuggestion(false)
                    }}>
                    {location?.w}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='absolute bottom-10 w-full flex justify-center'>
          <div>
            <Button
              onClick={() => {
                setShowMap(undefined)
              }}>
              ยืนยัน
            </Button>
          </div>
        </div>
      </div>
    )
  }
  if (showMap === 'end') {
    return (
      <div className='h-screen relative'>
        <Controller
          control={control}
          name='locationEnd'
          render={({ field: { onChange, value } }) => (
            <LongdoDemo height='h-full' onChange={onChange} value={value} />
          )}
        />
        <div className='absolute bottom-0'>
          <Input placeholder='ค้นหาสถานที่ปลายทาง' />
          <Button onClick={() => setShowMap(undefined)}>ยืนยัน</Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='flex items-center justify-center h-full'>
          <LongdoDemo value={[watchStartLocation, watchEndLocation]} disabled />
        </div>
        <div
          className='py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center bg-white pr-8 h-90'
          style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}>
          <div className='flex gap-6 flex-col w-80'>
            <div className='flex flex-col gap-5 w-[354px]'>
              <p className='text-3xl text-secondary font-light'>
                วันนี้คุณปุยปุยอยาก{' '}
                <span className='font-medium'>ไปที่ไหน ?</span>
              </p>
              <div className='relative h-[162px] rounded-[25px] flex gap-3 flex-col justify-center items-center bg-fieldGray pl-10 px-4'>
                <div className='absolute left-[23px]'>
                  <Image
                    src='/image/line.svg'
                    width={26}
                    height={87}
                    alt='app-logo'
                  />
                </div>
                <div className='absolute top-[60px] left-[260px] z-10'>
                  <Button
                    startIcon={
                      <Icon
                        name='sync_alt'
                        className='material-symbols-outlined rotate-90'
                      />
                    }
                    className='w-[44px] h-[44px] rounded-full flex justify-center bg-fieldOrange '
                  />
                </div>
                <div className='w-full'>
                  <div
                    onClick={() => setShowMap('start')}
                    className='flex gap-2 bg-white rounded-4xl h-[58px] items-center p-2 text-stroke'>
                    <Icon
                      name='location_on'
                      className='material-symbols-outlined text-fieldOrange md-30'
                    />
                    <p>เลือกสถานที่ต้นทาง</p>
                  </div>

                  {errors.locationStart && (
                    <p className='text-red-500 font-light text-sm'>
                      {errors.locationStart.message}
                    </p>
                  )}
                </div>
                <div className='w-full'>
                  <div
                    onClick={() => setShowMap('end')}
                    className='flex gap-2 bg-white rounded-4xl h-[58px] items-center p-2 text-stroke'>
                    <Icon
                      name='location_on'
                      className='material-symbols-outlined text-secondary md-30'
                    />
                    <p>เลือกสถานที่ปลายทาง</p>
                  </div>
                  {errors.locationEnd && (
                    <p className='text-red-500 font-light text-sm'>
                      {errors.locationEnd.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='text-label  flex-col flex gap-1'>
                <p>รายละเอียดเพิ่มเติม</p>
                <Input
                  inputClassName='h-[56px] w-full border rounded px-4 py-2 text-secondary border-borderGray'
                  placeholder='บอกอะไรก้บอกอิอิ'
                />
              </div>
              <Button type='submit'>ค้นหาคนขับ</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
