'use client'
import { createSearch } from '@/app/api-caller/create-driver-search'
import Button from '@/components/Button'
import Input from '@/components/SearchInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function DriverSearchLocation() {

  const searchSchema = z.object({
    nowLocation: z.string().min(1, { message: 'Enter Your location' }),
    destination: z.string().min(1, { message: 'Enter Your destination' }),
    notes: z.string()
  })

  type searchData = z.infer<typeof searchSchema>
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<searchData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      nowLocation: '',
      destination: '',
      notes: ''
    }
  })
  
  const submitForm = async (data: searchData) => {
    console.log(data)
    // await createSearch(data)
  }
  return (
    <div className="flex gap-6 flex-col w-80">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(submitForm)}>
        <div className="py-3 rounded-[25px] flex gap-3 flex-col justify-center items-center bg-[#F2F2F2] pl-16 pr-1">
          <div className="font-bold" style={{ borderRadius: '50%' }}>
            <Input
              register={register('nowLocation')}
              placeholder="Enter Your location"
            />
            {errors.nowLocation && (
              <p className="text-red-500 font-light text-sm">
                {errors.nowLocation.message}
              </p>
            )}
          </div>
          <div className="text-label font-bold flex-col flex gap-1">
            <Input
              register={register('destination')}
              placeholder="Enter Your destination"
            />
            {errors.destination && (
              <p className="text-red-500 font-light text-sm">
                {errors.destination.message}
              </p>
            )}
          </div>
        </div>
        <div className="text-label font-bold flex-col flex gap-1">
          <p>Notes to driver</p>
          <input
            className="h-15 w-full border rounded px-4 py-2 text-[#216A61]"
            placeholder="lakj;sfkjasfka;foeaj"
          />
        </div>
        <Button type="submit">BOOK</Button>
      </form>
    </div>
  )
}
