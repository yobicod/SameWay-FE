"use client";
import Button from "@/components/Button";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

export default function DriverInformation() {
  return (
    <div
      className="w-full absolute top-14 bg-white rounded-t-[3rem] h-full"
      style={{ boxShadow: "0px -4px 4px 0px rgba(164, 159, 159, 0.25)" }}
    >
      <div className="flex flex-col p-8 space-y-4">
        <div className="flex space-x-3">
          <Image
            src="/imgDriverInformation/arrow-back.svg"
            width={0}
            height={0}
            alt="app-logo"
            className="w-7"
          />
          <p className="text-secondary text-xl">รายละเอียดคนขับ</p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Image
            src="/imgDriverInformation/img-driver.svg"
            width={0}
            height={0}
            alt="app-logo"
            className="w-32"
          />
          <p className="text-secondary text-2xl font-medium">สมศรี หมีอ้วน</p>
          <div>⭐️⭐️⭐️⭐️⭐️</div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="p-4 flex border-2 rounded-3xl space-x-5">
            <p className="text-[#848181]">อายุ</p>
            <p className="text-secondary">30</p>
          </div>
          <div className="p-4 flex border-2 rounded-3xl space-x-5">
            <p className="text-[#848181]">เพศ</p>
            <p className="text-secondary">ผู้หญิง</p>
          </div>
          <div className="p-4 flex border-2 rounded-3xl space-x-5">
            <p className="text-[#848181]">ทะเบียนรถยนต์</p>
            <p className="text-secondary">กท3452</p>
          </div>
          <div className="p-4 flex border-2 rounded-3xl space-x-5">
            <p className="text-[#848181]">รุ่นรถยนต์</p>
            <p className="text-secondary">Mazda 3</p>
          </div>
          <div className="p-4 flex border-2 rounded-3xl space-x-5">
            <p className="text-[#848181]">เบอร์โทรศัพท์</p>
            <p className="text-secondary">0821851893</p>
          </div>
        </div>
        <div className="flex py-3 px-4 rounded-2xl bg-fieldGray space-x-6 items-center">
          <div className="flex items-center border rounded-full border-border-switch h-8 px-2">
            <p className="font-light text-secondary text-xl">5กม.</p>
          </div>
          <div className="flex space-x-2">
            <Image
              src="/imgFoundDriver/line_destination.svg"
              width={0}
              height={0}
              alt="app-logo"
              className="w-[0.4rem]"
            />
            <div className="text-[#848181] text-base">
              <p>แอพอร์ตเรลลิ้ง</p>
              <p>ยูเนี่ยนมอลล์</p>
            </div>
          </div>
          <div className="border-l-2 border-[#B5B7B9] h-12" />
          <div className="text-secondary">
            <p className="text-xl">120</p>
            <p>บาท</p>
          </div>
        </div>
        <Link
          href=""
          className="flex p-1.5 rounded justify-center bg-secondary text-white  cursor-pointer"
        >
          <p>รายงาน</p>
        </Link>
      </div>
    </div>
  );
}
