import BackButton from "../../components/BackButton";
import Image from "next/image";
import FeedbackForm from "./components/FeedbackForm";
import DriverInfo from "./components/DriverInfoFeedback";

export default function FeedBackPage() {
  return (
    <>
      <div className="flex flex-col gap-4  py-8 border-indigo-600">
        <div className="flex items-center gap-[14px] px-9">
          <Image src="/logo/logo.svg" width={70} height={37} alt="app-logo" />
          <div className="border border-secondary w-full"></div>
        </div>

        <div
          className="inset-x-0  rounded-t-[50px] flex flex-col gap-4 items-center"
          style={{ boxShadow: "0px -4px 4px 0px rgba(164, 159, 159, 0.25)" }}
        >
          <div className="text-label font-bold flex justify-center items-center gap-1 h-20 w-screen  border-b-2 border-stroke border-opacity-20 relative">
            <BackButton pageRoute="/driver" />
            <p className="text-xl  text-center text-secondary font-semibold">
            ข้อเสนอแนะ
            </p>
          </div>
          <DriverInfo></DriverInfo>
          <FeedbackForm></FeedbackForm>
        </div>
      </div>
    </>
  );
}
