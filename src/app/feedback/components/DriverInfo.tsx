import Image from "next/image";

export default function DriverInfo() {
  return (
    <>
      <div
        className="flex gap-4 h-[108px] w-80 border rounded-xl mt-4 py-4
      "
      >
        <div className="flex justify-center items-center w-1/3 ml-4">
          <Image
            src="https://cdn.discordapp.com/attachments/836149187837034528/1168112215199600661/IMG_2031.jpg?ex=65912dc6&is=657eb8c6&hm=fdf3cd2e3f97226859c4bf52c6992a8a54a445dd459c712061bef584dac58be8&"
            alt="driver-profile"
            width={76}
            height={76}
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-around w-2/3 ">
          <div>
            <p className="font-lexendExa  text-secondary w-56 font-normal">
              First, Visal
            </p>
          </div>
          <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
          <div className="font-jura  font-semibold  text-[#216A61] ">
            Taycan | RICH
          </div>
        </div>
      </div>
    </>
  );
}
