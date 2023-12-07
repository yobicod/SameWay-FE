'use client'
import { createDrivers } from '@/app/api-caller/create-Driver'
import { log } from 'console'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

export default function FormHook() {
  const InputData = z.object({
    driverFirstName: z.string(),
    driverLastName: z.string(),
    plate: z.string(),
    carType: z.string(),
    sex: z.string(),
    phoneNumber: z.string()
  })
  type CarInput = z.infer<typeof InputData>
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<CarInput>()
  const onSubmit: SubmitHandler<CarInput> = async (data) => {
    await createDrivers(data)
    // console.log(isCreate)
    console.log(data)
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        defaultValue="driverFirstName"
        {...register('driverFirstName', { required: true })}
      />
      <input
        defaultValue="driverLastName"
        {...register('driverLastName', { required: true })}
      />
      <input defaultValue="plate" {...register('plate', { required: true })} />
      <input
        defaultValue="carType"
        {...register('carType', { required: true })}
      />
      <input defaultValue="sex" {...register('sex', { required: true })} />
      <input
        defaultValue="phoneNumber"
        {...register('phoneNumber', { required: true })}
      />
      <input type="submit" />
    </form>
  )
}
