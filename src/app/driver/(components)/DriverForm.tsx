"use client";
import { createDriver } from "@/app/api-caller/create-driver";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function DriverForm() {
  const { data: userData } = useSession();

  const driverSchema = z.object({
    driverFirstName: z.string().min(5, { message: "กรุณากรอกข้อมูลให้ครบเด้" }),
    driverLastName: z.string().min(5, { message: "กรุณากรอกข้อมูลให้ครบเด้" }),
    // dob: z.coerce.date(),
    sex: z.enum(["Male", "Female"]),
    plate: z.string().min(5, { message: "กรุณากรอกข้อมูลให้ครบเด้" }),
    phoneNumber: z
      .string()
      .length(10)
      .min(5, { message: "กรุณากรอกข้อมูลให้ถูกต้อง" }),
    carType: z.string(),
  });

  type DriverData = z.infer<typeof driverSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DriverData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      driverFirstName: userData?.user?.name || "",
      driverLastName: userData?.user?.name || "",
      // dob: new Date(),
      sex: "Male",
      plate: "",
      phoneNumber: "",
    },
  });
  console.log(errors);
  const submitForm = async (data: DriverData) => {
    console.log("asdasdsa");
    await createDriver(data);
    reset();
  };
  return (
    <div className="flex gap-6 flex-col">
      <div className="flex justify-center items-center">
        <Image
          src={userData?.user?.image || ""}
          width={86}
          height={86}
          alt="user-photo"
          className="rounded-full"
        />
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(submitForm)}>
        <div className="text-label font-bold flex-col flex gap-1">
          <p>First Name</p>
          <Input
            register={register("driverFirstName")}
            placeholder="First Name"
          />
          {errors.driverFirstName && (
            <p className="text-red-500 font-light text-sm">
              {errors.driverFirstName.message}
            </p>
          )}
        </div>
        <div className="text-label font-bold flex-col flex gap-1">
          <p>Last Name</p>
          <Input
            register={register("driverLastName")}
            placeholder="Last Name"
          />
          {errors.driverLastName && (
            <p className="text-red-500 font-light text-sm">
              {errors.driverLastName.message}
            </p>
          )}
        </div>
        {/* <div className='text-label font-bold flex-col flex gap-1'>
          <p>Date of Birth</p>
          <Input
            register={register('dob')}
            placeholder='Full Name'
            type='date'
          />
        </div> */}
        <div className="text-label font-bold flex-col flex gap-1">
          <p>Car Type</p>
          <Input register={register("carType")} placeholder="Car Type" />
          {errors.carType && (
            <p className="text-red-500 font-light text-sm">
              {errors.carType.message}
            </p>
          )}
        </div>
        <div className="text-label font-bold flex-col flex gap-1">
          <p>Gender</p>
          {/* <Input register={register('sex')} placeholder='Full Name' /> */}
          <select
            className="rounded px-4 py-2 font-bold border border-stroke h-11 text-secondary"
            {...register("sex")}
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="text-label font-bold flex-col flex gap-1">
          <p>License plate</p>
          <Input register={register("plate")} placeholder="Full Name" />
        </div>
        <div className="text-label font-bold flex-col flex gap-1">
          <p>Tel.</p>
          <Input
            type="number"
            register={register("phoneNumber")}
            placeholder="Full Name"
          />
        </div>
        <Button type="submit">SIGN UP</Button>
      </form>
      <div>
        <p className="font-medium">
          Already have any account?{" "}
          <Link href="" className="text-secondary font-bold">
            SIGN IN
          </Link>
        </p>
      </div>
    </div>
  );
}
