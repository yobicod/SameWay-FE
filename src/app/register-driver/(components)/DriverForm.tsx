"use client"
import { createDriver } from "@/app/api-caller/create-driver"
import { IDriverInfo } from "@/app/api-caller/interfaces/interfaces"
import Button from "@/components/Button"
import Input from "@/components/Input"
import SelectDemo from "@/components/Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

interface IProps {
  genderEnum: string[]
}

export default function DriverForm({ genderEnum }: IProps) {
  const { data: userData } = useSession()

  const driverSchema = z.object({
    driverFullName: z.string().refine((val) => val.split(" ")[1], {
      message: "กรุณากรอกข้อมูลให้ถูกต้อง"
    }),
    sex: z.string(),
    plate: z.string().min(5, { message: "กรุณากรอกข้อมูลให้ถูกต้อง" }),
    phoneNumber: z
      .string()
      .length(10, { message: "กรุณากรอกข้อมูลให้ถูกต้อง" }),
    lastName: z.string()
  })

  type DriverData = z.infer<typeof driverSchema>
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm<DriverData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      driverFullName: userData?.user?.name || "",
      sex: "",
      plate: "",
      phoneNumber: "",
      lastName: ""
    }
  })
  const submitForm = async (formData: DriverData) => {
    const driverData: IDriverInfo = {
      driverFirstName: formData.driverFullName.split(" ")[0],
      driverLastName: formData.driverFullName.split(" ")[1],
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      plate: formData.plate,
      sex: formData.sex
    }
    await createDriver(driverData).then((res) => {
      if (res) {
        alert("register success!")
        reset()
      }
    })
  }
  return (
    <div className='flex gap-6 flex-col'>
      <div className='flex justify-center items-center'>
        <Image
          src={userData?.user?.image || ""}
          width={86}
          height={86}
          alt='user-photo'
          className='rounded-full'
        />
      </div>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit(submitForm)}>
        <div className='text-label flex-col flex gap-1'>
          <p>ชื่อจริง</p>
          <Input register={register("driverFullName")} placeholder='ชื่อจริง' />
          {errors.driverFullName && (
            <p className='text-red-500 font-light text-sm'>
              {errors.driverFullName.message}
            </p>
          )}
        </div>

        <div className='text-label flex-col flex gap-1'>
          <p>นามสกุล</p>
          <Input register={register("lastName")} placeholder='นามสกุล' />
          {errors.lastName && (
            <p className='text-red-500 font-light text-sm'>
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className='text-label flex-col flex gap-1'>
          <p>เพศ</p>
          <Controller
            name='sex'
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <SelectDemo
                  items={genderEnum}
                  onChange={onChange}
                  selectedItem={value}
                  placeholder='--เลือกเพศ--'
                />
              )
            }}
          />
        </div>
        <div className='text-label flex-col flex gap-1'>
          <p>ทะเบียนรถยนต์</p>
          <Input register={register("plate")} placeholder='ทะเบียนรถยนต์' />
          {errors.plate && (
            <p className='text-red-500 font-light text-sm'>
              {errors.plate.message}
            </p>
          )}
        </div>
        <div className='text-label flex-col flex gap-1'>
          <p>เบอร์โทรศัพท์</p>
          <Input
            type='number'
            register={register("phoneNumber")}
            placeholder='เบอร์โทรศัพท์'
          />
          {errors.phoneNumber && (
            <p className='text-red-500 font-light text-sm'>
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <Button type='submit'>ลงทะเบียน</Button>
      </form>

      <div>
        <p className='font-medium'>
          คุณมีบัญชีอยู่แล้วใช่หรือไม่ ?{" "}
          <Link href='' className='text-secondary'>
            เข้าสู่ระบบ
          </Link>
        </p>
      </div>
    </div>
  )
}
