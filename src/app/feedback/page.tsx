import Input from "@/components/Input";
import BackButton from "../report/(components)/BackButton";
import Image from "next/image";

export default function FeedBack() {
  return (
    <>
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
            <BackButton pageRoute="/driver" />
            <p className="text-2xl  text-center font-lexendExa text-secondary">
              Feedback
            </p>
          </div>
          <div className="text-label font-bold flex-col flex gap-1 w-80">
            <p>Please select a problem *</p>
            <Input placeholder="Select Problem" />
          </div>

          <div className="text-label font-bold flex-col flex gap-1 w-80">
            <p>Description</p>
            <textarea className="border rounded border-stroke px-4 py-2 text-secondary h-[124px]"></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
