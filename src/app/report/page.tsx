import Input from "@/components/Input";
import Image from "next/image";
import BackButton from "./(components)/BackButton";
import UploadButton from "@/components/FileUpload";
import Button from "@/components/Button";
import DriverForm from "../driver/(components)/DriverForm";
import ReportForm from "./(components)/ReportForm";

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
        <div className="w-full flex flex-col">
          <div className="text-label font-bold flex-row flex justify-center items-center gap-1 h-20 w-screen border-b-2 border-stroke border-opacity-20 relative">
            <BackButton pageRoute="/driver" />
            <p className="text-2xl  text-center font-lexendExa text-secondary">
              Report
            </p>
          </div>
          <ReportForm></ReportForm>
        </div>
      </div>
    </div>
  );
}
