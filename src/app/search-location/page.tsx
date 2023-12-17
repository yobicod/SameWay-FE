import Image from "next/image";
import React from "react";
import CurrentLocation from "./(components)/CurrentLocation";
import SearchLocation from "./(components)/SelectLocation";

export default function SelectDestinationPage() {
  return (
    <div className="flex flex-col gap-4 font-jura py-8 pt-0 relative h-screen">
      <div>
        <Image
          src="https://cdn.discordapp.com/attachments/1180138826778284083/1185222861766541426/map.png?ex=658ed3ce&is=657c5ece&hm=0601dcadc9d71df6ea994d74692e6782d865a6bdf6e1c7842c7090a970380d42&"
          width={0}
          height={0}
          sizes="100vw"
          alt="app-logo"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="fixed top-10 inset-x-0 flex gap-6 flex-col justify-center items-center ">
        <SearchLocation />
      </div>
      <div
        className="fixed bottom-0 inset-x-0 py-8 rounded-t-[50px] flex gap-6 flex-col justify-center items-center bg-black pr-8 h-90"
        style={{ boxShadow: "0px -4px 4px 0px rgba(164, 159, 159, 0.25)" }}
      >
        <CurrentLocation />
      </div>
    </div>
  );
}
