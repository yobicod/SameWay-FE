'use client'
import { createSearch } from '@/app/api-caller/create-driver-search'
import Input from '@/components/SearchInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'

export default function DriverSearchLocation() {
  const { data: userData } = useSession()

  const searchSchema = z.object({
    location: z.string().min(1, { message: 'Enter Your location' })
  })

  type searchData = z.infer<typeof searchSchema>
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<searchData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      location: ''
    }
  })
  const submitForm = async (data: searchData) => {
    console.log(data)
    // await createSearch(data)
  }
  return (
    
    <form
      className="w-full flex justify-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="font-bold w-4/5" style={{ borderRadius: '50%' }}>
        <Input register={register('location')} placeholder="Search Location" className='w-[311px] h-[51px]'/>
        {errors.location && (
          <p className="text-red-500 font-light text-sm">
            {errors.location.message}
          </p>
        )}
      </div>

      <button
        className="bg-white rounded-2xl p-1 ml-3 flex  justify-center items-center w-[45px] h-[46px]"
        type="submit"
        
      >
        <Image src="/image/send.svg" width={27} height={27} alt="app-logo" />
      </button>
    </form>
  )
}
