"use client";
import Image from "next/image";
export default function BackButton() {
  const goToPreviousPage = () => {
    console.log("redirect...");
  };

  return (
    <>
      <div
        className="absolute left-[40px] opacity-40 cursor-pointer"
        onClick={goToPreviousPage}
      >
        <Image
          src="/image/arrow-back.svg"
          width={26}
          height={87}
          alt="app-logo"
        />
      </div>
    </>
  );
}
