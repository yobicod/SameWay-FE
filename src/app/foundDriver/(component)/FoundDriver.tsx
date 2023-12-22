"use client";
import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Link from 'next/link'

export default function FoundDriver() {
  return (
    <div className="w-full bg-white rounded-t-[3rem]">
      <div className="flex justify-center items-center">
        <div className="flex p-6 flex-col space-y-4">
          <div className="flex pt-3 justify-between">
            <div className="flex space-x-3">
              <Image
                src="/imgFoundDriver/driver_img.svg"
                width={0}
                height={0}
                alt="app-logo"
                className="w-[4.5rem]"
              />
              <div className="flex flex-col text-secondary">
                <p className="font-lexendExa text-secondary font-normal">
                  Somsri, jang
                </p>
                <div>⭐️⭐️⭐️⭐️⭐️</div>
                <div className="font-jura font-semibold text-secondary ">
                  Taycan | RICH
                </div>
              </div>
            </div>
            <div className="p-1.5 h-8 space-x-1 flex justify-center items-center border-2 text-[#ced0d2] rounded-full">
              <Icon name="report" className="material-symbols-outlined" />
              <p className="font-jura font-bold text-sm text-[#B5B7B9]">
                Report
              </p>
            </div>
          </div>
          <div className="flex py-3 px-4 rounded-2xl bg-[#F2F2F2] space-x-4 justify-center items-center">
            <div className="flex items-center border rounded-full border-[#B5B7B9] h-8 px-2">
              <p className="font-jura font-bold text-lg text-secondary">5km</p>
            </div>
            <div className="flex space-x-2">
              <Image
                src="/imgFoundDriver/line_destination.svg"
                width={0}
                height={0}
                alt="app-logo"
                className="w-[0.4rem]"
              />
              <div className="font-lexendExa text-[#848181] text-base">
                <p>Airport rail link</p>
                <p>Union mall</p>
              </div>
            </div>
            <div className="border-l-2 border-[#B5B7B9] h-12"></div>
            <div className="font-jura font-bold text-secondary">
              <p className="text-xl">120</p>
              <p>THB</p>
            </div>
          </div>
          <Link href='' className="flex w-80 font-bold justify-center bg-transparent text-[#216A61] border-2 border-[#216A61]">
            <p className="font-jura">SEE MORE</p>
          </Link>
        </div>
      </div>
    </div>
  );
}