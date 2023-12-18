import Button from '@/components/Button'

export default function HistoryInfo() {
  return (
    <div>
      <div className="w-[367px] h-[46px] bg-[#EEEEEE] rounded-xl flex justify-between  items-center gap-1 text-secondary font-bold">
        <div className="w-4/5 flex items-center justify-center bg-white h-4/5 ml-1.5 rounded-xl">
          <p>Passenger</p>
        </div>
        <div className="w-4/5 flex items-center justify-center bg-white h-4/5 mr-1.5 rounded-xl">
          <p>driver</p>
        </div>
      </div>
      <div className="mt-3">
        <div className="w-[367px] h-[135px] border border-[#EEEEEE] rounded-[20px] ">
          <div className="flex">
            <div className="w-2/3 ml-5 mt-5 text-base">
              <div className="flex ">
                <div className="rounded-full border border-[#E07C58] w-2 h-2 mr-2 " />
                <p>
                  Airport rail
                  linkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                </p>
              </div>
              <div className="flex">
                <div className="rounded-full bg-secondary w-2 h-2 mr-2" />
                <p>Union malljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
              </div>
            </div>
            <div className="w-1/3 flex justify-center items-center text-xl text-secondary">
              <p>
                120 <span className="text-sm">THB</span>
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="w-full">Feb 14, 2023 18:42</p>
            <Button>Report</Button>
            <Button>Feedback</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
