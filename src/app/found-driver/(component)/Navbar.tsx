"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex ">
        <div className="flex justify-center items-center w-full h-20 bg-white space-x-5">
          <Image
            src="/imgFoundDriver/logo_foundDriver.svg"
            width={0}
            height={0}
            alt="app-logo"
            className="w-[4.5rem]"
          />
          <Image
            src="/imgFoundDriver/line_navbar.svg"
            width={0}
            height={0}
            alt="app-logo"
            className="w-44"
          />
          <Image
            src="/imgFoundDriver/user_profile_navbar.svg"
            width={0}
            height={0}
            alt="app-logo"
            className="w-12"
          />
        </div>
      </div>
    </div>
  );
}
