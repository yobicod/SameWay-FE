import Input from "@/components/Input";
import Image from "next/image";
import BackButton from "./(components)/BackButton";

export default function Report() {
  return (
    <div className="flex flex-col gap-4  py-8 border-indigo-600 font-jura w-screen h-screen">
      <div className="flex items-center gap-[14px] px-9">
        <Image src="/logo/logo.svg" width={70} height={37} alt="app-logo" />
        <div className="border border-secondary w-full"></div>
      </div>

      <div
        className="inset-x-0  rounded-t-[50px] flex gap-6 flex-col justify-start items-center bg-white h-full "
        style={{ boxShadow: "0px -4px 4px 0px rgba(164, 159, 159, 0.25)" }}
      >
        <div className="text-label font-bold flex-row flex justify-center items-center gap-1 h-20 w-screen  border-b-2 border-stroke border-opacity-20 relative">
          <BackButton />
          <p>Report</p>
        </div>

        <div className="text-label font-bold flex-col flex gap-1 w-80">
          <p>Please select a problem *</p>
          <Input placeholder="Select Problem" />
        </div>

        <div className="text-label font-bold flex-col flex gap-1 w-80">
          <p>Description</p>
          <Input placeholder="Description" />
        </div>

        <div className="text-label font-bold flex-col flex gap-1 w-80">
          <p>Attachment</p>
          <Input placeholder="Attachments" />
        </div>
      </div>
    </div>
  );
}
