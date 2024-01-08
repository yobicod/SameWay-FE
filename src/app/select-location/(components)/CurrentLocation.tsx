'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import MapTest, { map } from '@/longdo/MapTest'

import { io } from 'socket.io-client'
import {
  queryLocation,
  queryLocationByGeoLocation,
  querySuggestLocation,
} from '../(api)/getLongDoApi'
import SearchSelect from '@/components/SearchSelect'

interface IGeoLatLon {
  lat: number
  lon: number
}
type Map = 'start' | 'end' | undefined
export default function CurrentLocation() {
  const [driverList, setDriverList] = useState<any>([])

  const [socket, setSocket] = useState<any>(null)
  useEffect(() => {
    const newSocket = io(`${process.env.NEXT_PUBLIC_API_URL}`, {
      transports: ['websocket'],
    })

    newSocket.on('connect', () => {
      console.log('Connect to server successful✅')
    })

    newSocket.on('waitingForDriver', (dataList) => {
      console.log('Waiting for driver:', dataList)
      setDriverList(dataList)
    })

    setSocket(newSocket)

    return () => {
      if (newSocket) {
        newSocket.disconnect()
      }
    }
  }, [])
  const [showMap, setShowMap] = useState<Map>()
  const [suggestLocation, setSuggestLocation] = useState([])
  const [searchStart, setSearchStart] = useState('')
  const [searchEnd, setSearchEnd] = useState('')

  const [startLocationDetail, setStartLocationDetail] = useState('')
  const [endLocationDetail, setEndLocationDetail] = useState('')
  const searchDriverSchema = z.object({
    locationStart: z.object({
      lon: z.number({
        invalid_type_error: 'กรุณาระบุสถานที่ต้นทาง',
        required_error: 'กรุณาระบุสถานที่ต้นทาง',
      }),
      lat: z.number({
        invalid_type_error: 'กรุณาระบุสถานที่ต้นทาง',
        required_error: 'กรุณาระบุสถานที่ต้นทาง',
      }),
    }),
    locationEnd: z.object({
      lon: z.number({
        invalid_type_error: 'กรุณาระบุสถานที่ปลายทาง',
        required_error: 'กรุณาระบุสถานที่ปลายทาง',
      }),
      lat: z.number({
        invalid_type_error: 'กรุณาระบุสถานที่ปลายทาง',
        required_error: 'กรุณาระบุสถานที่ปลายทาง',
      }),
    }),
    notes: z.string(),
  })
  type searchDriverData = z.infer<typeof searchDriverSchema>
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    register,
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
    debounceHandleSearchLocation(keyword)
  }
  const watchStartLocation = watch('locationStart')
  const watchEndLocation = watch('locationEnd')
  const mapCallback = () => {
    setTimeout(() => {
      if (
        Object.keys(watchStartLocation).length == 0 &&
        Object.keys(watchEndLocation).length == 0
      ) {
        map.location(longdo.LocationMode.Geolocation)
      }
      if (Object.keys(watchStartLocation).length > 0) {
        map.Route.add(new longdo.Marker(watchStartLocation))
        map.location(watchStartLocation)
      }
      if (Object.keys(watchEndLocation).length > 0) {
        map.Route.add(new longdo.Marker(watchEndLocation))
      }
      if (
        Object.keys(watchStartLocation).length > 0 &&
        Object.keys(watchEndLocation).length > 0
      ) {
        map.Route.search()
      }
    }, 500)
  }
  const getSuggestLocation = async (keyword: string) => {
    const result = await querySuggestLocation(keyword)
    setSuggestLocation(result?.data?.data || [])
  }
  const selectSuggestLocationStart = async (keyword: string) => {
    const result = await queryLocation(keyword)
    setStartLocationDetail(result.data.data[0].name || 'จุดเริ่มต้น')
    setValue(
      'locationStart',
      {
        lat: result.data.data[0].lat,
        lon: result.data.data[0].lon,
      },
      { shouldValidate: true }
    )
  }
  const selectSuggestLocationEnd = async (keyword: string) => {
    const result = await queryLocation(keyword)
    setEndLocationDetail(result.data.data[0].name || 'จุดหมายปลายทาง')
    setValue(
      'locationEnd',
      {
        lat: result.data.data[0].lat,
        lon: result.data.data[0].lon,
      },
      { shouldValidate: true }
    )
  }
  const handleOnClickStartMap = async (geoLocation: IGeoLatLon) => {
    const result = await queryLocationByGeoLocation(geoLocation)
    const data = result.data
    const detail = [
      data?.aoi,
      data?.road,
      data?.district,
      data?.subdistrict,
      data?.province,
      data?.postcode,
    ]
    setStartLocationDetail(detail.join(' '))
  }
  const handleOnClickEndMap = async (geoLocation: IGeoLatLon) => {
    const result = await queryLocationByGeoLocation(geoLocation)
    const data = result.data
    const detail = [
      data?.aoi,
      data?.road,
      data?.district,
      data?.subdistrict,
      data?.province,
      data?.postcode,
    ]

    setEndLocationDetail(detail.join(' '))
  }
  const debounceHandleSearchLocation = debounce(getSuggestLocation, 700)
  const handleSwap = () => {
    if (startLocationDetail && endLocationDetail) {
      const clonedStartLocation = watchStartLocation
      const clonedStartDetail = startLocationDetail
      setValue('locationStart', watchEndLocation)
      setValue('locationEnd', clonedStartLocation)
      setStartLocationDetail(endLocationDetail)
      setEndLocationDetail(clonedStartDetail)
    }
  }
  const submitForm = async (data: searchDriverData) => {
    if (socket) {
      socket.emit('findDriver', {
        userLat: data.locationStart.lat,
        userLong: data.locationStart.lon,
      })
    }
    console.log(data.locationStart.lat, data.locationStart.lon)
  }
  console.log(watchStartLocation)

  if (showMap === 'start') {
    return (
      <div className='h-screen relative'>
        <Controller
          control={control}
          name='locationStart'
          render={({ field: { onChange, value } }) => (
            // <LongdoDemo height='h-full' onChange={onChange} value={value} />
            <MapTest
              height='h-full'
              onChange={(geoLocation) => {
                onChange(geoLocation)
                handleOnClickStartMap(geoLocation)
              }}
              value={value}
            />
          )}
        />
        <div className='absolute top-10 flex justify-center w-full'>
          <div className='border w-96 flex justify-center flex-col'>
            <SearchSelect
              items={suggestLocation.map((location) => location.w)}
              onInputChange={onInputChange}
              onChange={(location) => {
                selectSuggestLocationStart(location)
                setSearchStart(location)
              }}
              defaultValue={searchStart}
              placeholder='ค้นหาสถานที่ต้นทาง'
            />
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
            // <LongdoDemo height='h-full' onChange={onChange} value={value} />
            <MapTest
              height='h-full'
              onChange={(geoLocation) => {
                onChange(geoLocation)
                handleOnClickEndMap(geoLocation)
              }}
              value={value}
            />
          )}
        />
        <div className='absolute top-10 flex justify-center w-full'>
          <div className='border w-96 flex justify-center flex-col'>
            <SearchSelect
              items={suggestLocation.map((location) => location.w)}
              onInputChange={onInputChange}
              onChange={(location) => {
                selectSuggestLocationEnd(location)
                setSearchEnd(location)
              }}
              defaultValue={searchEnd}
              placeholder='ค้นหาสถานที่ปลายทาง'
            />
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

  return (
    <div className='flex flex-col h-screen justify-between overflow-auto'>
      {!driverList.length ? 'not found' : 'found'}
      <div className='flex items-center justify-center min-h-[40%] flex-1'>
        <MapTest disabled callback={mapCallback} />
      </div>
      <div
        className='rounded-t-5xl bg-white flex justify-center px-8 py-9 h-fit'
        style={{ boxShadow: '0px -4px 4px 0px rgba(164, 159, 159, 0.25)' }}>
        <div className='flex flex-col gap-5 w-80'>
          <p className='text-3xl text-secondary font-light'>
            วันนี้คุณปุยปุยอยาก <span className='font-medium'>ไปที่ไหน ?</span>
          </p>
          <div className='relative rounded-[25px] p-4 flex gap-3 flex-col justify-center items-center bg-fieldGray pl-10'>
            <div className='absolute left-6'>
              <Image
                src='/image/line.svg'
                width={26}
                height={87}
                alt='app-logo'
              />
            </div>
            <div className='absolute top-[60px] left-[250px] z-10'>
              <Button
                onClick={handleSwap}
                startIcon={
                  <Icon
                    name='sync_alt'
                    className='material-symbols-outlined rotate-90 cursor-pointer'
                  />
                }
                className='w-11 h-11 rounded-full bg-fieldOrange '
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
                {errors.locationStart ? (
                  <p className='text-red-500 font-light text-sm p-1'>
                    {errors.locationStart.lat?.message}
                  </p>
                ) : (
                  <p className='truncate'>
                    {startLocationDetail || 'เลือกสถานที่ต้นทาง'}
                  </p>
                )}
              </div>
            </div>
            <div className='w-full'>
              <div
                onClick={() => setShowMap('end')}
                className='flex gap-2 bg-white rounded-4xl h-[58px] items-center p-2 text-stroke'>
                <Icon
                  name='location_on'
                  className='material-symbols-outlined text-secondary md-30'
                />
                {errors.locationEnd ? (
                  <p className='text-red-500 font-light text-sm p-1'>
                    {errors.locationEnd.lat?.message}
                  </p>
                ) : (
                  <p className='truncate'>
                    {endLocationDetail || 'เลือกสถานที่ปลายทาง'}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className='text-label flex-col flex gap-1'>
            <p>รายละเอียดเพิ่มเติม</p>
            <Input
              register={register('notes')}
              inputClassName='h-[56px] w-full border rounded px-4 py-2 text-secondary border-borderGray'
              placeholder='บอกอะไรกับคนขับสักหน่อย'
            />
          </div>
          <Button onClick={handleSubmit(submitForm)} type='submit'>
            ค้นหาคนขับ
          </Button>
        </div>
      </div>
    </div>
  )
}
