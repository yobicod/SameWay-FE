import Button from "@/components/Button"
const data = [
  {
    locationStart: "Airport rail link",
    locationEnd: "Union mall",
    dateTime: "Feb 14, 2023 18:42",
    price: 120,
    report: false,
    feedback: false,
    rate: 0
  },
  {
    locationStart: "Airport rail link",
    locationEnd: "Union mall",
    dateTime: "Feb 14, 2023 18:42",
    price: 80,
    report: false,
    feedback: true,
    rate: 5
  },
  {
    locationStart: "Airport rail link",
    locationEnd: "Union mall",
    dateTime: "Feb 14, 2023 18:42",
    price: 60,
    report: true,
    feedback: false,
    rate: 0
  }
]

interface IProps {
  setTab: (value: string) => void
}
export default function PassengerHistory({ setTab }: IProps) {
  function handleClick() {
    setTab("Driver")
  }
  return (
    <div>
      <div className='w-[367px] h-[46px] bg-[#EEEEEE] rounded-xl flex justify-between items-center gap-1 text-secondary font-bold'>
        <Button className='w-4/5 flex items-center justify-center bg-white h-4/5 ml-1.5 rounded-xl text-secondary font-jura'>
          <p>Passenger</p>
        </Button>
        <Button
          className='w-4/5 flex items-center justify-center bg-[#EEEEEE] h-4/5 mr-1.5 rounded-xl text-secondary font-jura '
          onClick={handleClick}
        >
          <p>Driver</p>
        </Button>
      </div>

      <div>
        {data.map((datas: any) => (
          <div className='mt-3'>
            <div className='w-[367px] min-h-[135px] border border-[#EEEEEE] rounded-[20px]'>
              <div className='flex'>
                <div className='w-2/3 ml-5 mt-5 text-base font-lexendExa text-primary'>
                  <div className='flex mb-[-6px]'>
                    <div className='flex justify-center pt-2'>
                      <div className='rounded-full border border-[#E07C58] w-2 h-2 mr-2 ' />
                    </div>
                    <p className='break-words w-full'>{datas.locationStart}</p>
                  </div>
                  <div className='w-0.5 min-h-[15px] bg-borderSwitch ml-[2.5px] mb-[-6px] '></div>
                  <div className='flex '>
                    <div className='flex justify-center pt-2'>
                      <div className='rounded-full bg-secondary w-2 h-2 mr-2' />
                    </div>
                    <p className='break-words w-full'>{datas.locationEnd}</p>
                  </div>
                </div>
                <div className='w-1/3 flex flex-col justify-center items-center text-xl text-secondary'>
                  <p>
                    {datas.price} <span className='text-sm'>THB</span>
                  </p>
                  {datas.rate != 0 && (
                    <p className=' text-xs pr-5'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                  )}
                </div>
              </div>
              <div className='flex text-sm pt-5 font-light'>
                <div className='w-full pr-2 mr-2 pl-5'>
                  <p>{datas.dateTime}</p>
                </div>
                <div className='flex justify-end w-full pr-4'>
                  {!datas.report && (
                    <div>
                      <Button className='w-20 h-7 mr-2 text-secondary bg-white border border-secondary'>
                        Report
                      </Button>
                    </div>
                  )}
                  {!datas.feedback && (
                    <div>
                      <Button className='w-24 px-0.5 h-7 '>Feedback</Button>
                    </div>
                  )}
                </div>

                {/* <Button className="min-w-20 min-h-6">Report</Button> */}
                {/* <Button>Feedback</Button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
