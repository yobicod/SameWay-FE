"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Icon from "@/components/Icon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

export default function CurrentLocation() {
  const searchSchema = z.object({
    locationStart: z.string().min(1, { message: "Enter Your location" }),
    locationEnd: z.string().min(1, { message: "Enter Your destination" }),
    startLat: z.number(),
    startLng: z.number(),
    endLat: z.number(),
    endLng: z.number(),
    notes: z.string(),
  });

  type searchData = z.infer<typeof searchSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<searchData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      locationStart: "",
      locationEnd: "",
      notes: "",
    },
  });

  const submitForm = async (data: searchData) => {
    console.log(data);
  };
  return (
    <div className="flex gap-6 flex-col w-80">
      <form
        className="flex flex-col gap-5 w-[354px]"
        onSubmit={handleSubmit(submitForm)}
      >
        <p className="text-3xl text-secondary font-jura">
          Where would you like to go <span className="font-bold">today ?</span>
        </p>
        <div className="relative h-[162px] rounded-[25px] flex gap-3 flex-col justify-center items-center bg-fieldGray pl-10 ">
          <div className="absolute left-[23px]">
            <Image
              src="/image/line.svg"
              width={26}
              height={87}
              alt="app-logo"
            />
          </div>
          <div className="absolute top-[60px] left-[260px] z-10">
            <Button
              startIcon={
                <Icon
                  name="sync_alt"
                  className="material-symbols-outlined rotate-90"
                />
              }
              className="w-[44px] h-[44px] rounded-full flex justify-center bg-fieldOrange "
            />
          </div>
          <div>
            <Input
              startIconClassName="top-[13px] left-[13px]"
              startIcon={
                <Icon
                  name="location_on"
                  className="material-symbols-outlined text-fieldOrange md-30"
                />
              }
              register={register("locationStart")}
              placeholder="Enter Your location"
              btnClassName="font-bold rounded-[30px] border-white w-[294px] h-[58px] pl-12"
            />
            {errors.locationStart && (
              <p className="text-red-500 font-light text-sm">
                {errors.locationStart.message}
              </p>
            )}
          </div>
          <div>
            <Input
              startIconClassName="top-[13px] left-[13px]"
              startIcon={
                <Icon
                  name="location_on"
                  className="material-symbols-outlined md-24 text-secondary md-30"
                />
              }
              btnClassName="font-bold rounded-[30px] pl-12 border-white w-[294px] h-[58px]"
              register={register("locationEnd")}
              placeholder="Enter Your lng"
            />
            {errors.locationEnd && (
              <p className="text-red-500 font-light text-sm">
                {errors.locationEnd.message}
              </p>
            )}
          </div>
        </div>
        <div className="text-label font-bold flex-col flex gap-1">
          <p>Notes to driver</p>
          <Input
            btnClassName="h-[56px] w-full border rounded px-4 py-2 text-secondary border-borderGray"
            placeholder="Note to driver"
          />
        </div>
        <Button
          type="submit"
          className="font-lexendExa flex items-center justify-center"
        >
          BOOK
        </Button>
      </form>
    </div>
  );
}
