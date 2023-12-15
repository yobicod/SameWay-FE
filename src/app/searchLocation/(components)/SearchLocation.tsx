'use client'
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'

export default function SearchLocation() {
  const searchSchema = z.object({
    location: z.string().min(1, { message: 'Enter Your location' }),
    lat: z.number(),
    lng: z.number()
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
  }
  return (
    <form
      className="w-full flex justify-center gap-4"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="font-bold w-4/5 rounded-[30px] ">
        <Input
          style={{ boxShadow: '0px 4px 4px 0px rgba(164, 159, 159, 0.25)' }}
          register={register('location')}
          placeholder="Search Location"
          className="w-[311px] h-[51px]"
          startIcon={
            <Icon
              name="search"
              className="material-symbols-outlined text-secondary"
            />
          }
          btnClassName="rounded-2xl border-white"
        />
        {errors.location && (
          <p className="text-red-500 font-light text-sm">
            {errors.location.message}
          </p>
        )}
      </div>

      <button
        className="bg-white rounded-2xl flex justify-center items-center w-[45px] h-[46px]"
        type="submit"
        style={{ boxShadow: '0px 4px 4px 0px rgba(164, 159, 159, 0.25)' }}
      >
        <Image src="/image/send.svg" width={27} height={27} alt="app-logo" />
      </button>
    </form>
  )
}
